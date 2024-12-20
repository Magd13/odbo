# app.py
from flask import Flask, jsonify, request, session
from flask_cors import CORS
import psycopg2
from config import DATABASE_CONFIG
from twilio.rest import Client
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


app = Flask(__name__)
CORS(app)
# Configuración de la conexión a la base de datos PostgreSQL
conn = psycopg2.connect(**DATABASE_CONFIG)

#Codigos de verificacion de datos
twilio_id = 'AC44c8c2ea2f15b184e252c788926452f5'
twilio_token = '29f39803810c485f8ebf23213ad32b4e'
verificacion_id = "VA4ec543dc919584a9c14d7d25e653bde7"
twilio_numero = '+593999704133'

#Inicializar twilio
client = Client(twilio_id, twilio_token)

# Ruta para obtener datos de la base de datos
@app.route('/datos')
def obtener_datos():
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM clientes')
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

@app.route('/insertar', methods=['POST'])
def insertar_datos():
    if request.method == 'POST':
        data = request.json
        print(data)
        # Extraer los datos específicos necesarios para la inserción
        id_cedula = data.get('cedula')
        nombres = data.get('nombres')
        apellidos = data.get('apellidos')
        telefono = data.get('telefono')
        correo = data.get('email')
        contraseña = data.get('contraseña')
        usuario = data.get('usuario')
        
        # Realizar la inserción en la base de datos
        cursor = conn.cursor()
        try:
            cursor.execute('INSERT INTO clientes (id_cedula, nombres, apellidos, telefono, correo, "contraseña", usuario) VALUES (%s, %s, %s, %s, %s, %s, %s)', 
                            (id_cedula, nombres, apellidos, telefono, correo, contraseña, usuario))
            conn.commit()
            cursor.close()
            return jsonify({'message': 'Datos insertados correctamente'})
        except Exception as e:
            conn.rollback()
            cursor.close()
            print("Error al insertar datos:", str(e))  # Mensaje de depuración para imprimir el error
            return jsonify({'error': str(e)}), 500

# Ruta para verificar correo existente
@app.route('/verificar_correo', methods=['POST'])
def verificar_correo():
    data=request.get_json()
    correo = data.get('email')
    cursor= conn.cursor()
    try:
        cursor.execute('SELECT correo FROM clientes WHERE correo = %s', (correo,))
        result= cursor.fetchone()
        cursor.close()
        if result:
            return jsonify({'error': 'El correo electrónico ingresado ya está en uso'})
        else:
        # Si el correo no se encuentra en la base de datos, devolver un mensaje de éxito
            return jsonify({'success': 'El correo electrónico está disponible'})
    except Exception as e:
        cursor.close()
        print("Error al verificar correo:", str(e))  
        return jsonify({'error': 'Error al verificar correo'}), 500
        
# Ruta para verificar la existencia de la cédula y el nombre de usuario
@app.route('/verificar_datos', methods=['POST'])
def verificar_datos():
    data = request.get_json()
    cedula = data.get('cedula')
    usuario = data.get('usuario')

    cursor = conn.cursor()
    try:
        # Verificar si la cédula ya está asociada a una cuenta
        cursor.execute('SELECT * FROM clientes WHERE id_cedula = %s', (cedula,))
        cedula_result = cursor.fetchone()

        # Verificar si el nombre de usuario ya está en uso
        cursor.execute('SELECT * FROM clientes WHERE usuario = %s', (usuario,))
        usuario_result = cursor.fetchone()

        cursor.close()

        response = {}
        if cedula_result:
            response['cedula_error'] = 'Este número de cédula ya está ligado a una cuenta.'
        if usuario_result:
            response['usuario_error'] = 'Este nombre de usuario ya está en uso, por favor elige otro.'

        return jsonify(response)

    except Exception as e:
        cursor.close()
        print("Error al verificar la cédula y el usuario:", str(e))
        return jsonify({'error': 'Error al verificar la cédula y el usuario'}), 500

@app.route('/verificar_telefono', methods=['POST'])
def verificar_telefono():
    data= request.get_json()
    telefono= data.get('telefono')
    cursor= conn.cursor()
    try:
        cursor.execute('SELECT telefono FROM clientes where telefono = %s', (telefono,))
        result= cursor.fetchone()
        cursor.close()
        if result:
            return jsonify({'error':'El numero de telefono ya esta en uso'})
        else:
            return jsonify({'success':'El numero de telefono esta disponible'})
    except Exception as e:
        cursor.close()
        print("Error al verificar telefono", str(e))
        return jsonify({'error':'Error al verificar el telefono'})
    
@app.route('/enviar_codigo_verificacion', methods=['POST'])
def enviar_codigo_verificacion():
    telefono = request.json.get('telefono')
    telefono_con_codigo_pais = '+593' + telefono
    try:
        verificacion = client.verify.services(verificacion_id) \
        .verifications \
        .create(to="whatsapp:" + telefono_con_codigo_pais, channel='sms')
        if verificacion.status == "pending":
            return jsonify({'success':'Código de verificación enviado exitosamente'})
        else:
            return jsonify({'error':'Error al enviar el código de verificación'})
    except Exception as e:
        return jsonify({'error':str(e)}), 500
    
@app.route('/enviar_codigo_email', methods=["POST"])
def enviar_codigo_email():
    email= request.json.get("email")
    app.logger.info('Enviando código de verificación por correo electrónico a: %s', email)
    
    try:
        verificacion = client.verify.v2.services(verificacion_id) \
        .verifications \
        .create(to=email, channel='email')
        if verificacion.status == "pending":
            app.logger.info('Código de verificación enviado exitosamente por correo electrónico')
            return jsonify({'success':'Código de verificación enviado existosamente'})
        else:
            app.logger.error('Error al enviar el código de verificación por correo electrónico')
            return jsonify({'error':'Error al enviar el código de verificación'})
    except Exception as e:
        app.logger.error('Error al enviar el código de verificación por correo electrónico: %s', str(e))
        return jsonify({'error': str(e)}),500
        
@app.route('/verificar_codigo_verificacion', methods=['POST'])
def verificar_codigo_verificacion():
    codigo_ingresado = request.json.get('codigo_verificacion')
    data = request.json
    telefono = data.get('telefono')
    telefono_con_codigo_pais = '+593' + telefono

    try:
        # Verificar el código ingresado por el usuario
        verificacion_check = client.verify.v2.services(verificacion_id) \
            .verification_checks \
            .create(to=telefono_con_codigo_pais, code=codigo_ingresado)

        # Comprobar el estado de la verificación
        if verificacion_check.status == "approved":
            return jsonify({'success': 'Código de verificación correcto'})
        else:
            return jsonify({'error': 'Código de verificación incorrecto'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/verificar_codigo_email', methods=['POST'])
def  verificar_codigo_email():
    codigo_ingresado = request.json.get('codigo_verificacion')
    data = request.json
    email = data.get('email')
    
    try:
        verificacion_check = client.verify.v2.services(verificacion_id) \
            .verification_checks \
            .create(to=email, code= codigo_ingresado)
        if verificacion_check.status == "approved":
            return jsonify({'success':'Codigo de verificacion correcto'})
        else:
            return jsonify({'error':'Codigo de verificacion incorrecto'}), 400
    except Exception as e:
        return jsonify({'error':str(e)}), 500
    
    
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username_email = data.get('username')
    password= data.get( 'password')
    cursor = conn.cursor()
    try:
        cursor.execute('SELECT * from clientes WHERE usuario = %s or correo = %s',(username_email,username_email))
        user = cursor.fetchone()
        print(user)
        
        if user:
            stored_password = user[5]
            if password == stored_password:
                id_cedula, nombres, apellidos, telefono, correo, contraseña, id_videoteca, nombre = user
                usuario_data = {
                    'id_cedula': id_cedula,
                    'nombres': nombres,
                    'apellidos': apellidos,
                    'telefono': telefono,
                    'correo': correo,
                    'contraseña': contraseña,
                    'id_videoteca': id_videoteca,
                    'usuarios': nombre
                }
                return jsonify({'success':'Inicio de sesion exitoso', 'usuario': usuario_data})
            else:
                return jsonify({'error':'Contraseña incorrecta'}), 401
        else:
            return jsonify({'error':"Usuario no encontrado"}),  404
    except Exception as e:
        print("Error en el inicio de sesión", str(e))
        return jsonify({'error':'Error al iniciar sesión'}), 500
    finally:
        cursor.close()
@app.route('/verificar_contraseña', methods=['POST'])
def verificar_contraseña():
    data = request.get_json()
    actualPassword = data.get('actualPassword')
    cedula = data.get('cedula')

    cursor = conn.cursor()
    try:
        # Verificar si la contraseña actual coincide con la almacenada en la base de datos para el usuario dado
        cursor.execute('SELECT "contraseña" FROM clientes WHERE id_cedula = %s', (cedula,))
        stored_password = cursor.fetchone()[0]

        if actualPassword == stored_password:
            return jsonify({'success': True})
        else:
            return jsonify({'success': False, 'error': 'La contraseña actual es incorrecta'})
    except Exception as e:
        print("Error al verificar la contraseña:", str(e))
        return jsonify({'success': False, 'error': 'Error al verificar la contraseña'}), 500
    finally:
        cursor.close()
        
@app.route('/actualizar_datos', methods=['POST'])
def actualizar_datos():
    data = request.get_json()
    formData = data.get('formData')

    # Extraer los datos específicos del formData
    id_cedula = formData.get('cedula')
    nombres = formData.get('nombres')
    apellidos = formData.get('apellidos')
    telefono = formData.get('telefono')
    correo = formData.get('email')
    contraseña = formData.get('contraseña')
    usuario = formData.get('usuario')

    cursor = conn.cursor()
    try:
        # Realizar la actualización de los datos en la base de datos
        cursor.execute('UPDATE clientes SET nombres = %s, apellidos = %s, telefono = %s, correo = %s, "contraseña" = %s, usuario = %s WHERE id_cedula = %s', 
                       (nombres, apellidos, telefono, correo, contraseña, usuario, id_cedula))
        conn.commit()
        return jsonify({'success': True})
    except Exception as e:
        conn.rollback()
        print("Error al actualizar los datos:", str(e))
        return jsonify({'success': False, 'error': str(e)}), 500
    finally:
        cursor.close()
            
        
if __name__ == '__main__':
    app.run(debug=True)

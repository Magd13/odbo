import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FormEmail from "./register/formEmail";
import FormTelefono from "./register/formTelefono";
import FormContraseña from "./register/formContraseña";
import FormNombres from "./register/formNombres";
import FormTelefonoVal from "./register/formValidacionTelefono";
import FormEmailVal from "./register/formValidacionEmail";

function Formcuenta() {
  const location = useLocation();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [telefonoRegistrado, setTelefonoRegistrado] = useState('');
  // Verificar si se ha pasado el estado editMode como parte de la ubicación
  useEffect(() => {
    if (location.state && location.state.editMode && location.state && location.state.userData) {
      setUserData(location.state.userData);
      setEditMode(true);
    }
  }, [location.state]);
  
  // Verificar si userData está definido antes de asignar sus valores
  useEffect(() => {
    if (userData) {
      setFormData(prevFormData => ({
        ...prevFormData,
        email: userData.email || '',
        nombres: userData.nombres || '',
        telefono: userData.telefono || '',
        apellidos: userData.apellidos || '',
        cedula: userData.cedula || '',
        usuario: userData.usuario || ''
      }));
      if (editMode) {
        setTelefonoRegistrado(userData.telefono || "");
      }
    }
  }, [userData, editMode]);
  
  const [formData, setFormData] = useState({
    email: '',
    telefono: '',
    contraseña: '',
    nombres: '',
    apellidos: '',
    cedula: '',
    usuario: '',
    confirmPassword: '',
    aceptoTerminos: false,
    aceptoContacto: false
  });

  
  const handleGoBack = () => {
    navigate(-1);
  }

  const onClose = () => {
    setShowEmailForm(false);
    setShowContraseñaForm(false);
    setShowEmailForm(false);
    setShowNombresForm(false);
    setShowTelefonoForm(false);
  };

  const [emailError, setEmailError] = useState('');
  const [cedulaError, setCedulaError] = useState ('');
  const [usuarioError, setUsuarioError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [contraseñaError, setContraseñaError] = useState('');
  const [emailValidado, setEmailValidado] = useState(false);
  const [nombreValidado, setNombreValidado] = useState(false);
  const [telefonoValidado, setTelefonoValidado] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [buttonEnabled, setButtonEnabled] = useState({
    nombre: false,
    telefono: false,
    contraseña: false
  });

  // Si estamos en modo de edición, habilitar todos los botones
  useEffect(() => {
    if (editMode) {
      setButtonEnabled({
        nombre: true,
        telefono: true,
        contraseña: true
      });
    }
  }, [editMode]);

  

  // FUNCION PARA VALIDAR EL EMAIL
  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    // Validar que el email sea válido
    if (!validateEmail(formData.email)) {
      setEmailError('El correo electrónico ingresado no es válido');
      return;
    }else {
      setEmailError('');
    }
    // Validar que se hayan aceptado los términos
    if (!formData.aceptoTerminos) {
      setEmailError('Debes aceptar los términos y condiciones');
      return;
    }else {
      setEmailError('');
      
    }
    
    //Verificar existencia de correo
    fetch('http://localhost:5000/verificar_correo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: formData.email }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setEmailError("Este correo ya está en uso");
      } else {
       fetch('http://localhost:5000/enviar_codigo_email',{
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
         body:JSON.stringify({email: formData.email}),
       })
       .then(response => response.json())
       .then(data =>{
        if (data.success) {
          handleShowValidacionEmailForm();
          setEmailError("");
        }else {
          setEmailError("Error al enviar el codigo de verificacion. Inténtalo de nuevo mas tarde.");
        }
       })
       .catch(error => {
        setEmailError("Error al enviar el codigo de verificacion:",error);
       });
      }
    })
    .catch(error => {
      setEmailError('Error al verificar correo:', error);
    });
  }

  //FUNVION DE VALIDACION DE CODIGO DE SEGURIDAD DEL CORREO
  const  handleEmailCodigoValidacion = (event) => {
    event.preventDefault( );
    const codigo_verificacion = event.target['verification-code'].value;
  
    fetch('http://localhost:5000/verificar_codigo_email', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        codigo_verificacion: codigo_verificacion,
        email: formData.email
      }),
    })
    .then(response => response.json())
    .then (data => {
      if(data.success){
        setShowValidacionEmailForm(false);
        if (editMode){
          return;
        }
        setEmailValidado(true);
        setButtonEnabled(prevState => ({ ...prevState, nombre: true }));
      }else {
        setEmailError("Error al verificar codigo de verificacion", data.error);
      }
    })
    .catch(error => {
      setEmailError("Error al verificar codigo de verificacion", error);
    });
  };

  //FIN DE VALIDACION DE EMAIL
  //FUNCION PARA VALIDACION DE NOMBRES Y  APELLIDOS DE USUARIO
  const handleSubmitNombres = (event) => {
    event.preventDefault( );
    
    if (formData.nombres === "" || formData.apellidos === "" || formData.cedula === "" || formData.usuario === "") {
      // Mostrar mensaje de error o tomar otra acción según sea necesario
      setUsuarioError("Todos los campos son requeridos");
      return;
    }else {
      setUsuarioError("");
    }

    // Validar que el número de cédula tenga 10 dígitos numéricos
    if (!/^\d{10}$/.test(formData.cedula)) {
      // Mostrar mensaje de error o tomar otra acción según sea necesario
      setCedulaError("El número de cédula debe tener 10 dígitos");
      return;
    }else {
      setCedulaError("");
    }

    //Verificar la existencia del numero de cedula y usuario si no esta en modo de edicion
    if (!editMode){
    fetch('http://localhost:5000/verificar_datos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        cedula: formData.cedula,
        usuario: formData.usuario
      }),
    })
    .then((response) => response.json())
    .then(data => {
      if (data.cedula_error) {
        setCedulaError(data.cedula_error);
      } else if (data.usuario_error) {
        setUsuarioError(data.usuario_error);
      } else {
        // Si no hay errores, puedes proceder al siguiente paso
        setShowNombresForm(false);
        setNombreValidado(true);
        setButtonEnabled(prevState => ({ ...prevState, telefono: true }));
      }
    })
    .catch((error) => {
      setUsuarioError("Ocurrió un error al verificar la cedula y el usuario", error);
    });
  } else {
    setShowNombresForm(false);
  }
}

  //FIN DE LA VALIDACION DE NOMBRES
  //FUNCION PARA VALIDAR EL NUMERO DE TELEFONO
  const handleSubmitTelefono = (event)=> {
    event.preventDefault();
    // Validar que el número de teléfono tenga exactamente 9 dígitos numéricos
    if (!/^\d{9}$/.test(formData.telefono)) {
      // Mostrar mensaje de error o tomar otra acción según sea necesario
      setTelefonoError("El número de teléfono debe tener 9 dígitos numéricos");
      return;
    }else {
      setTelefonoError(null);
    }

    if (!formData.aceptoContacto) {
      // Mostrar mensaje de error o tomar otra acción según sea necesario
      setTelefonoError("Debes aceptar que te contacten por WhatsApp y/o SMS");
      return;
    }else {
      setTelefonoError(null);
    }

     // Verificar si está en modo de edición y el número de teléfono ingresado es el mismo que el número existente
     if(editMode && formData.telefono === telefonoRegistrado) {
      setTelefonoError("El número ingresado es el mismo. Si deseas modificarlo, ingresa un nuevo número")
      return;
     }
    
     // Verificar existencia de numero de telefono 
    fetch('http://localhost:5000/verificar_telefono', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ telefono: formData.telefono }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setTelefonoError("Este numero de telefono ya esta en uso");
      } else {
        // Si el número de teléfono no está en uso, enviar el código de verificación desde el servidor
        fetch('http://localhost:5000/enviar_codigo_verificacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ telefono: formData.telefono }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Si el código se envió correctamente, mostrar el formulario de validación
            handleShowValidacionForm();
            setTelefonoError(""); // Limpiar el error de teléfono si lo hay
          } else {
            setTelefonoError("Error al enviar el código de verificación. Inténtalo de nuevo más tarde.");
          }
        })
        .catch(error => {
          setTelefonoError('Error al enviar el código de verificación:', error);
        });
      }
    })
    .catch(error => {
      setTelefonoError('Error al verificar numero de telefono', error);
    });
  }

//FUNVION DE VALIDACION DE CODIGO DE SEGURIDAD DEL TELEFONO
const handleSubmitCodigoVerificacion = (event) => {
  event.preventDefault();

  const codigoVerificacion = event.target['verification-code'].value;  // Obtener el código de verificación del formulario

  fetch('http://localhost:5000/verificar_codigo_verificacion', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        codigo_verificacion: codigoVerificacion,
        telefono: formData.telefono
      }),  // Enviar el código de verificación al servidor
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Si la verificación es exitosa, actualizar el estado de la aplicación
          setShowValidacionForm(false);
          if(editMode) {
            return;
          }
          setTelefonoValidado(true);
          setButtonEnabled(prevState => ({ ...prevState, contraseña: true }));
      } else {
          // Si la verificación falla, mostrar un mensaje de error
          setTelefonoError('Error al verificar código de verificación:', data.error);
          // Aquí puedes mostrar un mensaje de error al usuario o tomar otra acción según necesites
      }
  })
  .catch(error => {
      setTelefonoError('Error al verificar código de verificación:', error);
      // Aquí puedes manejar errores de red u otros errores de comunicación con el servidor
  });
};
//FIN DE LA VALIDACION DE TELEFONO
//FUNCION PARA VALIDACION DE CONTRASEÑA  

const handleSubmitContraseña = (event) => {
  event.preventDefault();

  const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
  if (!contraseñaRegex.test(formData.contraseña)) {
    setContraseñaError('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número');
    return;
  }


  // Validar que las contraseñas coincidan
  if (formData.contraseña !== formData.confirmPassword) {
    setContraseñaError('Las contraseñas no coinciden');
    return;
  }else {
    setContraseñaError("");
  }

  if (isFormDataComplete()) {
  // Enviar datos al servidor
  fetch('http://localhost:5000/insertar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor con exito:', data);
    if (data.success) {
      // Mostrar mensaje de éxito
      alert('¡Tus datos han sido guardados exitosamente!');
      navigate("/iniciar-sesion")
    } else {
      console.error('Error al guardar los datos:', data.error);
    }
  })
  .catch(error => {
    console.error('Error al enviar datos:', error);
    });
  } else {
    console.log('Formulario incompleto. No se envían datos.');
  }
};

const isFormDataComplete = () => {
  
  const requiredFields = ['email', 'telefono', 'contraseña', 'nombres', 'apellidos', 'cedula', 'usuario', 'confirmPassword'];
  
  // Verificar si todos los campos obligatorios del formData están llenos
  for (const key of requiredFields) {
    if (!formData[key]) {
      return false;
    }
  }

  return true;
};

const handleSubmitEdit = (event) => {
  event.preventDefault();

  const actualPassword = event.target.elements['actualPassword'].value;

  if (!actualPassword) {
    setContraseñaError('Por favor, ingresa tu contraseña actual.');
    return;
  }

  fetch('http://localhost:5000/verificar_contraseña', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ actualPassword, cedula: formData.cedula }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      handleUpdateContraseña(actualPassword); // La contraseña actual coincide, continuar con la actualización
    } else {
      setContraseñaError('La contraseña actual es incorrecta');
    }
  })
  .catch(error => {
    console.error('Error al verificar la contraseña:', error);
    setContraseñaError('Ocurrió un error al verificar la contraseña');
  });
};

const handleUpdateContraseña = (actualPassword) => {
  // Verificar si el usuario está ingresando una nueva contraseña
  if (formData.contraseña && formData.confirmPassword) {
    // Validar que las contraseñas coincidan
    if (formData.contraseña !== formData.confirmPassword) {
      setContraseñaError('Las contraseñas no coinciden');
      return;
    } else {
      setContraseñaError('');
    }

    // Aquí realizarías la actualización de la contraseña en la base de datos
    fetch('http://localhost:5000/actualizar_datos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formData }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Mostrar mensaje de éxito
        alert('¡Datos actualizados correntamente!');
        localStorage.setItem('userData', JSON.stringify(formData));
        navigate("/perfil")
        // Aquí podrías hacer algo adicional, como limpiar los campos de contraseña
      } else {
        console.error('Error al actualizar los datos', data.error);
      }
    })
    .catch(error => {
      console.error('Error al enviar datos:', error);
    });
  } else {
    // En este caso, el usuario solo ingresó la contraseña actual
    formData.contraseña = actualPassword;
    formData.confirmPassword = actualPassword;
    
    if (isFormDataComplete()) {
      fetch('http://localhost:5000/actualizar_datos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Mostrar mensaje de éxito
          alert('¡Datos actualizados exitosamente!');
          localStorage.setItem('userData', JSON.stringify(formData));
          navigate("/perfil")
          // Aquí podrías hacer algo adicional, como limpiar los campos del formulario
        } else {
          console.error('Error al actualizar los datos:', data.error);
        }
      })
      .catch(error => {
        console.error('Error al enviar datos:', error);
      });
    }
  };
}

//FIN DE LA VALIDACION DE CONTRASEÑA

const handleInputChange = (fieldName, value) => {
    if (fieldName === "contraseña") {
      // Si el campo que se está cambiando es la contraseña, también actualiza confirmPassword
      setFormData(prevFormData => ({
        ...prevFormData,
        contraseña: value,
        // Actualizar confirmPassword si las contraseñas coinciden
        confirmPassword: value === prevFormData.confirmPassword ? value : prevFormData.confirmPassword
      }));
      // Verificar si las contraseñas coinciden y actualizar el estado
      setPasswordsMatch(value === formData.confirmPassword);
    } else if (fieldName === "confirmPassword") {
      // Si el campo que se está cambiando es la confirmación de la contraseña, actualiza solo ese campo
      setFormData(prevFormData => ({
        ...prevFormData,
        confirmPassword: value
      }));
      // Verificar si las contraseñas coinciden y actualizar el estado
      setPasswordsMatch(formData.contraseña === value);
    } else {
      // Para otros campos, simplemente actualiza el estado del formulario
      setFormData(prevFormData => ({
        ...prevFormData,
        [fieldName]: value
      }));
    }
  };

  const handleCheckChange = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      aceptoTerminos: !prevFormData.aceptoTerminos
    }));
  };

  const handleCheckboxChange = () => {
    setFormData(prevFormData =>({
      ...prevFormData,
      aceptoContacto: !prevFormData.aceptoContacto
    }));
  };

  
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showNombresForm, setShowNombresForm] = useState(false);
  const [showTelefonoForm, setShowTelefonoForm] = useState(false);
  const [showContraseñaForm, setShowContraseñaForm] = useState(false);
  const [showValidacionForm, setShowValidacionForm] = useState(false);
  const [showValidacionEmailForm, setShowValidacionEmailForm] = useState(false);

  const handleShowValidacionEmailForm = () => {
    setShowValidacionEmailForm(true);
    setShowValidacionForm(false);
    setShowContraseñaForm(false);
    setShowNombresForm(false);
    setShowTelefonoForm(false);
    setShowEmailForm(false);
  }

  const handleShowValidacionForm = () =>{
    setShowValidacionForm(true);
    setShowValidacionEmailForm(false);
    setShowContraseñaForm(false);
    setShowNombresForm(false);
    setShowTelefonoForm(false);
    setShowEmailForm(false);
  }

  const handleShowContraseñaForm = () => {
    setShowContraseñaForm(true);
    setShowValidacionEmailForm(false);
    setShowValidacionForm(false);
    setShowTelefonoForm(false);
    setShowEmailForm(false);
    setShowNombresForm(false);
  }

  const handleShowTelefonoForm = () => {
    setShowTelefonoForm(true);
    setShowValidacionEmailForm(false);
    setShowValidacionForm(false);
    setShowEmailForm(false);
    setShowNombresForm(false);
    setShowContraseñaForm(false);
  };

  const handleShowNombresForm = () => {
    setShowNombresForm(true);
    setShowValidacionEmailForm(false);
    setShowValidacionForm(false);
    setShowEmailForm(false)
    setShowTelefonoForm(false);
    setShowContraseñaForm(false);
  };
  
  const handleShowEmailForm = () => {
    setShowEmailForm(true);
    setShowValidacionEmailForm(false);
    setShowValidacionForm(false);
    setShowNombresForm(false);
    setShowTelefonoForm(false);
    setShowContraseñaForm(false);
  };

  

  return (
    <div className="contenedor-formcuenta">
      <div className="row justify-content-center">
        <div className="col-4">
          <FormEmail 
          showEmailForm={showEmailForm} 
          handleSubmitEmail={handleSubmitEmail} 
          formData={formData}
          handleInputChange={handleInputChange}
          emailError={emailError}
          Form={Form}
          handleCheckChange={handleCheckChange}
          editMode={editMode}
          onClose={onClose}
          />
          <FormTelefono
          showTelefonoForm= {showTelefonoForm}
          handleSubmitTelefono= {handleSubmitTelefono}
          formData = {formData}
          handleInputChange={handleInputChange}
          telefonoError= {telefonoError}
          CustomForm={Form}
          handleCheckboxChange= {handleCheckboxChange}
          editMode={editMode}
          onClose={onClose}
          />
          <FormContraseña
          showContraseñaForm= {showContraseñaForm}
          Form = {Form}
          handleSubmitContraseña ={handleSubmitContraseña}
          formData = {formData}
          handleInputChange = {handleInputChange}
          contraseñaError = {contraseñaError}
          editMode={editMode}
          onClose={onClose}
          handleSubmitEdit={handleSubmitEdit}
          />
          <FormNombres
          showNombresForm = {showNombresForm}
          handleSubmitNombres = {handleSubmitNombres}
          formData = {formData}
          handleInputChange= {handleInputChange}
          cedulaError = {cedulaError}
          usuarioError = {usuarioError}
          editMode={editMode}
          onClose={onClose}
          />
          <FormTelefonoVal
          showValidacionForm = {showValidacionForm}
          handleSubmitCodigoVerificacion =  {handleSubmitCodigoVerificacion}
          telefonoError = {telefonoError}
          />
          <FormEmailVal
          showValidacionEmailForm =  {showValidacionEmailForm}
          handleEmailCodigoValidacion =  {handleEmailCodigoValidacion}
          emailError =  {emailError}
          />
          { !showEmailForm && !showNombresForm && !showTelefonoForm && !showContraseñaForm && !showValidacionEmailForm && !showValidacionForm &&  (
            // Mostrar los botones normales
            <ul className="list-unstyled">
              <div className="h4 text-center mb-4">
                {editMode ?"Presiona en modificar sobre el dato que desea actualizar, al final para guardar tus datos agrega tu contraseña actual o modificala"
                :"Completa los datos para crear tu cuenta"}
              </div>
              {editMode && (
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn-close" onClick={handleGoBack}></button>
                </div>
                )}
              <li className="d-flex justify-content-between align-items-center mb-3">
                <label>
                  {editMode? "Modificar E-mail" : "Agrega tu E-mail"}
                </label>
                {emailValidado ? (
                <button className="btn btn-success botonn" disabled>
                  <i className="fa fa-check-circle"></i>
                </button>
                ) : (
                <button className="btn btn-warning botonn" onClick={handleShowEmailForm}>
                  {editMode? "Modificar": "Agregar"}
                  </button>
                )}
                
              </li>
              <li className="d-flex justify-content-between align-items-center mb-3">
                <label>
                  {editMode? "Modificar nombre":"Elige tu nombre"}
                  </label>
                {nombreValidado ? (
                <button className="btn btn-success botonn" disabled>
                  <i className="fa fa-check-circle"></i>
                </button>
                ): (
                <button className="btn btn-warning botonn" onClick={handleShowNombresForm} disabled={!buttonEnabled.nombre}>
                  {editMode? "Modificar": "Agregar"}
                  </button>
                )}
              </li>
              <li className="d-flex justify-content-between align-items-center mb-3">
                <label>
                  {editMode? "Modificar telefono":"Validar tu telefóno"}
                  </label>
                {telefonoValidado ?(
                <button className="btn btn-success botonn" disabled>
                  <i className="fa fa-check-circle"></i>
                </button>
                ):( 
                <button className="btn btn-warning botonn" onClick={handleShowTelefonoForm} disabled={!buttonEnabled.telefono}>
                  {editMode? "Modificar": "Validar"}
                  </button>
                )}
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <label>
                  {editMode? "Cambiar contraseña":"Crear contraseña"}
                  </label>
                <button className="btn btn-warning botonn" onClick={handleShowContraseñaForm} disabled={!buttonEnabled.contraseña}>
                {editMode? "Modificar": "Crear"}
                  </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formcuenta;

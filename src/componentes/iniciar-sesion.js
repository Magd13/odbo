import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }
  
    try {
      // Realizar la solicitud de inicio de sesión
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Inicio de sesión fallido');
      }
  
      const data = await response.json();
      // Aquí puedes agregar la lógica para redireccionar al usuario a la página de inicio después del inicio de sesión exitoso
      props.onLogin(data);
      navigate('/perfil');
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Mostrar un mensaje de error al usuario en la interfaz de usuario
      setError('Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="contenedor-login">
      <div className="login-form">
        <img src="../imagenes/imglogo.png"
          alt="Inicio"
          style={{ width: '100px', height: '100px' }}
          className="rounded mx-auto d-block"
        />
        <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          {error && <div className="text-danger">{error}</div>}
          <Form.Group className="mb-3 w-50">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control type="username" placeholder="Ingrese nombre de usuario o correo electrónico" onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3 w-50">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3 form-check">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button className="btn btn-warning botonn" variant="primary" type="submit">
            LOGIN
          </Button>

          <Form.Text className="text-muted mt-3">
            Forgot password ?
          </Form.Text>
        </Form>
      </div>
    </div>
  )
}

export default Login;
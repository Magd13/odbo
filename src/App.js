import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carrusel from './componentes/Carrusel.jsx';
import Navbarr from './componentes/navbar.jsx';
import ScreemDinamic from './componentes/screem.js';
import Footer from './componentes/footer.js';
import Videojuego from './componentes/videojuego.js';
import ModalB from './componentes/modal.js';
import Formpago from './componentes/formulario-pago.js';
import Login from './componentes/iniciar-sesion.js';
import Formcuenta from './componentes/formulario-cuenta.js';
import Perfil from './componentes/perfil.js';
import ModalRegisterVj from './componentes/modalregistervj.js';


function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    setLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogin = (data) => {
    setLoggedIn(true);
    // Modificar el formato de los datos del usuario
    const userDataFormatted = {
      telefono: data.usuario.telefono,
      email: data.usuario.correo,
      contraseña: data.usuario.contraseña,
      nombres: data.usuario.nombres,
      apellidos: data.usuario.apellidos,
      cedula: data.usuario.id_cedula,
      usuario: data.usuario.usuarios,
      videoteca: data.usuario.id_videoteca
      // Otros campos si los hay...
    };
    console.log(data.usuario.id_videoteca)
    setUserData(userDataFormatted);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(userDataFormatted));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
  };

  return (
    <Router>
      <div className="App">
        <Navbarr loggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <div className='contenedor-blanco'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/perfil" element={<Perfil userData={userData} />} />
              <Route path="/videojuego" element={<Videojuego />} />
              <Route path="/formulario-pago" element={<Formpago />} />
              <Route path="/iniciar-sesion" element={<Login onLogin={handleLogin} />} />
              <Route path="/formulario-cuenta" element={<Formcuenta />} />
            </Routes>
        </div>
        <Footer />
        <ModalRegisterVj />
        <ModalB />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <ScreemDinamic />
      <br></br><br></br>
      <Carrusel />
      <br></br><br></br><br></br>
      <Carrusel />
      <br></br><br></br><br></br>
      <Carrusel />
      <br></br><br></br><br></br>
      <Carrusel />
    </div>
  );
}

export default App;
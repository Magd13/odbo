import React, { useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';
import "../css/navbar.css";


function Navbar(props) {
    const [loggedIn, setLoggedIn] = useState(props.loggedIn);
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoggedIn(props.loggedIn);
      }, [props.loggedIn]);
    
      useEffect(() => {
        localStorage.setItem('isLoggedIn', loggedIn ? 'true' : 'false');
      }, [loggedIn]);
      
    const handleLogout = () => {
      setLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userData');
      navigate('/');
    };

    const toggleMostrarMenu = (event) => {
        event.preventDefault();
        setShowOptions(!showOptions); // Mostrar las opciones cuando el cursor entra en el icono
    };
    

return (
<div className="contenedor-navbar">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <h1 className="navbar-brand text-center d-lg-none" >Oddballs</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link active" >
                            <img src="../imagenes/imglogo.png"  
                                alt="Inicio"
                                style={{ width: '100px', height: '100px', marginLeft: '-50px' }}  
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link dropdown" href="/tiendas">Tiendas</Link>
                    </li>
                    {!loggedIn && (
                        <>
                        <li className="nav-item dropdown">
                            <Link to="/iniciar-sesion" className="nav-link dropdown" href="/login">Iniciar sesión</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/formulario-cuenta" className="nav-link dropdown" href="/suscribete">Suscríbete</Link>
                        </li>
                        </>
                    )}
                    {loggedIn && (
                        <li className="nav-item">
                            <Link to="/iniciar-sesion" className="nav-link" onClick={handleLogout}>Cerrar sesión</Link>
                        </li>
                    )}
                   <li className="nav-item d-lg-none">
                        <button href="#" className="nav-link" id="closeMenu">
                            <i className="fas fa-times"></i>
                        </button>
                    </li>
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Buscar</span>
                        <input type="text" className="form-control" aria-label="Buscar" aria-describedby="addon-wrapping" />
                    </div>
                </ul>
            </div>
            {loggedIn && (
                <div className="d-flex align-items-center">
                    <a 
                    className="nav-link active"  
                    href="/" 
                    onClick={toggleMostrarMenu} // Manejador para mostrar opciones al pasar el cursor
                    
                    >
                    <i className="bi bi-person-lines-fill" style={{fontSize:'3rem', marginRight: '50px', top:'-30px'}}></i>
                    {showOptions && ( // Renderizar las opciones solo cuando showOptions es true
                        <div className="options" style={{ position: 'absolute', top: '100%' }}>
                            <ul>
                                <li><Link to="/perfil">Perfil</Link></li>
                                <li><Link to="/ajustes">Ajustes</Link></li>
                                <li><Link to="/ayuda">Ayuda</Link></li>
                            </ul>
                        </div>
                    )}
                    </a>
                    <a className="nav-link active" aria-current="page" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-handbag" style={{fontSize:'3rem'}}></i>
                    </a>
                </div>
            )}
        </div>
    </nav>
    
</div>

    );
}

export default Navbar;
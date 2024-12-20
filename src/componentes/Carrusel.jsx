import React from "react";
import { Link } from 'react-router-dom';
import "../css/carrusel.css";

function Carrusel() {
  return (
    <div className="container-fluid carrusel">
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner carrusel-especifico">
                <div className="carousel-item active">
                    <div className="row carusel">
                        <div className="card hoverable">
                            <img src="../imagenes/vj1.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">The Last Of Us</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-2.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-2.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                        <div className="card hoverable">
                            <img src="../imagenes/vj2.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">FIFA 24</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-1.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-1.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                        
                        <div className="card hoverable">
                            <img src="../imagenes/vj1.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">The Last Of Us</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-4.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-4.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                        <div className="card hoverable">
                            <img src="../imagenes/vj2.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">FIFA 24</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-1.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-1.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                        <div className="card hoverable">
                            <img src="../imagenes/vj1.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">Tales of Monkey Island Complete Pack: Chapter 4 - The Trial and Execution of Guybrush Threepwood</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-1.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-1.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                        <div className="card hoverable">
                            <img src="../imagenes/vj2.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">FIFA 24</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-1.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-1.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                        <div className="card hoverable">
                            <img src="../imagenes/vj2.png" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">The Last Of Us</h5>
                                <div className="hover-content d-flex justify-content-center align-items-center">
                                    {/* Agrega tus imágenes de iconos aquí */}
                                    <div className="icon"><img src="../imagenes/Offline-mp-1.png" alt="Icon 1" /></div>
                                    <div className="icon"><img src="../imagenes/psplus.png" alt="Icon 3" /></div>
                                    <div className="icon"><img src="../imagenes/Online-mp-1.png" alt="Icon 2" /></div>
                                </div>
                            </div>
                            <Link to="/videojuego" className="btn btn-warning mt-auto">COMPRAR</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev arow-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next arow-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}

export default Carrusel;
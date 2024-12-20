import React, { useState } from 'react';
import "../css/screem.css";

function ScreemDinamic() {
    const [videoInfo, setVideoInfo] = useState({
        videoSrc: "https://www.youtube.com/embed/F3jePdO9_jc",
        gameTitle: "GOD OF WAR",
        gameDescription: "Esta nueva entrega para PlayStation 4, si bien mantendrá varios de los ingredientes indivisibles de su jugabilidad, apostará por un nuevo comienzo para el personaje y una ambientación nórdica.",
        imageSrc: "https://i.3djuegos.com/juegos/11552/god_of_war_ps4__nombre_temporal_/fotos/ficha/god_of_war_ps4__nombre_temporal_-3754795.jpg"
    });

    const onLinkClick = (videoSrc, gameTitle, gameDescription, imageSrc) => {
        setVideoInfo({
            videoSrc,
            gameTitle,
            gameDescription,
            imageSrc
        });
    };

    return (
        <div className="contenedor-screem">
            <div className="row screem">
                <div className="col-4 mt-4">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={videoInfo.imageSrc} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    {videoInfo.gameTitle}
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    {videoInfo.gameDescription}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-4">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            id="youtubeIframe"
                            className="embed-responsive-item"
                            src={videoInfo.videoSrc}
                            title="YouTube video player"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="col-2 mt-4 botones" >
                    <div className="row-ps4">
                        <div className="nav-link text-center" onClick={() => onLinkClick(
                            "https://www.youtube.com/embed/AN3jEjjcZ-k?controls=0",
                            "GOD OF WAR 4",
                            "Esta nueva entrega para PlayStation 4, si bien mantendrá varios de los ingredientes indivisibles de su jugabilidad, apostará por un nuevo comienzo para el personaje y una ambientación nórdica.",
                            "https://i.3djuegos.com/juegos/11552/god_of_war_ps4__nombre_temporal_/fotos/ficha/god_of_war_ps4__nombre_temporal_-3754795.jpg"
                        )}>
                            <img src="../imagenes/imglogops4.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row-ps5">
                        <div className="nav-link text-center" onClick={() => onLinkClick(
                            "https://www.youtube.com/embed/F3jePdO9_jc",
                            "GOD OF WAR RAGNAROK",
                            "God of War Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment (SIE). Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento entre generaciones de la serie.",
                            "https://m.media-amazon.com/images/I/817y77i7EFL._AC_UF1000,1000_QL80_.jpg"
                        )}>
                            <img src="../imagenes/imglogops5.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row-ns">
                        <div className="nav-link text-center" onClick={() => onLinkClick(
                            "https://www.youtube.com/embed/_5p0SiWHwvw",
                            "DONKEY KONG COUNTRY TROPICAL FREEZE",
                            "Aventúrate a través de islas cargadas de acción utilizando los clásicos Kongs como en el juego original, ¡o dale sabor a la historia jugando como Funky Kong en el nuevo modo Funky!",
                            "https://m.media-amazon.com/images/I/61eeln09pnL._SL500_.jpg"
                        )}>
                            <img src="../imagenes/imglogoswitch.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row-xbox">
                        <div className="nav-link text-center" onClick={() => onLinkClick(
                            "https://www.youtube.com/embed/PLo-TYCt1RY",
                            "ELDEN RING",
                            "Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. Un vasto mundo perfectamente conectado en el que los territorios abiertos estarán repletos de situaciones y mazmorras enormes con diseños complejos y tridimensionales.",
                            "https://m.media-amazon.com/images/I/81cY7DwfO+S._AC_UF1000,1000_QL80_.jpg"
                        )}>
                            <img src="../imagenes/imglogoxbox.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className='row boton'>
                        <button type="button" className="btn btn-warning boton-reserva">Reservar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreemDinamic;

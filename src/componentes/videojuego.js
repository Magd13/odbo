import React, { useState } from "react";
import "../css/videojuego.css";
import Carrusel from "./Carrusel";
import ModalB from "./modal";

function Videojuego() {
    const [cuentaSeleccionada, setCuentaSeleccionada] = useState("flexRadioDefault2");
    const [cantidad, setCantidad] = useState(1);

    const cambioCantidad = (event) => {
        setCantidad(parseInt(event.target.value));
    };

    const disminuirCantidad = () => {
        setCantidad((cantidadAnterior) => Math.max(1, cantidadAnterior - 1));
    };

    const aumentarCantidad = () => {
        setCantidad((cantidadAnterior) => cantidadAnterior + 1);
    };

    const handleRadioChange = (event) => {
        setCuentaSeleccionada(event.target.id);
    };

    return (
    <div>
        <div className="contenedor-videojuego">
            <div className="row video">
                <div className="col-6">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            id="youtubeIframe"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/AN3jEjjcZ-k?controls=0"
                            title="YouTube video player"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="col-3">
                    <figure className="figure">
                        <div className="accordion accordion-flush acordion" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Nombre videojuego
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <div className="vstack gap-3">
                                            <div className="p-2">Idioma:</div>
                                            <div className="p-2">Espacio en consola:</div>
                                            <div className="p-2">Multijugador Online:True</div>
                                            <div className="p-2">Cantidad de Jugadores Online:</div>
                                            <div className="p-2">Multijugador Offline:False</div>
                                            <div className="p-2">Cantidad de Jugadores Offline:</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="../imagenes/vj2.png" className="figure-img img-fluid rounded" alt="..." />
                    </figure>
                </div>
                <div className="col mt-2">
                    <div className="row pago">
                        <img src="../imagenes/medio-pago-paypal.png" className="img-pago" alt="..." />
                        <img src="../imagenes/medio-pago-pichincha.png" className="img-pago" alt="..." />
                        <img src="../imagenes/medio-pago-vecino.png" className="img-pago" alt="..." />
                    </div>
                    <div className="form-check mt-4 d-flex justify-content-center">
                        <div className="form-check me-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={cuentaSeleccionada === "flexRadioDefault1"} onChange={handleRadioChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Principal 
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={cuentaSeleccionada === "flexRadioDefault2"} onChange={handleRadioChange} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Secundaria
                            </label>
                        </div>
                    </div>
                    <div className="row tipo-cuenta">
                        <div className={"container cuenta-primaria" + (cuentaSeleccionada === "flexRadioDefault1" ? "" : " d-none")}>
                            Lo descargas desde nuestra cuenta y lo juegas con tu cuenta personal. Puedes acumular trofeos y guardar avances. Para jugar online necesita Membresia Plus
                        </div>
                        <div className={"container cuenta-secundaria" + (cuentaSeleccionada === "flexRadioDefault2" ? "" : " d-none")}>
                            Realizas las descargas desde nuestra cuenta y juegas con nuestra cuenta. Puedes acumular trofeos y guardar avances.
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="precio-subrayado">
                                <h5>$ 70.00 USD<span className="badge bg-secondary">-50%</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="precio-descuento">
                                <h4>$ 70.00 USD</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex no-wrap justify-content-center">
                        <button type="button" className="btn btn-secondary boton" onClick={aumentarCantidad}>+</button>
                            <input type="text" className="form-control text-center" value={cantidad} onChange={cambioCantidad} /> 
                        <button type="button" className="btn btn-secondary boton"  onClick={disminuirCantidad}>-</button>
                    </div>
                    <div className="row d-flex justify-content-center asesor">
                        <button type="button" className="btn btn-warning buton1">Comprar</button>
                        <button type="button" className="btn btn-success buton2">Asesor</button>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <Carrusel/>
            <br/><br/><br/><br/>
            <Carrusel />
            <br/><br/><br/><br/>
        </div>
        <ModalB cantidad={cantidad} cambioCantidad={cambioCantidad} disminuirCantidad={disminuirCantidad}  aumentarCantidad={aumentarCantidad} />
    </div>
    );
} 

export default Videojuego;

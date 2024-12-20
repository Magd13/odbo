import React from "react";
import { Link } from 'react-router-dom';

import "../css/modal.css"

function ModalB (props) {
    return (
    <div className="contenedor-modal">
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable position-absolute top-0 end-0">
                <div className="modal-content ">
                <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">"Tu carrito"</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="row align-items-center text-center">
                    <div className="h5 w-100">¡Fantástica Elección!</div>
                </div>
                <div className="row producto">
                    <div className="col-4 producto-img d-flex no-wrap">
                        <img src="../imagenes/vj3.png" className="img-rounded img-responsive" alt="imagen de videojuego" style={{ maxWidth: '100px', maxHeight:'100px' }}/>
                    </div>
                    <div className="col-8 producto-descrip">
                        <div className="row nombre">
                            <strong className="fs-6 nombreProd">Nombre del videojuego</strong>
                        </div>
                        <div className="row items mt-2">
                            <button type="button" className="btn w-auto btn-sm  btn-items bg-transparent" onClick={props.disminuirCantidad}><strong>-</strong></button>
                            <input type="text" className="form-control  text-center" value={props.cantidad} onChange={props.cambioCantidad} style={{ maxWidth: '50px' }} />
                            <button type="button" className="btn w-auto  btn-sm  btn-items bg-transparent" onClick={props.aumentarCantidad}><strong>+</strong></button>
                            <h4>$ 70.00 USD</h4>
                        </div>
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                    <div className="row w-100 m-0 subtotal">
                        <div className="col d-flex justify-content-between align-items-center">
                        <div className="h6">Subtotal:</div>
                        <div className="h6">$98.00 USD</div>
                        </div>
                    </div>
                    <div className="row w-100 m-0 descuento">
                        <div className="col d-flex justify-content-between align-items-center">
                        <div className="h6">Descuento:</div>
                        <div className="h6">-$10.00 USD</div>
                        </div>
                    </div>
                    <div className="row w-100 m-0 total">
                        <div className="col d-flex justify-content-between align-items-center">
                        <div className="h6"><strong>Total a pagar:</strong></div>
                        <div className="h6"><strong>$88.00 USD</strong></div>
                        </div>
                    </div>
                    <div className="row w-100">
                        <Link to="/formulario-pago" className="btn btn-warning buton1">Comprar</Link>
                        <button type="button" className="btn btn-success buton2">Asesor</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default ModalB;
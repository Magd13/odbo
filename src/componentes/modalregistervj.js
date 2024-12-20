import React from "react";
// import { Link } from "react-router-dom";
import '../css/modalregistervj.css'

function ModalRegisterVj() {
    return (
        <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Agrega tu primer videojuego</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                          <div className="row">
                            <form className="d-flex mb-5" role="search">
                              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <div className="col-md-2 mt-5">
                              <img src="../imagenes/vj3.png" className="img-rounded img-responsive" alt="imagen de videojuego" style={{ maxWidth: '100px', maxHeight:'100px' }}/>
                            </div>
                            <div className="col-md-6 ms-2">
                              <div className="h4 text-center">NBA 2K23</div>
                              <h3 className="h5 text-center">Caracteristicas</h3>
                              <div className="icons-img d-flex justify-content-center">
                                <img src="../imagenes/Offline-mp-2.png" className="icon-carec" alt="img-multijugar"/>
                                <img src="../imagenes/psplus.png" className="icon-carec" alt="img-multijugar"/>
                                <img src="../imagenes/Online-mp-2.png" className="icon-carec" alt="img-multijugar"/>
                                <div className="memory d-flex align-items-center">
                                  <div>
                                    <i className="bi bi-database" style={{ fontSize: '3rem' }}></i>
                                  </div>
                                  <label htmlFor="espacio" className="text-center ms-2">50GB</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 mt-4">
                              <div className="row">
                                <div className="input-group">
                                  <span className="input-group-text" id="basic-addon1">USD</span>
                                  <input type="text" className="form-control" placeholder="Precio" aria-label="precio" aria-describedby="basic-addon1" />
                                </div>
                              </div>
                              <div className="row ms-2">
                                <select className="form-select form-select-sm" aria-label="Small select example">
                                  <option defaultValue="0">Plataforma</option>
                                  <option defaultValue="1">PS4</option>
                                  <option defaultValue="2">PS5</option>
                                  <option defaultValue="3">NINTENDO SWITCH</option>
                                  <option defaultValue="4">XBOX</option>
                                </select>                                  
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary boton" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary boton">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRegisterVj;

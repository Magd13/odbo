
import React, { useState } from "react";
import "../css/formulario-pago.css";

function Formpago(props){
  const [currentTab, setCurrentTab] = useState("datos-personales");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario antes de pasar a la siguiente pestaña
    setCurrentTab("metodo-de-pago");
  };
    return (
          <div className="contenedor-formpago">
            <div className="h4">CAJA ASESOR:</div>
            <div className="row caja">
                <div className="col-6">
                    <div className="progress progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Warning example" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-warning" style={{ width: "25%" }} ></div>
                    </div>
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className={`number-step ${currentTab === "datos-personales" ? "active" : ""}`} onClick={() => setCurrentTab("datos-personales")}>
                          <a href="#datos-personales" data-toggle="tab" role="tab" aria-expanded="true">
                            <span className="round-tab">1</span>
                            <i className="hidden-xs">Datos personales</i>
                          </a>
                        </li>
                        <li role="presentation" className={`number-step ${currentTab === "metodo-de-pago" ? "active" : ""}`} onClick={() => setCurrentTab("metodo-de-pago")}>
                          <a href="#metodo-de-pago" data-toggle="tab" role="tab" aria-expanded="true">
                            <span className="round-tab">2</span>
                            <i className="hidden-xs">Metodo de pago</i>
                          </a>
                        </li>
                        <li role="presentation" className="disabled number-step">
                          <a href="#confirmacion" data-toggle="tab" role="tab" aria-expanded="true">
                            <span className="round-tab">3</span>
                            <i className="hidden-xs">Confirmación</i>
                          </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane ${currentTab === "datos-personales" ? "active" : ""}`} id="datos-personales">
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="nombre">Nombre</label>
                              <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="apellido">Apellido</label>
                              <input type="text" className="form-control" id="apellido" placeholder="Ingrese su apellido" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="telefono">Teléfono</label>
                              <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su teléfono" />
                            </div>
                            <button type="submit" className="btn btn-secondary botonn">
                                Continuar
                            </button>
                          </form>
                        </div>
                        <div className={`tab-pane ${currentTab === "metodo-de-pago" ? "active" : ""}`} id="metodo-de-pago">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Transferencia.
                                </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  <img src="../imagenes/medio-pago-pichincha.png" alt="" className="rounded mx-auto d-block"/>
                                  <table className="table-danger">
                                    <tbody>
                                      <tr className="w-100">
                                        <td className="col-6">Tipo de cuenta:</td>
                                        <td className="col-6">Ahorros</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Numero de cuenta:</td>
                                        <td className="col-6">123456799</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Titular de la cuenta:</td>
                                        <td className="col-6">Nombres y Apellidos</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Numero de cedula:</td>
                                        <td className="col-6">9876541236</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Correo electronico:</td>
                                        <td className="col-6">correo@gmail.com</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6" colSpan="5">**Es obligatorio poner nuestro email en destinatario**</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="form-group"> 
                                    <label className="col-12">Comprobante pago:</label> 
                                    <input type="file" className="form-control-file" id="comprobante-pago" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" /> 
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Deposito en Efectivo
                                </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <img src="../imagenes/medio-pago-vecino.png" alt="" className="rounded mx-auto d-block"/>
                                <table className="table-danger">
                                    <tbody>
                                      <tr className="w-100">
                                        <td className="col-6">Tipo de cuenta:</td>
                                        <td className="col-6">Ahorros</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Numero de cuenta:</td>
                                        <td className="col-6">123456799</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Titular de la cuenta:</td>
                                        <td className="col-6">Nombres y Apellidos</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6">Numero de cedula:</td>
                                        <td className="col-6">9876541236</td>
                                      </tr>
                                      <tr>
                                        <td className="col-6" colSpan="5">**Es obligatorio poner nuestro email en destinatario**</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="form-group"> 
                                    <label className="col-12">Comprobante pago:</label> 
                                    <input type="file" className="form-control-file" id="comprobante-pago" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" /> 
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  Pago en Linea Paypal
                                </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  <img src="../imagenes/medio-pago-paypal.png" alt="" className="rounded mx-auto d-block"/>
                                  <ul>
                                    <li>• Puedes hacer el pago con tarjeta de crédito, débito o saldo PayPal</li>
                                    <li>• Los Pedidos se envían dentro de los horarios y días de atención.</li>
                                    <li>• Cargo adicionales del 5% por usar el procesador de pagos.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <button type="button" className="btn btn-secondary me-2 botonn" onClick={() => setCurrentTab("datos-personales")}>Retroceder</button>
                            <button type="button" className="btn btn-primary botonn" onClick={() => setCurrentTab("confirmacion")}>Continuar</button>
                          </div>
                        </div>
                        <div className={`tab-pane ${currentTab === "confirmacion" ? "active" : ""}`} id="confirmacion">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="nombre">Nombre</label>
                              <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="apellido">Apellido</label>
                              <input type="text" className="form-control" id="apellido" placeholder="Ingrese su apellido" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="telefono">Teléfono</label>
                              <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su teléfono" />
                            </div>
                            <br></br>
                            <select class="form-select" aria-label="Default select example">
                              <option selected>Retirar en tienda</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </form>
                          <div className="text-center">
                            <button type="button" className="btn btn-secondary me-2 botonn" onClick={() => setCurrentTab("datos-personales")}>Retroceder</button>
                            <button type="button" className="btn btn-primary botonn" onClick={() => setCurrentTab("confirmacion")}>Continuar</button>
                          </div>
                        </div>
                    </div>
                </div>
              <div className="col-6">
                <div className="row align-items-center text-center">
                    <div className="h5 w-100">¡Fantástica Elección!</div>
                </div>
                <div className="row producto">
                    <div className="col-6 producto-img d-flex no-wrap">
                        <img src="../imagenes/vj3.png" className="img-rounded img-responsive" alt="imagen de videojuego" style={{ maxWidth: '100px', maxHeight:'100px' }}/>
                    </div>
                    <div className="col-6 producto-descrip">
                        <div className="row nombre">
                            <strong className="fs-6 nombreProd">Nombre del videojuego</strong>
                        </div>
                        <div className="row items mt-2">
                            <button type="button" className="btn w-auto btn-sm  btn-items bg-transparent" ><strong>-</strong></button>
                            <input type="text" className="form-control  text-center" value="1"  style={{ maxWidth: '50px' }} />
                            <button type="button" className="btn w-auto  btn-sm  btn-items bg-transparent" ><strong>+</strong></button>
                            <h4>$ 70.00 USD</h4>
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
                        <button className="btn btn-warning buton1">Comprar</button>
                        <button type="button" className="btn btn-success buton2">Asesor</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default  Formpago;
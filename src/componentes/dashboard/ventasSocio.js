import React from "react";

function VentasSocio ({showVentas}) {
    return (
        showVentas && 
            <div className="col-9">
              <h1 className="h3">Mis ventas y reservas</h1>
              <table className="table table-dark table-striped table-hover">
                <thead>
                  <tr className="table-info">
                    <th scope="col">#</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre de videojuego</th>
                    <th scope="col">Plataforma</th>
                    <th scope="col">Fecha de reserva</th>
                    <th scope="col">Fecha Limite</th>
                    <th scope="col">Nombre del cliente</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Boton de accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><img 
                    src="../imagenes/vj1.png"
                    alt=""
                    className="img-fluid"
                    /></td>
                    <td>The Last of Us</td>
                    <td>PS4</td>
                    <td>29/03/2024</td>
                    <td>29/03/2024</td>
                    <td>Magdiel Rivera</td>
                    <td>0999704125</td>
                    <td>Cancelado</td>
                    <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-primary dropdown-toggle boton" data-bs-toggle="dropdown" aria-expanded="false">
                        Editar Estado
                      </button>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">Reservado</li>
                        <li class="dropdown-item">Entregado</li>
                        <li class="dropdown-item">Expirado</li>
                        <li class="dropdown-item">Por Retirar</li>
                      </ul>
                    </div>
                      </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td><img 
                    src="../imagenes/vj1.png"
                    alt=""
                    className="img-fluid"
                    /></td>
                    <td>The Last of Us</td>
                    <td>PS4</td>
                    <td>29/03/2024</td>
                    <td>29/03/2024</td>
                    <td>CONEK</td>
                    <td>0999704125</td>
                    <td>Cancelado</td>
                    <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-primary dropdown-toggle boton" data-bs-toggle="dropdown" aria-expanded="false">
                        Editar Estado
                      </button>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item">Reservado</li>
                        <li class="dropdown-item">Entregado</li>
                        <li class="dropdown-item">Expirado</li>
                        <li class="dropdown-item">Por Retirar</li>
                      </ul>
                    </div>  
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          
    )
}

export default VentasSocio;
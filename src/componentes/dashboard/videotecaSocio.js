import React from "react";


function VideotecaSocio (props) {
    return (
        props.showVideoteca && 
            <div className="col-9">
              <h4>Mi Videoteca</h4>
              <br/>
              <nav class="navbar bg-body-tertiary">
                <div class="container">
                  <a class="navbar-brand" href="/perfil">
                    <img src="../imagenes/imglogo.png" alt="Bootstrap" width="60" height="48" />
                  </a>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{minWidth:'500px'}} />
                    <button class="btn btn-outline-success boton me-2" type="submit">Buscar</button>
                    <button class="btn btn-outline-warning boton me-2" type="submit">Añadir</button>
                    <button class="btn btn-outline-danger boton me-2" type="submit">Eliminar</button>
                  </form>
                </div>
              </nav>
              <table className="table table-dark table-striped table-hover">
                <thead>
                  <tr className="table-info">
                    <th scope="col">#</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre de videojuego</th>
                    <th scope="col">Jugadores Offline</th>
                    <th scope="col">Jugadores Online</th>
                    <th scope="col">Requerido PsPlus</th>
                    <th scope="col">Idioma</th>
                    <th scope="col">Plataforma</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label text-center" for="flexCheckChecked">
                          Seleccionar todo
                        </label>
                      </div>
                    </th>
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
                    <td>1</td>
                    <td>No disponible</td>
                    <td>No requerido</td>
                    <td>ING/ESP/RS</td>
                    <td>PS4</td>
                    <td>Accion</td>
                    <th scope="col">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label text-center" for="flexCheckChecked">
                          Seleccionar
                        </label>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td><img 
                    src="../imagenes/vj1.png"
                    alt=""
                    className="img-fluid"
                    /></td>
                    <td>The Last of Us</td>
                    <td>1</td>
                    <td>No disponible</td>
                    <td>No requerido</td>
                    <td>ING/ESP/RS</td>
                    <td>PS4</td>
                    <td>Accion</td>
                    <th scope="col">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                        <label class="form-check-label text-center" for="flexCheckChecked">
                          Seleccionar
                        </label>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          
    )
}

export default VideotecaSocio;
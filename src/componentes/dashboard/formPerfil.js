import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function FormPerfil ({ showPerfil, userData }){
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    // Redirigir al componente Formcuenta con editMode como true
    setEditMode(true);
    navigate("/formulario-cuenta", { state: { editMode: true, userData: userData } });
  };

    return(
        showPerfil && userData && (
            <div className="col-9">
              <h1 className="h3">Datos Generales:</h1>
              <div className="form-floating mb-3">
                {/* Input 1 */}
                <input 
                type="text" 
                id="floatingInputUsuario" 
                className="form-control" 
                placeholder="Magnu5"
                defaultValue={userData.usuario}
                disabled
                />
                <label htmlFor="floatingUsuario">Usuario</label>
              </div>
              <div className="form-floating mb-3">
                {/* Input 2 */}
                <input 
                type="text" 
                id="floatingInputNombres" 
                className="form-control" 
                placeholder="Juan Espinoza"
                defaultValue={`${userData.nombres} ${userData.apellidos}`}
                disabled
                />
                <label htmlFor="floatingNombres">Nombre y Apellido</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                type="email" 
                className="form-control" 
                id="floatingInputEmail" 
                placeholder="name@example.com" 
                defaultValue={userData.email}
                disabled
                />
                <label htmlFor="floatingInputEmail">Correo Electrónico</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                defaultValue={userData.contraseña}
                disabled
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                type="number" 
                className="form-control" 
                id="floatingNumber" 
                placeholder="0999444333" 
                defaultValue={'0'+userData.telefono}
                disabled
                />
                <label htmlFor="floatingNumero">Número de telefono</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="floatingNegocio" 
                defaultValue={userData.id_videoteca ? userData.id_videoteca : "Videoteca no registrada"}
                disabled
                />
                <label htmlFor="floatingNegocio">Número de videoteca</label>
              </div>
              <div className="form-floating mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="floatingCedula" 
                defaultValue={userData.cedula}
                disabled
                />
                <label htmlFor="floatingCedula">Número de cédula</label>
              </div>
              <button className="btn btn-secondary boton col-2 mb-3" onClick={handleEditButtonClick}>Editar</button>
            </div>
        )
    );
}

export default  FormPerfil;
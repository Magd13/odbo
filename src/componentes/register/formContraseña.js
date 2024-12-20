import React from "react";

function FormContraseña ({showContraseñaForm, Form, handleSubmitContraseña, formData, handleInputChange, contraseñaError, editMode, onClose, handleSubmitEdit}) {
    return (
        showContraseñaForm &&
            <Form onSubmit={editMode ? handleSubmitEdit : handleSubmitContraseña}>
              <div className="form-group">
              {editMode && (
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn-close" onClick={onClose}></button>
                </div>
                )}
              {editMode&&(
                <div className="form-group">
                  <label htmlFor="actualPassword" className="h5">Contraseña actual</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="actualPassword" 
                  placeholder="Contraseña actual"
                  />
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="invalidCheck">
                    Ingresa tu contraseña actual, en caso de edicion completa los siguientes datos, caso contrario omitelos y da clic en el boton Guardar para actualizar tus datos.             
                    </label>
                  </div>
                </div>
              )}
              <label htmlFor="password" className="h5">
                {editMode? "Nueva contraseña":"Crear contraseña"}
                </label>
                <input 
                type="password" 
                className="form-control" 
                id="contraseña" 
                placeholder="Contraseña" 
                value={formData.contraseña} 
                onChange={(e) => handleInputChange('contraseña', e.target.value )} 
                />
              </div>
                <label className="form-check-label" htmlFor="invalidCheck">
                Al menos una letra Mayuscula y una minuscula               
                </label>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="h5">Confirmar contraseña</label>
                <input 
                type="password" 
                className="form-control" 
                id="confirmPassword" 
                placeholder="Confirmar Contraseña"
                value={formData.confirmPassword} 
                onChange={(e) => handleInputChange('confirmPassword', e.target.value )} 
                />
                <br />
                {contraseñaError && <div className="text-danger">{contraseñaError}</div> }
                <br />
              </div>
              <button type="submit" className="btn btn-warning botonn">
                {editMode ? "Guardar Cambios":"Crear cuenta"}
                </button>
            </Form>
    )
}

export default  FormContraseña;
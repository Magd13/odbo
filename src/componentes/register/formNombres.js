import React from 'react';

function FormNombres ({showNombresForm, handleSubmitNombres, formData, handleInputChange,cedulaError,usuarioError, editMode,onClose}) {

    return (
        showNombresForm &&
            <form onSubmit={handleSubmitNombres}>
              <div className="form-group">
              {editMode && (
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn-close" onClick={onClose}></button>
                </div>
                )}
                <label htmlFor="nombres" className="h5">Elige cómo quieres que te llamemos</label>
                <h5 className="h6">Verán el nombre que elijas todas las personas que interactúen contigo y tu videoteca</h5>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="nombre" 
                  value={formData.nombres} 
                  onChange={(e) => handleInputChange('nombres', e.target.value )} 
                />
                  {formData.nombres === '' && (
                    <div className="text-danger">Nombre es requerido</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="apellido" 
                  value={formData.apellidos} 
                  onChange={(e) => handleInputChange('apellidos', e.target.value )} 
                />
                  {formData.apellidos === '' && (
                    <div className="text-danger">Apellido es requerido</div>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="cedula" className="form-label">Número de Cédula</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="cedula" 
                  value={formData.cedula} 
                  onChange={(e) => handleInputChange('cedula', e.target.value )} 
                />
                {cedulaError && <div className="text-danger">{cedulaError}</div> }
                </div>
                <div className="col">
                  <label htmlFor="validationCustomUsername" className="form-label">Nombre de usuario</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="validationCustomUsername" 
                    value={formData.usuario} 
                    onChange={(e) => handleInputChange('usuario', e.target.value )} 
                    aria-describedby="inputGroupPrepend" 
                  />
                  {usuarioError && <div className="text-danger">{usuarioError}</div> }
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-warning botonn">Guardar</button>
            </form>
    )
}

export default FormNombres;
import React from "react";
import Form from 'react-bootstrap/Form';

function FormTelefono ({showTelefonoForm, handleSubmitTelefono, formData, handleInputChange, telefonoError, CustomForm, handleCheckboxChange, editMode, onClose}) {
    return (
        showTelefonoForm &&
            <CustomForm onSubmit={handleSubmitTelefono}>
              <div className="form-group">
              {editMode && (
                  <div className="d-flex justify-content-end mb-3">
                    <button className="btn-close" onClick={onClose}></button>
                </div>
                )}
                <label htmlFor="telefono" className="h5">Ingresa tu numero de teléfono</label>
                <h5 className="h6">Te enviaremos un código por SMS para validarlo. Con este teléfono podrás iniciar sesión en tu cuenta.</h5>
                <br></br>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">+593</span>
                  <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Numero de telefono" 
                  value={formData.telefono} 
                  onChange={(e) => handleInputChange('telefono', e.target.value )} 
                  aria-label="Telefono" aria-describedby="basic-addon1" 
                  />
                  {telefonoError && <div className="text-danger">{telefonoError}</div> }
                </div>
              </div>
              <Form.Group className="mb-3 form-check">
                <Form.Check 
                type="checkbox" 
                label="Acepto que me contacten por WhatsApp y/o SMS a este número" 
                onChange={handleCheckboxChange}
                checked={formData.aceptoContacto}
                />
                </Form.Group>
              <button type="submit" className="btn btn-warning botonn">Guardar</button>
            </CustomForm>          
    )
}

export default FormTelefono;

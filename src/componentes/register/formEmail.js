import React from "react";

function FormEmail ({showEmailForm, handleSubmitEmail, formData, handleInputChange, emailError, Form, handleCheckChange, editMode, onClose}) {
    return (
        showEmailForm &&
            // Mostrar el formulario para agregar el email
            <form onSubmit={handleSubmitEmail}>
              <div className="form-group">
                {editMode && (
                  <div className="d-flex justify-content-end">
                    <button className="btn-close" onClick={onClose}></button>
                  </div>
                )}
                <label htmlFor="email" className="h5">Ingresa tu Email</label>
                <h5 className="h6">Asegúrate de tener acceso a él.</h5>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                value={formData.email} 
                onChange={(e) => handleInputChange('email', e.target.value )}
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <Form.Group className="mb-3 form-check">
                <Form.Check 
                type="checkbox" 
                label="Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad." 
                onChange={handleCheckChange}
                checked={formData.aceptoTerminos}
                />
              </Form.Group>
              <button type="submit" className="btn btn-warning botonn">Validar</button>
            </form>
          
    )
}

export default  FormEmail;
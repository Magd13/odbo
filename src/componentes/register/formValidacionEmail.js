import React from "react";

function FormEmailVal ({showValidacionEmailForm, handleEmailCodigoValidacion, emailError}) {
    return (
        showValidacionEmailForm &&
            <form onSubmit={handleEmailCodigoValidacion}>
              <div className="form-group">
                <label>Te hemos enviado un codigo de verificacion al correo registrado</label><br/>
                <label htmlFor="verification-code">Ingrese el código de verificación:</label><br/><br/>
                <input 
                type="text" 
                className="form-control" 
                id="verification-code" 
                name="verification-code" 
                required 
                /><br/>
                {emailError && <div className="text-danger">(emailError)</div>}
                <br/>
                <button type="submit" className="btn btn-warning botonn">Verificar Código</button>
              </div>
            </form>
    )
}

export default  FormEmailVal;
import React from "react";

function FormTelefonoVal ({showValidacionForm, handleSubmitCodigoVerificacion, telefonoError}) {
    return (
        showValidacionForm &&
            <form onSubmit={handleSubmitCodigoVerificacion}>
              <div className="form-group">
                <label>Te hemos enviado un codigo de verificacion al numero celular registrado</label><br/>
                <label htmlFor="verification-code">Ingrese el código de verificación:</label><br/><br/>
                <input 
                type="text" 
                className="form-control" 
                id="verification-code" 
                name="verification-code" 
                required 
                /><br/>
                {telefonoError && <div className="text-danger">{telefonoError}</div>}
                <br/>
                <button type="submit" className="btn btn-warning botonn">Verificar Código</button>
              </div>
            </form>
    )
}

export default  FormTelefonoVal;
import  React from "react"
import "../css/footer.css"

function Footer(){
    return(
        <div className="container-footer">
            <div className="row">
                <div className="col-4">
                    <img src="../imagenes/imglogo.png"  
                        className="img-fluid"
                        alt="Inicio"
                        style={{ width: '45%', height: '45%' }}  // Ajusta el estilo según tus necesidades
                        />
                    <h3>ODBO <small className="text-body-secondary">Mundo GAMER</small></h3>
                    <div className="row">
                        <div className="icon redes"><img className="icon-redes" src="../imagenes/icon-wsp.png" alt="Icon 1" /></div>
                        <div className="icon redes"><img className="icon-redes" src="../imagenes/icon-face.png" alt="Icon 3" /></div>
                        <div className="icon redes"><img className="icon-redes" src="../imagenes/icon-instagran.png" alt="Icon 2" /></div>
                        <div className="icon redes"><img className="icon-redes" src="../imagenes/icon-tiktok.png" alt="Icon 1" /></div>
                        <div className="icon redes"><img className="icon-redes" src="../imagenes/icon-youtube.png" alt="Icon 3" /></div>
                    </div>
                </div>
                <div className="col-4">
                    <h4>CONTACTO</h4>
                    <p>n..................</p>
                </div>
                <div className="col-4">
                    <h4>INFORMACIÓN</h4>
                    <p>Preguntas Frecuentes</p>
                    <p>Medio de pago</p>
                    <p>Formularios de CONTACTO</p>
                    <p>Terminos y condiciones</p>
                </div>
            </div> 
        </div>
    )
}

export default Footer;
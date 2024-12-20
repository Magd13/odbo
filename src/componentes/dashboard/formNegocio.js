import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function FormNegocio ({ showFormNegocio, handleShowVideoteca, userData}) {

  const [buttonVisible, setButtonVisible]= useState(false);
  const [nombreError, setNombreError]=useState("");
  const [telefonoError, setTelefonoError]=useState("");
  const [horarioError, setHorarioError] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [direccionError, setDireccionError]= useState("");
  const [fotoError, setFotoError]=useState("");
  
  useEffect (() => {
    if (userData?.id_videoteca === undefined) {
      setButtonVisible(true);
    } else {
      console.log(userData.id_videoteca)
    }
  }, [userData?.id_videoteca]);

  const [formNegocio, setFormNegocio] = useState ({
    nombre:'',
    telefono_negocio:'',
    horarios:'',
    correo_negocio:''
  })

  const [formDireccion, setFormDireccion] = useState ({
    calle_principal:'',
    calle_secundaria: '',
    nro:'',
    referencia:'',
    ciudad:''
  })

  const handleValNombre = (event) => {
    
    if (formNegocio.nombre === "") {
      setNombreError("El nombre es requerido")
    }
  }
  const [nombreNegocio, setNombreNegocio] = useState("");
  const handleChangeNombre = (event) => {
    const value = event.target.value;
    setNombreNegocio(value);

    // Realizar validación del nombre del negocio
    if (value.trim() === "") {
      setNombreError("El nombre del negocio es obligatorio.");
    } else {
      
      setFormNegocio(prevFormNegocio =>({
        ...prevFormNegocio,
        nombre: value
      }))
    }
  };

    return (
        showFormNegocio && 
            <div className="col-9">
              <h1 className="h3">Registrar mi negocio</h1>
              <div className="form-floating mb-3">
                {/* Input 1 */}
                <input 
                type="text" 
                className="form-control" 
                id="nombre" 
                placeholder="CONEK"
                value={nombreNegocio}
                onChange={handleChangeNombre}
                />
                <label htmlFor="floatingUsuario">Nombre del negocio</label>
                {nombreError && <div className="text-danger">{nombreError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label h4">Direccion</label>
                <div className="row">
                  <div className="col">
                    <label htmlFor="inputCiudad" className="col-form-label">Provincia</label>
                    <input type="text" id="inputProvincia" className="form-control" />
                  </div>
                  <div className="col">
                    <label htmlFor="inputCiudad" className="col-form-label">Ciudad</label>
                    <input type="text" id="inputCiudad" className="form-control" />
                  </div>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Calles</span>
                  <input type="text" id="inputCalleP" className="form-control" placeholder="Calle Primaria"  />
                  <input type="text" id="inputCalleS" className="form-control" placeholder="Calle Secundaria" />
                  <span className="input-group-text">Numero</span>
                  <div className="input-group-text form-control">
                    <input type="checkbox" aria-label="Checkbox for following text input" />
                    <label htmlFor="inputNumLocal" style={{marginLeft:'5px'}}>Sin Número</label>
                  </div>
                  <input type="text" id="inputNumLocal" className="form-control" placeholder="Numero de local"  />
                </div>
                <div className="row">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height:'100px'}}></textarea>
                    <label htmlFor="floatingTextarea2">Referencia adicional de dirección</label>
                  </div>
                </div>
                {direccionError && <div className="text-danger">(direccionError)</div>}
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Horario</span>
                <input type="text" aria-label="First name" className="form-control" placeholder="De: '10:00'"/>
                <button className="btn btn-outline-secondary dropdown-toggle boton" type="button" data-bs-toggle="dropdown" aria-expanded="false">Jornada</button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">am</li>
                    <li className="dropdown-item">pm</li>
                  </ul>
                <input type="text" aria-label="Last name" className="form-control" placeholder="A: '00:00'"/>
                <button className="btn btn-outline-secondary dropdown-toggle boton" type="button" data-bs-toggle="dropdown" aria-expanded="false">Jornada</button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">am</li>
                    <li className="dropdown-item">pm</li>
                  </ul>
                <div className="row" style={{minWidth:'400px'}}>
                  {horarioError&& (horarioError)}
                </div>
              </div>
                
              <div className="form-floating mb-3">
                <input 
                type="number" 
                className="form-control" 
                id="floatingNumber" 
                placeholder="0999444333" 
                defaultValue={'0'}
                />
                <label htmlFor="floatingNumero">Número de telefono</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkTelfUser" />
                  <label className="form-check-label" htmlFor="checkTelfUser">
                    Usar el numero de telefono registrado con el Usuario
                  </label>
                </div>
                {telefonoError&& <div className="text-danger">(telefonoError)</div>}
              </div>
              <div className="form-floating mb-3">
                <input 
                type="email" 
                className="form-control" 
                id="floatingInputEmail" 
                placeholder="name@example.com" 
                defaultValue={''}
                />
                <label htmlFor="floatingInputEmail">Correo Electrónico</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkEmailUser" />
                  <label className="form-check-label" htmlFor="checkEmailUserr">
                    Usar el correo registrado con el Usuario
                  </label>
                </div>
                {correoError&& <div className="text-danger">(correoError)</div>}
              </div>
              <div className="form-floating mb-3">
                <input 
                type="file" 
                className="form-control" 
                id="floatingInputPicCedula" 
                placeholder="png, jpg" 
                defaultValue={''}
                />
                <label htmlFor="floatingInputPicCedula">Foto de cédula</label>
                <div className="form-check mb-3">
                  <label className="form-check-label" htmlFor="invalidCheck">
                  La imagen de cedula debe coincidir con el numero de tu Usuario registrado.              
                  </label>
                </div>
                {fotoError &&<div className="text-danger">(fotoError)</div>}
              </div>
              <div className="mb-3 d-flex justify-content-between">
                {buttonVisible && (
                  <Link className="btn btn-primary boton col-2 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Registrarse</Link>
                )
                }
                <Link className={`btn btn-warning boton col-2 mb-3 ${buttonVisible ? 'd-none' : ''}`} style={{marginLeft:'10px'}}>Editar</Link>
                <Link onClick={handleShowVideoteca} className={`btn btn-success boton col-2 mb-3 ms-auto ${buttonVisible ? 'd-none' : ''}`}>Mi Videoteca</Link>
              </div>
            </div>          
    )
}

export default FormNegocio;
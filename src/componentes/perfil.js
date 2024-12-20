import React, { useState } from "react";
import Slider from "react-slick";
import "../css/perfil.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import FormPerfil from "./dashboard/formPerfil";
import Compras from "./dashboard/compras";
import FormNegocio from "./dashboard/formNegocio";
import VideotecaSocio from "./dashboard/videotecaSocio";
import VentasSocio from "./dashboard/ventasSocio";



function Perfil({userData}) {
  


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  

  const [showPerfil, setShowPerfil] = useState(true);
  const [showCompras, setShowCompras] = useState(false);
  const [showFormNegocio, setShowFormNegocio] = useState(false);
  const [showVideoteca, setShowVideoteca] = useState(false);
  const [showVentas, setShowVentas] = useState(false);

  const handleShowPerfil = ()=>{
    setShowPerfil(true);
    setShowVentas(false);
    setShowCompras(false);
    setShowVideoteca(false);
    setShowFormNegocio(false);
  }

  const handleShowCompras = () => {
    setShowCompras(true);
    setShowVentas(false);
    setShowVideoteca(false);
    setShowPerfil(false);
    setShowFormNegocio(false);
  }

  const handleShowFormNegocio = () => {
    setShowFormNegocio(true);
    setShowVentas(false);
    setShowVideoteca(false);
    setShowCompras(false);
    setShowPerfil(false);
  }

  const handleShowVideoteca =  () => {
    setShowVideoteca(true);
    setShowFormNegocio(false);
    setShowCompras(false);
    setShowVentas(false);
    setShowPerfil(false);
  }

  const handleShowVentas = () => {
    setShowVentas(true); 
    setShowVideoteca(false);
    setShowFormNegocio(false);
    setShowCompras(false);
    setShowPerfil(false);

  }

  return (
    <div className="contenedor-perfil">
      <div className="row text-center">
        <h1>Mi cuenta</h1>
      </div>
      <div className="row">
        <div className="col-2">
          {/* Slider */}
          <Slider {...settings}>
            <div className="contenedor-slider">
              <div className="row logo" style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="../imagenes/imglogo.png"
                  alt="imagen-logo"
                  className="rounded float-start"
                  style={{ maxWidth: "125px"}}
                />
              </div>
              <div className="row">
                <ul className="list-unstyled">
                  <Link onClick={handleShowPerfil}>
                    <li className="d-flex justify-content-between align-items-center mb-3">
                      <label>Mi perfil</label>
                    </li>
                  </Link>
                  <Link onClick={handleShowCompras}>
                    <li className="d-flex justify-content-between align-items-center mb-3">
                      <label>Mis Compras</label>
                    </li>
                  </Link>
                  <Link onClick={handleShowFormNegocio}>
                    <li className="d-flex justify-content-between align-items-center mb-3">
                      <label>Mi negocio</label>
                    </li>
                  </Link>
                  <Link onClick={handleShowVentas}>
                    <li className="d-flex justify-content-between align-items-center mb-3">
                      <label>Ventas</label>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
        <div className="contenedor-enlaces col-10">
          {/* Contenido del formulario */}
          <FormPerfil showPerfil={showPerfil} userData={userData} />
          <Compras showCompras= {showCompras}/>
          <FormNegocio showFormNegocio={showFormNegocio} handleShowVideoteca={handleShowVideoteca} userData={userData} />
          <VideotecaSocio showVideoteca={showVideoteca} />
          <VentasSocio showVentas={showVentas} />
        </div>
      </div>
    </div>
  );
}

export default Perfil;

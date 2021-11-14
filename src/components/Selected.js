import React from "react";
import "./Selected.css";

function Selected(props) {
  return (
    <div className="selected">
      <h3>Podaci za konkretan red na koji ste kliknuli: </h3>

      <h5>Sifra: {props.red.sifra} </h5>
      <h5> Naziv firme: {props.red.naziv_firme}</h5>
      <h5>Ptt: {props.red.ptt}</h5>
      <h5>Pak: {props.red.pak}</h5>
      <h5>Mesto: {props.red.mesto}</h5>
      <h5>Ulica: {props.red.ulica}</h5>
      <h5>Drzava: {props.red.drzava}</h5>
      <h5>Opstina: {props.red.opstina}</h5>
    </div>
  );
}

export default Selected;

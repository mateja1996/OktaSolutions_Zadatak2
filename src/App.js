import React, { useState, useEffect } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import Selected from "./components/Selected";

function App() {
  const [podaci, setPodaci] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://173.212.203.236/BRODARSTVO/api/vratikomitente")
      .then((response) => response.json())
      .then((data) => setPodaci(data));
  }, []);

  const kliknutRed = (event) => {
    setText(event.dataItem);
  };

  return (
    <div>
      <Selected red={text} />
      <Grid data={podaci} onRowClick={kliknutRed}>
        <GridColumn field="sifra" title="SIFRA" />
        <GridColumn field="naziv_firme" title="NAZIV FIRME" />
        <GridColumn field="ptt" title="PTT" />
        <GridColumn field="pak" title="PAK" />
        <GridColumn field="mesto" title="MESTO" />
        <GridColumn field="ulica" title="ULICA" />
        <GridColumn field="drzava" title="DRZAVA" />
        <GridColumn field="opstina" title="OPSTINA" />
      </Grid>
    </div>
  );
}

export default App;

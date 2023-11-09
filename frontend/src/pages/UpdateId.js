import React from "react";
import { useParams } from "react-router-dom";
import Duzenle from "./UpdateScreen.js";

const Guncelle = () => {
  const { id } = useParams();
  return (
    <div>
      <Duzenle id={id}></Duzenle>
    </div>
  );
};

export default Guncelle;

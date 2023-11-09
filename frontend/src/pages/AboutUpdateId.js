import React from "react";
import { useParams } from "react-router-dom";
import Duzenley from "./AboutUpdate.js";

const Guncelle = () => {
  const { id } = useParams();
  return (
    <div>
      <Duzenley id={id}></Duzenley>
    </div>
  );
};

export default Guncelle;

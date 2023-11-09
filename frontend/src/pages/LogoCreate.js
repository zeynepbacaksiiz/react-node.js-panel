import React, { useState } from "react";
import ReactFileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createMemory } from "../actions/logoaction";
const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [memoryData, setMemoryData] = useState({
    image: "",
  });
  const onInputChange = (event) => {
    setMemoryData({ ...memoryData, [event.target.name]: event.target.value });
  };


  return (
    <>
      <div
        className="container-fluid mt-4 eklem"
        style={{ padding: "20px"}}
      >
        <form
          style={{ paddingTop: "3%" }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(createMemory(memoryData))
       
            navigate("/logo");
          }}
        >
                    <h3 className="pt-4" style={{color:"gray",paddingBottom:"70px",textAlign:"center"}}><b>Logo Ekle</b></h3>
          <div className="form-group">
            <label className="mt-3">Resim: </label>
            <br></br>
            <img
              src={memoryData.image}
              style={{ maxWidth: "200px" }}
              alt=""
            ></img>
            <ReactFileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setMemoryData({ ...memoryData, image: base64 });
              }}
              onChange={onInputChange}
            ></ReactFileBase64>
          </div>

          <button type="submit" className="btn btn-light updatebtn">
            Ekle
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;

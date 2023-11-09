import React, { useState } from "react";
import ReactFileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createMemory } from "../actions/projectActions";
const Ekle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [memoryData, setMemoryData] = useState({
    hakkimda: "",
    image: "",
  });
  const onInputChange = (event) => {
    setMemoryData({ ...memoryData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div
        className="container-fluid mt-4 eklem"
        style={{ padding: "10px", border: "1px solid rgb(250, 245, 245)" }}
      >
        <h3 className="pt-4" style={{color:"gray",paddingBottom:"70px",textAlign:"center"}}><b>Proje Ekle</b></h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
           dispatch(createMemory(memoryData));
            navigate("/");
            setMemoryData({
              title: "",
              content: "",
              creator: "",
              image: "",
            });
          }}
        >
          <div className="form-group mt-4">
            <label>Başlık: </label>
            <br></br>
            <input
              value={memoryData.title}
              type="text"
              name="title"
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group mt-4">
            <label>Yetenekler </label>
            <br></br>

            <input
              value={memoryData.content}
              type="text"
              name="content"
              onChange={onInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mt-4">
            <label>Açıklama: </label>
            <br></br>

            <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    name="creator"
                    onChange={onInputChange}
                   required  ></textarea>
           
           
  
          </div>
          <div className="form-group">
            <label className="mt-3">Resim: </label>
            <br></br>
            <ReactFileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setMemoryData({ ...memoryData, image: base64 });
              }}
            ></ReactFileBase64>
          </div>

          <button
            type="submit"
            className="updatebtn"
            style={{ background: "#e8eaf6" }}
          >
            Kaydet
          </button>
        </form>{" "}
      </div>
    </>
  );
};

export default Ekle;

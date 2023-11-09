import React, { useState } from "react";
import ReactFileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createMemory } from "../actions/aboutaction";
import { useDispatch } from "react-redux";
const Ekle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        style={{ padding: "10px" }}
      >
        <form
          style={{ paddingTop: "3%" }}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(createMemory(memoryData))
  
            navigate("/hakkimda");
          }}
        >
                   <h3 className="pt-4" style={{color:"gray",paddingBottom:"70px",textAlign:"center"}}><b>Hakkımda Ekle</b></h3>
          <div className="form-group">
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="mt-3">Resim: </label>
                  <br></br>
                  <img
                    src={memoryData.image}
                    style={{ width: "350px", height: "250px",borderRadius:"20px" }}
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
              </div>
              <div className="col-md-9">
                <div className="form-group">
                  <label for="exampleInputEmail1">Hakkımda:</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="10"
                    name="hakkimda"
                    onChange={onInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-light updatebtn mb-2">
            Ekle
          </button>
        </form>
      </div>
    </>
  );
};

export default Ekle;

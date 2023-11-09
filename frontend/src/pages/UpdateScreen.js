
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactFileBase64 from "react-file-base64";
import { updateMemory } from "../actions/projectActions";
import { useDispatch } from "react-redux";
import * as api from '../axios/index'
import "./style.css";

const Duzenle = ({ id }) => {


  const onInputChange = (event) => {
    setMemoryData({ ...memoryData, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getMemo = async () => {
      const { data } = await api.fetchMemory(id);
      setMemoryData(data); //gunceleldık aldıgımız url ıd yı
    };

    getMemo(); //bu calsııyo gırdımızda fetch cagırdı
  }, [id]);
  const [memoryData, setMemoryData] = useState({
    title: "",
    content: "",
    creator: "",
    image: "",
  });
  return (
    <>
    <div className="mt-4 eklem" style={{ border: "1px solid rgb(250, 245, 245)" }}>
      <form
        className="frmupdate"
        onSubmit={(e) => {
          e.preventDefault();
        dispatch(updateMemory(id, memoryData))
    
          navigate("/");
        }}
      >
           <h3 className="pt-4" style={{color:"gray",paddingBottom:"70px",textAlign:"center"}}><b>Proje Düzenle</b></h3>
        <div className="row">

          <div className="col-md-4 p-0  pl-4">
            <div className="form-group ">
              <img
                src={memoryData.image}
                alt=""
                style={{ width: "350px", height: "250px",borderRadius:"20px" }}
                className="mb-4 "
              ></img>
              <br></br>
              <ReactFileBase64
                type="file"
                multiple={false}
                className="input"
                onDone={({ base64 }) => {
                  setMemoryData({ ...memoryData, image: base64 });
                }}
              />
            </div>
          </div>
          <div className="col-md-8 pt-4">

            <div className="form-group">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="content"
                  value={memoryData.content}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="creator"
                  value={memoryData.creator}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form-group ">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="title"
                  value={memoryData.title}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-light updatebtn mb-4 ">
          Düzenle
        </button>
      </form>
    </div>
    </>
  );
};

export default Duzenle;

import * as api from "../axios/index.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateMemory } from "../actions/aboutaction";
import { useDispatch } from "react-redux";
import ReactFileBase64 from "react-file-base64";
import "./style.css";
const Duzenle = ({ id }) => {
  const navigate = useNavigate();
  const onInputChange = (event) => {
    setMemoryData({ ...memoryData, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();
  const [memoryData, setMemoryData] = useState({
    hakkimda: "",
    image: "",
  });
  useEffect(() => {
    const getMemo = async () => {
      const { data } = await api.hakkimdaiki(id);
      setMemoryData(data);
    };
    getMemo();
  }, [id]);
  return (
    <>
    <div className="mt-4 eklem">
      <form
        className="frmupdate"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updateMemory(id, memoryData));
       
          navigate("/hakkimda");
        }}
      >
                <h3 className="pt-4" style={{color:"gray",paddingBottom:"70px",textAlign:"center"}}><b>Hakkımda Düzenle</b></h3>
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
          <div className="col-md-8">
            <div className="form-group ">
              <div className="col">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  name="hakkimda"
                  onChange={onInputChange}
                  placeholder="Hakkimda"
                  value={memoryData.hakkimda}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-light updatebtn mb-2">
          Düzenle
        </button>
      </form>
    </div>
    </>
  );
};

export default Duzenle;

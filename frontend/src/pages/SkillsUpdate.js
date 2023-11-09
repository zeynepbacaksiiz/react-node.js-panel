import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../axios/index.js";
import { updateMemory } from "../actions/skillsActions";
import { useDispatch } from "react-redux";
const Guncelle = ({ id }) => {


  const onInputChange = (event) => {
    setMemoryData({ ...memoryData, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [memoryData, setMemoryData] = useState({
    yetenek: "",
  });
  useEffect(() => {
    const getMemo = async () => {
      const { data } = await api.yetenekdetay(id);
      setMemoryData(data);
    };
    getMemo();
  }, [id]);
  return (
    <>
      <div
        className="container-fluid mt-4 eklem"
        style={{ padding: "20px" }}
      >
      
        <form
          className="frmupdate"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateMemory(id,memoryData))
     
            navigate("/yetenek");
          }}
        >
              <h3 className="pt-4" style={{color:"gray",textAlign:"center"}}><b>Yetenek Düzenle</b></h3>
          <div className="form-group">
            <br></br>
            <div className="form-group">
              <label className="mt-3 mb-4" >Yeteneklerim: </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                name="yetenek"
                value={memoryData.yetenek}
                onChange={onInputChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-light updatebtn">
            Düzenle
          </button>
        </form>
      </div>
    </>
  );
};

export default Guncelle;

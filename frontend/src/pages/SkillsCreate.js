import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createMemory } from "../actions/skillsActions";
const YetenekEkle = () => {
  const navigate = useNavigate();
  const [memoryData, setMemoryData] = useState({
    yetenek: "",
  });
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setMemoryData({ ...memoryData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div
        className="container-fluid mt-4 eklem"
        style={{ padding: "10px", border: "1px solid rgb(250, 245, 245)" }}
      >
                      <h3 className="pt-4" style={{color:"gray",textAlign:"center"}}><b>Yetenek Ekle</b></h3>
        <form
       
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(createMemory(memoryData))
            navigate("/yetenek");
          }}
        >
          <h4 className="ba">Ekle</h4>
          <div className="form-group">
            <br></br>
            <div className="form-group">
              <label className="mt-3 mb-4">Yeteneklerim: </label>
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
            Ekle
          </button>
        </form>
      </div>
    </>
  );
};

export default YetenekEkle;

import React, { useEffect,useState } from "react";
import Pagination from "./Pagination"
import swal from "sweetalert";
import { fetchMemories } from "../actions/skillsActions";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteMemory } from "../actions/skillsActions";
//import {fetchMemories,deleteMemory} from "../actions/skillsActions"
const Yetenek = () => {
  const navigate = useNavigate();
  const skilss = useSelector((state) => state.skilss);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemories());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(4);
  const [employeesPerPage] = useState(4);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = skilss.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(skilss.length / employeesPerPage);
  const [a,b]=useState("");
  return (
    <>
      <button
        data-toggle="modal"
        data-target="#exampleModal"
        type="button"
        className="btn btn-light mb-4 mt-4"
        style={{
          width: "110px",
          float: "right",
          height: "40px",
        }}
        onClick={() => navigate("/yetenek-ekle")}
      >
        <i className="fa-solid fa-plus mr-1 "></i>Ekle
      </button>
      <table className="table">
        <thead className="thead">
        <tr>
            <th>
          
       
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                 onChange={(e)=>
                    {b(e.target.value)}}
                />
              </div>
         
            </th>
          </tr>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Yetenekler</th>

            <th scope="col" style={{textAlign:"right"}}>İşlem</th>
          </tr>
        </thead>
        <tbody>
        {currentEmployees.filter((memory)=>{
            if(a == ""){
              return memory
            }else if (memory.yetenek.toLowerCase().includes(a.toLowerCase())) {
              return memory
            }

          }).map((memory) => {
            return (
              <tr>
                <td>{memory._id} </td>
                <td>{memory.yetenek}</td>

                <td>
                  <div
                       className="row bg-light p-0 m-0 pl-4"
                       style={{ borderRadius: "10px", width: "130px",float:"right" }}
                  >
                    <Link to={`/yetenek/${memory._id}`}>
                      {" "}
                      <button type="button" className="btn btn-light">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        swal({
                          title: "Silmek istediğinizden emin misiniz?",

                          icon: "warning",
                          dangerMode: true,
                          buttons: ["GERİ DÖN", "EVET SİL"],
                        }).then((willDelete) => {
                          if (willDelete) {
                            swal("OKE! İşleminiz tamamlandı", {
                              icon: "success",
                            });
                            dispatch(deleteMemory(memory._id))
                  
                    
                          } else {
                            navigate("/yetenek");
                          }
                        });
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      </table>

    </>
  );
};

export default Yetenek

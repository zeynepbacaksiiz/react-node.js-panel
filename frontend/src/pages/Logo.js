import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemories } from "../actions/logoaction";
import { deleteMemory } from "../actions/logoaction";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Sliderlogo from "./sliderlogo";
const Logo = () => {
 
  const navigate = useNavigate();
  const logo = useSelector((state) => state.logo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemories());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(4);
  const [employeesPerPage] = useState(4);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = logo.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(logo.length / employeesPerPage);
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
        onClick={() => navigate("/logo-ekle")}
      >
        <i className="fa-solid fa-plus mr-1 "></i>Ekle
      </button>
      <table className="table">
        <thead className="thead">
          
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Resim</th>

            <th scope="col" style={{textAlign:"right"}} className="pr-4">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((memory) => {
            return (
              <tr>
                <td>{memory._id} </td>
                <td>
                  <img
                    src={memory.image}
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  ></img>
                </td>

                <td>
                  <div
                    className="row bg-light p-0 m-0 pl-4"
                    style={{ borderRadius: "10px", width: "130px",float:"right" }}>
                    <Link to={`/guncelle-logo/${memory._id}`}>
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
                            dispatch(deleteMemory(memory._id));
                          } else {
                            navigate("/");
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
          <Sliderlogo/>
    </>
  );
};

export default Logo;

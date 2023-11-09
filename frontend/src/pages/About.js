import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemory } from "../actions/aboutaction";
import { fetchMemories } from "../actions/aboutaction";
import swal from "sweetalert";
import Pagination from "./Pagination";
const About = () => {
  const navigate = useNavigate();
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemories());
  }, [dispatch]);

  // useEffect(() => {
  //   const getMemories = async () => {
  //     const { data } = await api.hakkimda();

  //     setMemories(data);
  //   };
  //   getMemories();
  // }, []);
  const [currentPage, setCurrentPage] = useState(4);
  const [employeesPerPage] = useState(4);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = about.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(about.length / employeesPerPage);
  return (
    <>
      <button
        type="button"
        className="btn btn-light mb-4 mt-4"
        onClick={() => navigate("/hakkimda-ekle")}
        style={{
          width: "110px",
          float: "right",

          height: "40px",
        }}
      >
        <i className="fa-solid fa-plus mr-1 "></i>Ekle
      </button>

      <table className="table">
        <thead className="thead">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Cv</th>
            <th scope="col">Başlık</th>

            <th scope="col" style={{textAlign:"right"}}>İşlem</th>
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

                <td>{memory.hakkimda}</td>

                <td>
                  <div
                    className="row bg-light p-0 m-0 pl-4"
                    style={{
                      borderRadius: "10px",
                      width: "130px",
                      float: "right",
                    }}
                  >
                    <Link to={`/guncelle-hakkimda/${memory._id}`}>
                      {" "}
                      <button type="button" className="btn btn-light">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light i "
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
                            navigate("/hakkimda");
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

export default About;

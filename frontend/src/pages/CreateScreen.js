import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import Pagination from "./Pagination";
import { fetchMemories } from "../actions/projectActions";
import { deleteMemory } from "../actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Slider from "./slider";
import "./search.css";
const CreateScreen = () => {
  const memories = useSelector((state) => state.memories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMemories());
  }, [dispatch]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(4);
  const [employeesPerPage] = useState(4);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = memories.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(memories.length / employeesPerPage);
  const [search, setSearch] = useState("");

  return (
    <>
      <div
        className="modal fade p-0 "
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Proje Ekle</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
        onClick={() => navigate("/ekle")}
      >
        <i className="fa-solid fa-plus mr-1 "></i>Ekle
      </button>
      <table className="table">
        <thead className="thead">
          <tr>
            <th className="th">
              <form class="search-bar">
                <form action="" class="search-bar">
                  <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    required
                  />
                  <button class="search-btn" type="submit">
                    <span>Search</span>
                  </button>
                </form>
                {/* <div className="input-group input-group-sm mb-3 ">
                <div className="input-group-prepend search-btn" >
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
                    {setSearch(e.target.value)}}
                />
              </div> */}
              </form>
            </th>
            <th className="th"></th>
            <th className="th"></th>
            <th className="th"></th>
            <th className="th"></th>

            <th className="th">
              <div className="row">
                <h5 className="ml-4">Toplam proje sayısı:</h5>
                <h6 className="pt-1">
                  {" "}
                  &nbsp; &nbsp; {currentEmployees.length}
                </h6>{" "}
              </div>
            </th>
          </tr>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Resim</th>
            <th scope="col">Başlık</th>
            <th scope="col">Yetenek</th>
            <th scope="col">Açıklama</th>

            <th scope="col" style={{ textAlign: "right" }}>
              İşlem
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees
            .filter((memory) => {
              if (search == "") {
                return memory;
              } else if (
                memory.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return memory;
              }
            })
            .map((memory) => {
              return (
                <tr>
                  <td style={{ color: "gray" }}>{memory._id} </td>
                  <td>
                    <img
                      src={memory.image}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </td>

                  <td>{memory.content}</td>
                  <td>{memory.creator}</td>

                  <td>{memory.title}</td>

                  <td>
                    <div
                      className="row bg-light p-0 m-0 pl-4"
                      style={{
                        borderRadius: "10px",
                        width: "130px",
                        float: "right",
                      }}
                    >
                      <Link to={`/guncelle/${memory._id}`}>
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
      <Slider />
    </>
  );
};

export default CreateScreen;

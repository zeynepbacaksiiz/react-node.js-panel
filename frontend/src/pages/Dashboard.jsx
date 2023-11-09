import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "./style.css";
const Dashboard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { kullanici } = useSelector((state) => state.auth);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      const secondRatio = currentDate.getSeconds() / 60;
      const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
      const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
      setHourRotation(hourRatio * 360);
      setMinuteRotation(minuteRatio * 360);
      setSecondRotation(secondRatio * 360);
    }, 1000);
  }, []);
  useEffect(() => {
    if (!kullanici) {
      navigate("/");
    }
  }, [kullanici, navigate]);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/"); //resetlenınce yonlendı
  };
  return (
    <div className="container-fluid  p-0 m-0 " style={{ height: "130vh" }}>
      <div className="row p-0 m-0">
        <div
          className="col-md-2 p-0 m-0  g"
          style={{ background: "#161d31", height: "130vh" }}
        >
          <nav className="sidebar p-0 m-0 pb-4" style={{ height: "130vh" }}>
            <ul className="p-0" style={{ height: "100vh" }}>
              <div
                className="mn"
                style={{
                  backgroundImage: "url(/img/mermer.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              >
                <img src="img/qr.png" alt="" className="logo"></img>
              </div>

              <hr></hr>
              <li>
                <Link to="/proje">
                  <span className="simge">
                    {" "}
                    <i
                      className="fa-solid fa-list-check"
                       style={{ color: "#fff",opacity:"0.2" }}
                    ></i>
                    &nbsp; &nbsp;
                  </span>
                  <span className="baslik hover-3">Projeler</span>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link to="/hakkimda">
                  <span className="simge">
                    {" "}
                    <i
                      className="fa-solid fa-pencil"
                      style={{ color: "#fff",opacity:"0.2" }}
                    ></i>{" "}
                    &nbsp; &nbsp;
                  </span>
                  <span className="baslik hover-3">Hakkımda</span>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link to="/logo">
                  <span className="simge">
                    {" "}
                    <i
                      className="fa-solid fa-fill-drip"
                      style={{ color: "#fff",opacity:"0.2" }}
                    ></i>
                    &nbsp; &nbsp;
                  </span>
                  <span className="baslik hover-3">Logolarım </span>{" "}
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link to="/yetenek">
                  <span className="simge">
                    {" "}
                    <i
                      className="fa-brands fa-html5"
                      style={{ color: "#fff",opacity:"0.2" }}
                    ></i>{" "}
                    &nbsp;
                  </span>
                  <span className="baslik hover-3 ">&nbsp;Yetenekler </span>
                </Link>
              </li>
             {/* <li>
             <span className="simge" >
             <i className="fa-solid fa-arrow-right-from-bracket ml-4" style={{marginTop:"80px",fontSize:"1.3rem"}}></i>
             </span>
             <span className="baslik hover-3 ">&nbsp;Yetenekler </span>
             </li> */}
             <li>
                <Link to="/yetenek">
                  <span className="simge">
                    {" "}
                  <i className="fa-solid fa-arrow-right-from-bracket" style={{marginTop:"80px",fontSize:"1.3rem",color:"rgb(126, 216, 182)"}}></i>
                    &nbsp;
                  </span>
                  <span className=" logout"  style={{marginTop:"74px" }} onClick={onLogout}>&nbsp;<b>Çıkış Yap </b></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="col-md-10"
          style={{ height: "130vh", background: "#161d31"}}
        >
          <div
            className="container-fluid mt-4 ust "
            style={{ background: "#283046", borderRadius: "10px" }}
          >
            <div className="row ">
              <div className="col-md-5 p-0">
                <div className="sosyalbutonlar p-0 m-0">
                  <a href="#!" target="_blank" className="twitter">
                    <i className="fa-brands fa-github"></i>
                  </a>

                  <a href="#!" target="_blank" className="instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#!" target="_blank" className="linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#!" target="_blank" className="youtube">
                    <i className="fa-brands fa-behance"></i>
                  </a>
                  
                </div>
              </div>
              <div className="col-md-7 t">
                <div className="row">
                  <div className=" col-8 p-0 m-0 ">
                    <ul style={{ float: "right" }}>
                
                      <li>
                        <div className="pic mr-2 mt-3 mb-3">
                          <a href="#!" className="dl">
                            <img src="img/abd.jpeg" alt=""></img>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="pic mr-4 mb-3" >
                          <a href="#!" className="dl">
                            <img src="img/tr.jpeg" alt=""></img>
                          </a>
                        </div>
                      </li>
              <li>
              <div className="clock m-0">
                  <div
                    className="line hour"
                    style={{
                      transform: `rotate(${hourRotation}deg)`,
                    }}
                  ></div>
                  <div
                    className="line minute"
                    style={{
                      transform: `rotate(${minuteRotation}deg)`,
                    }}
                  ></div>
                  <div
                    className="line second"
                    style={{
                      transform: `rotate(${secondRotation}deg)`,
                    }}
                  ></div>
                  {numbers.map((item) => {
                    return (
                      <div
                        key={item}
                        className="number"
                        style={{
                          transform: `rotate(${item * 30}deg)`,
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </li>
                    </ul>
                  </div>
                  <div className="col-4 user ">
                    <div className="row" style={{float:"right"}}>
                      {" "}
                      <span   className="pt-3"
                        style={{ fontSize: "15px", color: "gray",marginRight:"90px" }}
           
                      >
                        <h6 style={{color:"white"}}><b>Zeynep</b> <br></br></h6>  
                        <b>Admin</b> <br></br>
                       
                      </span>
                      <span>
                        {" "}
                        <img
                          src="img/user.jpeg"
                          alt=""
                          className=""
                          style={{ borderRadius: "100px" }}
                          onClick={() => {
                            navigate("/");
                            onLogout()
                          }}
                        ></img>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {props.content && props.content}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import "./login.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { kullanici, isHata, isBasari, isYukleniyor, mesaj } = useSelector(
    (state) => state.auth
  ); //state ıcındekı bılgılerı aldık
  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });

  const { email, parola } = formData;

  const onChange = (e) => {
    setFormData((onceki) => ({
      ...onceki,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, parola };
    dispatch(login(userData));
  };
  useEffect(() => {
    if (isHata) {
      //hata vasrsa
      toast.error(mesaj);
    }
    if (isBasari || kullanici) {
      //hata yoksa burda cıkıs olmuyo veya oldugu ıcın bunun ıcın addcase tanımaldık basarılıysa yada kullanı varsa state ıcınde kullanıcı var
      navigate("/proje");
    }
    dispatch(reset());
  }, [
    kullanici,
    isHata,
    isBasari,
    isYukleniyor,
    mesaj,
    navigate,
    dispatch,
    isYukleniyor,
  ]); //BUNLARDA CALISSIN

  if (isYukleniyor) {
    <Spinner />;
  }
  return (
    <>
      <div className="body">
        <div className="container" style={{ paddingTop: "10%" }}>
          <div className="row tyu">
            <div className="col-lg-4 col-md-4 login-box">
              <div className="col-lg-12 login-key">
                <i className="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="col-lg-12 login-title">ADMIN PANEL</div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label className="form-control-label">e-mail:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        autocomplete="off"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">parola:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="parola"
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-lg-12 loginbttm">
                      <div className="col-lg-6 login-btm login-text"></div>
                      <div className="col-lg-6 login-btm login-button">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        style={{borderRadius:"10px"}}>
                          GİRİŞ YAP
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

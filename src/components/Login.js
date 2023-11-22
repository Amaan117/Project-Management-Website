import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      nav("/");
    }
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/authorization/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    const jsonData = await response.json();
    if (jsonData.success === true) {
      localStorage.setItem("token", jsonData.authToken);
      nav("/");
      window.location.reload();
    } else {
      console.log(jsonData.message);
    }
  };


  return (
    <>
  <section className="vh-100" style={{ backgroundColor: "rgb(175, 220, 245)" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-9">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block" >
              <img
                src={require("../images/log1.jpg")}
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem" , height: "600px"}}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={handleLogin}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">FreeLancers</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example17"
                      className="form-control form-control-lg"
                      onChange={onChangeemail}
                      required
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      onChange={onChangepassword}
                      required

                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="#!" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    
    </>
  )
}

import React, { useState } from "react";
// import instance from "../services/axiosUrl";
import Logo from "../images/IIT_JAMMU_LOGO.png";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container pt-5" >
        <div className="row justify-content-center pt-5">
          <div className=" card col-6">
            <img
              src={Logo}
              alt="IIT JAMMU"
              style={{
                height: "150px",
                width: "300px",
                padding: "10px",
                margin: "0 auto",
              }}
            />
            {/* <div class="d-grid gap-2 mt-4 mb-3">
              <button
                class="btn btn-warning"
                type="submit"
                onClick={handleSubmit}
              >
                LOGIN
              </button>
            </div> */}
            {/* <h6 class="text-center">OR</h6> */}
            <br/>
            <hr/>
            <h6 style={{textAlign:'center',color:'gray'}}>WELCOME TO IIT JAMMU PLACEMENT DASHBOARD</h6>
            <hr/>
            <br/>
            <div class="d-grid gap-2 mt-2 mb-3">
              <Link to="/login?type=student">
                <button
                  class="btn btn-primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Student Login
                </button>
              </Link>
            </div>
            <br/>
            <div class="d-grid gap-2 mt-2 mb-3">
              <Link to="/login?type=cds">
                <button
                  class="btn btn-primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Staff Login
                </button>
              </Link>
            </div>
            <br/>
            <div class="d-grid gap-2 mt-2 mb-3">
              <Link to="/login?type=recruiter">
                <button
                  class="btn btn-primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Recruiter Login
                </button>
              </Link>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
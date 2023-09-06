import React, { useState } from "react";
import instance from "../services/axiosUrl";
import Logo from "../images/IIT_JAMMU_LOGO.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type');
  const handleSubmit = async () => {
    if (!email || !password) {
      return setError("Email and password are required");
    }
    const temp = email.split("@");
    if (temp.pop() !== "iitjammu.ac.in") {
      return setError("Invalid Email id");
    }

    try {
      await instance.post("/user/create", {
        email,
        password,
        type
      });

      navigate(`/login?type=${type}`);
    } catch (e) {
      setError(e.response.data);
      console.log(e);
    }
  };
  return (
    <div>
      <div className="container pt-5">
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

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <p className="text-danger text-center"> {error} </p>
            <div class="d-grid gap-2 mt-4 mb-3">
              <button
                class="btn btn-warning"
                type="submit"
                onClick={handleSubmit}
              >
                SIGN UP
              </button>
            </div>
            <h6 class="text-center">OR</h6>
            <div class="d-grid gap-2 mt-2 mb-3">
              <Link to={`/login/?type=${type}`}>
                <button
                  class="btn btn-primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Already have an account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

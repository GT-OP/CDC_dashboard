import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import instance from "../services/axiosUrl";

const AddCompany = (props) => {
  const [company, setCompany] = useState("");
  const [full, setFull] = useState("");
  const [stipened, setStipened] = useState("");
  const [branch, setBranch] = useState([]);
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const nameChangeHandler = (event) => {
    setCompany(event.target.value);
  };
  const packageChangeHandler = (event) => {
    setFull(event.target.value);
  };
  const stipenedChangeHandler = (event) => {
    console.log(event.target.value);
    setStipened(event.target.value);
  };
  const branchChangeHandler = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setBranch([...branch, value]);
    } else {
      setBranch(branch.filter((e) => e !== value));
    }
  };
  const fileChangeHandler = (event) => {
    setFile(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const companyData = {
      name: company,
      package: full,
      stipened: stipened,
      eligibility: branch,
      files: file,
    };
    props.saveData(companyData);
    await instance.post(
      "/company/create",
      { ...companyData },
      { headers: { authorization: localStorage.getItem("accessToken") } }
    )
    setCompany("");
    setFull("");
    setStipened("");
    setBranch([]);
    setFile("");
    navigate("/list");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-8">
            <div class="card mt-3">
              <div class="card-body bg-secondary text-center text-white">
                <h3>Add New Company</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <form className="col-7" onSubmit={submitHandler}>
            <div class="mb-3 mt-3">
              <label for="name" class="form-label">
                Comapny Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={company}
                placeholder="microsoft"
                onChange={nameChangeHandler}
              />
            </div>

            <div className="row ">
              <div className="col">
                <label for="package" class="form-label">
                  Package
                </label>
                <input
                  type="number"
                  value={full}
                  class="form-control"
                  id="package"
                  placeholder="xxxx"
                  onChange={packageChangeHandler}
                />
              </div>
              <div className="col">
                <label for="stipened" class="form-label">
                  Stipened
                </label>
                <input
                  type="number"
                  value={stipened}
                  class="form-control"
                  id="stipened"
                  placeholder="xxxx"
                  onChange={stipenedChangeHandler}
                />
              </div>
            </div>

            <div class="mt-3 mb-2">Eligible Branches:</div>
            <div class="d-flex flex-fill flex-wrap">
              <div class="form-check me-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="CSE"
                  id="branches"
                  onChange={branchChangeHandler}
                />
                <label class="form-check-label" for="branches">
                  Computer Science & Engineering
                </label>
              </div>
              <div class="form-check mx-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="EE"
                  id="branches"
                  onChange={branchChangeHandler}
                />
                <label class="form-check-label" for="branches">
                  Electrical Engineering
                </label>
              </div>
              <div class="form-check me-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="ME"
                  id="branches"
                  onChange={branchChangeHandler}
                />
                <label class="form-check-label" for="branches">
                  Mechanical Engineering
                </label>
              </div>
              <div class="form-check mx-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="CE"
                  id="branches"
                  onChange={branchChangeHandler}
                />
                <label class="form-check-label" for="branches">
                  Civil Engineering
                </label>
              </div>
              <div class="form-check mx-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="CHE"
                  id="branches"
                  onChange={branchChangeHandler}
                />
                <label class="form-check-label" for="branches">
                  Chemical Engineering
                </label>
              </div>
              <div class="form-check me-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="MT"
                  id="branches"
                  onChange={branchChangeHandler}
                />
                <label class="form-check-label" for="branches">
                  Material Engineering
                </label>
              </div>
            </div>
            <div class="mt-3 ">Upload File:</div>
            <div class="input-group mt-2">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile04"
                value={file}
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                onChange={fileChangeHandler}
              />
            </div>
            <div class="d-grid gap-2 mt-4 mb-3">
              <button class="btn btn-danger" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;

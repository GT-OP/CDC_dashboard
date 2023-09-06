import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import "./List.css";
import Navbar from "../components/Navbar";
import instance from "../services/axiosUrl";

const List = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({})
  const fetchData = async () => {
    try {
      const response = await instance.get("/company", {
        headers: { authorization: localStorage.getItem("accessToken") },
      });
      setData(response.data.company);
    } catch (error) { }
  };
  useEffect(() => {
    let temp = localStorage.getItem('user');
    try {
      setUser(JSON.parse(temp));
      console.log(temp);
    } catch (error) {

    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div class="container-fluid">
        <div class="row ">
          <div className="col-12">
            <div class="card mt-3">
              <div class="card-body bg-secondary text-center text-white">
                <h3>Companies</h3>
              </div>
            </div>
          </div>
        </div>
        {
          user.type === "student" ? <></> :

            <div className="row justify-content-between">
              <div className="col">
                <div class="card mt-3 ">
                  <div class="card-body text-dark d-flex justify-content-between">
                    <h5 class="text-start">Add New Company</h5>
                    <div class="text-end">
                      <Link to="/add">
                        `<button
                          type="button"
                          class="btn btn-success"
                          style={{ minWidth: "20px" }}
                        >
                          Add
                        </button>
                      </Link>`
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        <div class="row justify-content-center">
          <div class="col mt-2">
            <table class="table table-success table-striped justify-content-around">
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Package-CTC</th>
                  <th scope="col">Stipened</th>
                  <th scope="col">Eligible Branches</th>
                  <th scope="col">Details</th>
                  <th scope="col">Apply</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {data.map((data) => (
                  <tr>
                    <th
                      scope="row"
                      style={{ fontSize: "x-large", fontFamily: "initial" }}
                    >
                      {data.name}
                    </th>
                    <td>{data.package} LPA</td>
                    <td>{data.stipened} K</td>
                    <td>
                      {data.eligibility.map((e) => (
                        <button
                          type="button"
                          class="btn btn-secondary mx-1 px-2"
                          id="btnstyle"
                          disabled
                        >
                          {e}
                        </button>
                      ))}
                    </td>
                    <td>
                      <Link to={`/details/${data._id}`}>
                        {" "}
                        <button type="button" class="btn btn-outline-secondary">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to="/fullform">
                        <button type="button" class="btn btn-danger mx-2">
                          Full-Time
                        </button>
                      </Link>
                      <Link to="/intern">
                        <button type="button" class="btn btn-warning">
                          Internship
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

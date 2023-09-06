import React from 'react'
import {PieChart} from "../components/PieChart"
//Components
import "./charts.css"
import Navbar from '../components/Navbar'
import { BarChart } from '../components/BarChart'
// import { Bar } from 'react-chartjs-2';


const Dashboard = ({data,title}) => {
  console.warn(title);
  return (
    <div>
        <Navbar/>
        <div className='container-fluid'>
        <div className='row justify-content-center'>
                <div className='col-12'>
                        <div class="card mt-3">
                            <div class="card-body bg-secondary text-center text-white">
                                <h3>Placement Highlights (2022-2023)</h3>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body  text-center text-black">
                                <h3>B.Tech</h3>
                            </div>
                        </div>
                        <br/>
                        <div style={{fontWeight:700}}>
                        <h6 style={{display:'inline-block'}}>Computer Science & Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Electrical Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Mechanical Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Civil Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Chemical Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Material Engineering</h6>
                        </div>
                        <div className='pie'>
                          <PieChart/>
                        </div>
                        <br/>
                        {/* <div class="card mt-3">
                            <div class="card-body  text-center text-black">
                                <h3>M.Tech</h3>
                            </div>
                        </div>
                        <br/>
                        <div >
                        <h6 style={{display:'inline-block'}}>Computer Science & Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Electrical Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Computer Technology</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Thermal Engineering</h6>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 style={{display:'inline-block'}}>Tunnel Engineering</h6>
                        </div>
                        <div className='pie'>
                          <PieChart/>
                        </div> */}
                        <div className='Bar' >
                        <BarChart/>
                        </div>
                        <br/>
                        {/* hgcugsducsd */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
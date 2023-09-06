import React from 'react'

//Components
import Navbar from './Navbar';

const FullForm = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                        <div class="card mt-3">
                            <div class="card-body bg-secondary text-center text-white">
                                <h3>Apply For Full-Time !!!</h3>
                            </div>
                        </div>
                </div>
            </div>
            <div class='row justify-content-center'>
                <div class="col-8 mt-3">
                    <form class="was-validated">
                        <div class=" mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Name" required/>
                            <div class="invalid-feedback">
                            Please enter name here.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="id" class="form-label">Institute Id</label>
                            <input type="text" class="form-control" id="id" placeholder="id" required/>
                            <div class="invalid-feedback">
                            Please enter institute id here.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Institute Email Id</label>
                            <input type="email" class="form-control" id="email" placeholder="user_id@iitjammu.ac.in" required/>
                            <div class="invalid-feedback">
                            Please enter intitute email here.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="number" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="number" placeholder="xxxxxxxxxx" required/>
                            <div class="invalid-feedback">
                            Please enter Phone Number here.
                            </div>
                        </div>
                        <div class="mb-3">
                            {/* <label>Branch</label> */}
                            <select class="form-select" required aria-label="select example">
                            <option value="">Select Branch</option>
                            <option value="1">Computer Science & Engineering</option>
                            <option value="2">Electrical Engineering</option>
                            <option value="3">Mechanical Engineering</option>
                            <option value="4">Civil Engineering</option>
                            <option value="5">Chemical Engineering</option>
                            <option value="6">Material Engineering</option>
                            </select>
                            <div class="invalid-feedback">Example invalid select feedback</div>
                        </div>
                        <div class='mb-2'>
                            Resume
                        </div>
                        <div class="mb-3">
                            <input type="file" class="form-control" aria-label="file example" required/>
                            <div class="invalid-feedback">Example invalid form file feedback</div>
                        </div>
                        <div class="d-grid mb-3">
                            <button class="btn btn-danger" type="button">Submit Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullForm
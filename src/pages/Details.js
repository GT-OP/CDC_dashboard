import React, { useEffect, useState } from 'react'

//Components
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import instance from '../services/axiosUrl'

const Details = () => {
    const params = useParams()
    const [data, setData] = useState(null)
    const fetchdata = async (id) => {
        console.log(id);
        try {
            const response = await instance.get(`/company/${id}`, {
                headers: { authorization: localStorage.getItem("accessToken") },
            });
            console.log(response.data);
            setData(response.data.company);
        } catch (error) { 
            console.log(error);
        }
    };


    useEffect(() => {
        console.log('Hi');
        fetchdata(params.id)
    }, [])

    if(!data){
        return <></>
    }
    return (
        <div>
            <Navbar />
            <div class='container-fluid'>
                <div class='row '>
                    <div className='col-12'>
                        <div class="card mt-3">
                            <div class="card-body bg-secondary text-center text-white">
                                <h3>Company Details</h3>
                                <h3>{data.name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
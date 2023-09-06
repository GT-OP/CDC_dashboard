import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
// import { toastError } from '../utils/toastMessage';

const PrivateComponent = () => {
    const auth=localStorage.getItem('user');
  return auth?<Outlet/>:<Navigate to='/home'/>
}

export default PrivateComponent;
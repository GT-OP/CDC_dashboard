import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import AddCompany from "./pages/AddCompany";
import List from "./pages/List";
import FullForm from "./components/FullForm";
import Internship from "./components/Internship";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Scheduler from "./components/ReactScheduler";
import ListU from "./pages/ListU";
import Home from "./pages/Home";
import PrivateComponent from "./components/PrivateComponent";




const dummyData = [];

const url = "http://localhost:3001";

const App = () => {
  const [data, setData] = useState(dummyData);
  
  const onSaveData = (enteredData) => {
    console.log(enteredData);
    const updatedData = [enteredData, ...data];
    setData(updatedData);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<Dashboard />} />
          
          <Route path="/add" element={<AddCompany saveData={onSaveData} />} />
          <Route path="/list" element={<List item={data} />} />
          <Route path="/fullform" element={<FullForm />} />
          <Route path="/intern" element={<Internship />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/listu" element={<ListU />} />
          <Route path="/calendar" element={<Scheduler />} />
          
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/home" element={<Home />} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

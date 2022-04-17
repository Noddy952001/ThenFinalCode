import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Signup} from "./components/Signup"
import {Login} from "./components/Login"
import {Routes ,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Admin_login} from "./components/Admin_login"
import {AdmindDashbord} from "./components/Admin"
import {UpdateData} from "./components/Update"
import {TeacherDetail} from "./components/Teacher_detail"

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path={"/"}  element={<Home/>}></Route>
        <Route path={"/login"}  element={<Login/>}></Route>
        <Route path={"/signup"}  element={<Signup/>}></Route>
        <Route path={"/admin"}  element={<Admin_login/>}></Route>
        <Route path={"/admin_dashboard"}  element={<AdmindDashbord/>}></Route>
        <Route path={"/update/:id"}  element={<UpdateData/>}></Route>
        <Route path={"/teacher_detail/:id"}  element={<TeacherDetail/>}></Route>




        


      </Routes>
    </div>
  )
}

export default App

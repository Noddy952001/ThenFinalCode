import React, { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import {change_email,change_password, change_token} from "../redux/action"
import { Store } from '../redux/store'
import axios from "axios"
import { useNavigate } from "react-router-dom"





export const Login = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [email  , setEmail] = useState()
    const [password  , setPassword] = useState()
    const [token  , setToken ]  =  useState()

    const value  = useSelector((store) => store)

    console.log("value",value)



    const hadelSubmit = () => {

        var data = { email,password}

        axios.post("https://refreshertest.herokuapp.com/login" , data ).then(function(res){
            console.log("data",res.data)
           setToken(res.data.Token)
        })

        dispatch( change_email(email) )
        dispatch( change_password(password) )
        dispatch( change_token(token) )

    }

    if(token){
        navigate("/")
    }

    return(
        <div>

            <h1>login page </h1>

            <input type="text"
                placeholder="enter email" 

                onChange={(e) => {
                setEmail(e.target.value)

             }}

            /> <br />

            <input type="text"
                 placeholder="enter password" 
             
                onChange={(e) => {
                    setPassword(e.target.value)
             }}

            />  <br />


             <button 
                onClick={hadelSubmit}
             > Submit</button>
        </div>
    )
}
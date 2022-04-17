import React, { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import {change_email,change_password} from "../redux/action"
import { Store } from '../redux/store'
import axios from "axios"



export const Signup = () => {
    const dispatch = useDispatch()


    const [email  , setEmail] = useState()
    const [password  , setPassword] = useState()

    const value  = useSelector((store) => store)

    console.log("value",value)


    const hadelSubmit = () => {

        var data = { email,password}

        axios.post("https://refreshertest.herokuapp.com/register" , data ).then(function(res){
            console.log("data",res.data)
        })

        dispatch( change_email(email) )
        dispatch( change_password(password) )
    }

    return(
        <div>

            <h1>Sign-up page </h1>

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
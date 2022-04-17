import { useDispatch , useSelector } from "react-redux"
import {useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export const UpdateData = () => {
    const navigate = useNavigate()
    const [teacher_name , setTeacher] = useState()
    const [gender , setGender] = useState()
    const [age , setAge] = useState()
     const {id} = useParams()

    const value = useSelector((store => store) )

    // console.log("value :" , value)


    const data = {
        name : teacher_name,
        gender : gender,
        age : age
    }
    
    const   handelSubmit = () => {

        axios.patch(`https://refreshertest.herokuapp.com/teacher/${id}`, data).then(function(res){
            console.log(res.data)
            alert("update sucessful")
        })

        navigate("/")
    }


    return(
        <div>

            <h1>Update Page</h1>

            <input 
                type="text"
                placeholder="Enter name"
                onChange={(e) => {
                setTeacher(e.target.value)
            }}
            /> <br />

            <input 
                type="text"
                placeholder="Enter gender"
                onChange={(e) => {
                    setGender(e.target.value)
                }}
            /> <br />

            <input 
                type="text" 
                placeholder="Enter age"
                onChange={(e) => {
                    setAge(e.target.value)
                }}    
            /> <br />

                <button
                    onClick={handelSubmit}
                >
                    add
                </button>

        </div>
    ) 
}
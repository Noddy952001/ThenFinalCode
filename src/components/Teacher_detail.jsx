import React, { useState } from "react";
import axios from "axios" 
import { useParams } from "react-router-dom";


export const TeacherDetail = () => {

    const {id} = useParams()
    const [data ,setData] = useState()


        React.useEffect(() => {

               if(data === undefined){
                   axios.get(`https://refreshertest.herokuapp.com/teacher/${id}`).then(function(res){
                       setData(res.data)  
                   })
               } 
        },[])

        console.log(data)



    return (
        <div>

            <div> Name :  {data?.name}</div>
            <div> Age :  {data?.age}</div>
            <div> Gender :  {data?.gender}</div>

            {/* <div>   {data?.}  </div> */}

        </div>
    )
}
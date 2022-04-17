import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";



export const AdmindDashbord = () => {

  
    const [data , setData] = useState()
    const [deldata , setdelData] = useState(false)
    const [status ,setStatus] = useState(true)

    React.useEffect(() => {
        getdata()
    },[])

    const getdata =() => {
        axios.get("https://refreshertest.herokuapp.com/teacher").then(function(res){
            console.log(res.data)
            setData(res.data)
        })
    }
return(

    <div>  
          <h1>ADmin Dashboard Page</h1>

     
        <div className="maindiv">
            <table className="table">
                    <thead>
                        <tr>
                            <th className="table">id</th>
                            <th  className="table">Teacher Name</th>
                            <th  className="table">Gender</th>
                            <th  className="table">Age</th>
                            <th className="table" > Update</th>

                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el , p) => {
                            return (
                                <tr>
                                    <td className="table">{p+1}</td>
                                    <td className="table">{el.name}</td>
                                    <td className="table">{el.gender}</td>
                                    <td className="table">{el.age}</td>
                                    <td className="table">    <Link to={`/update/${el._id}`}> <button>Update</button> </Link></td>

                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>
        </div>
    </div>

    )
          
}



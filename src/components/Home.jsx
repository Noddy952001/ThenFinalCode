import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



export const Home = () => {

  
    const [data , setData] = useState()
    const [deldata , setdelData] = useState(false)
    const [filterData , setfilterData] = useState([])
    const [count ,setCount] = useState(1)
    const [page, setPage] = useState(1);
    const perPage = 5;


    React.useEffect(() => {
        getdata()
        setCount()
    },[])


    const getdata = (page, perPage) => {
        axios("https://refreshertest.herokuapp.com/teacher", {
          method: "GET",
          params: {
            _page: page,
            _limit: perPage,
           
          }
        })
            .then((res) => {
             setData(res.data);
             setfilterData(res.data)
            }) 
      };


     

    

return(


    <div className="homepage">  


        <div  className="navbar">

            <div>
                <span>
                  Search<input type="text" name="" placeholder="Search"  /> 
                </span>
            </div>

            <div>

            </div>
                 <Link to={"/admin"} >Admin Side</Link>

            <div>
                 <Link to={"/login"}> Login  </Link>
            </div>

            <div>
                 <Link to={"/signup"}> Register  </Link>
            </div>
            
        </div>
          {/* <h1>Home Page</h1> */}
        <div className="maindiv">
            <table className="table">
                    <thead>
                        <tr>
                            <th className="table">id</th>
                            <th  className="table">Teacher Name</th>
                            <th  className="table">Gender</th>
                            <th  className="table">Age</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el,p) => {
                            return (
                                <tr>
                                    <td className="table">{p+1}</td>
                                    <td className="table" id="txt1"    > <Link to={`/teacher_detail/${el._id}`}> {el.name} </Link></td>
                                    <td className="table" id="txt">{el.gender}</td>
                                    <td className="table"id="txt3" >{el.age}</td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>

            <div className="pagination">
                <button className="btn" onClick={() => setPage((page) => page - 1)}>
                  PREV
                </button>
                <button  className="btn"  onClick={() => setPage(page + 1)}>
                    NEXT
                </button >
                <div>Current page: {page}</div>
            </div>
        </div>
    </div>

    )
          
}



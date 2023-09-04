import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {



    const [data, setData] = useState([]);

    function getData() {
        axios.get('https://64f02ed58a8b66ecf7793d6a.mockapi.io/crud-1')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        });
    }
    function handleDelete (id){
        axios.delete(`https://64f02ed58a8b66ecf7793d6a.mockapi.io/crud-1/${id}`)
        .then(()=>{
            getData()
        })
    }

    const setToLocalStorage =(id, name, email) =>{
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(()=>{
        getData();
    },[ ]);



  return (
    <>
      <h2>Read Operation</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
 {
 data.map((eachData)=>{
    return(
    <>
 <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      
      <td>
      <Link to="/update">
      <button className = "btn btn-success" onClick={()=> setToLocalStorage(eachData.id,eachData.name,eachData.email)}> Edit </button>
      </Link>
      </td>
      <td><button className = "btn btn-danger" onClick={()=> handleDelete(eachData.id)}> Delete </button></td>
    </tr>

  </tbody>
    </>
 )})
}
</table>

    </>
  )
}

export default Read

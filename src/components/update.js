import React, { useEffect } from 'react'
import  { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Update = () => {

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
   setId( localStorage.getItem("id"))
   setName( localStorage.getItem("name"))
   setEmail( localStorage.getItem("email"))
    },[])

    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put(
            `https://64f02ed58a8b66ecf7793d6a.mockapi.io/crud-1/${id}`,
        {
            name: name,
            email: email,
        }
        ).then(()=>{
            navigate("/read")
        })

    }

  return (
    <>
     <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                    value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" 
                onClick={handleUpdate}
                >
                    Update
                </button>
            </form>
    </>
  )
}

export default Update

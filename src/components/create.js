import React, { useState } from 'react';
import axios from 'axios'; // Import the axios library
import {useNavigate} from "react-router-dom";


const Create = () => {
    const [name, setName] = useState(""); // Correct usage of useState
    const [email, setEmail] = useState(""); // Correct usage of useState
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios.post(
            'https://64f02ed58a8b66ecf7793d6a.mockapi.io/crud-1',
            {
                name: name,
                email: email,
            },

            
            // { headers: { "Access-Control-Allow-Origin": "*" } } // Correct header syntax
        )
        .then(()=>{
            history("/read")
        })
    };

    return (
        <>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default Create; // Export the component with proper capitalization

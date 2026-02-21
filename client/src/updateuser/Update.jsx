import React, { useState,useEffect} from "react";
import './update.css';
import{ Link, useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";

const Updateuser =()=> {

  const users ={
    name:"",
    email:"",
    address:"",

  };

  const [user, setUser]=useState(users)

  const navigate = useNavigate();
  const {id}=useParams();
  const inputHandler = (e)=>{
    const {name, value}=e.target
    setUser({...user,[name]:value});

  }

  useEffect(()=>{
   
  axios.get(`http://localhost:8000/api/user/${id}`)
  .then((response)=>{

    setUser(response.data);

  })
  .catch((error)=>{
    console.log(error);
  })

  },[id]);
 
  const submitForm = async (e)=>{
    e.preventDefault()

    await axios.put(`http://localhost:8000/api/update/user/${id}`, user)
   .then((response)=>{
    console.log(response.data);
    toast.success(response.data.message,{postion:"top-right"});
     navigate("/");
   })  
   .catch((error)=>{
     
    console.log(error)
   })
     
  }

  return (
    <div className="adduser">
      <Link to="/" type="button" className="btn btn-primary">Back</Link>
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter you name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
             value={user.email}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter you Email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter you Address"
          />
        </div>
        <div className="inputGroup">
          <button type="Submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updateuser;

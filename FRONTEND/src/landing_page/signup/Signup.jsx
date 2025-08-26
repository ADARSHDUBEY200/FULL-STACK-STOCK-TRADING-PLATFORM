import React from 'react'
import { useState } from 'react';
import axios from "axios"

const Signup = () => {

  const [formData , setFormData] = useState({
    email : "",
    username:"",
    password : ""
  });

  const handleFormData = (event)=>{
    setFormData((PrevValues)=>{
      return {...PrevValues, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = async (event)=>{
    console.log("called handleSubmit");

    event.preventDefault();

    const response = await axios.post("http://localhost:3000/signup", {
      ...formData
    })

    const {message, success,token} = response.data;

    console.log(message);
    
    if(success){
      window.location.href = `http://localhost:5174/home?token=${token}`
    }

  }
  return (
    <div>
      <h3 className='fw-bold'>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3 text-start'>
          <label htmlFor="email" className='form-label'>Enter your email</label>
          <input className='form-control' type="email" id='email' name='email' value={formData.email} onChange={handleFormData}/>
        </div>
        <div className='mb-3 text-start'>
          <label htmlFor="user" className='form-label'>Enter your name</label>
          <input className='form-control' type="text" id='user' name='username' value={formData.username} onChange={handleFormData}/>
        </div>
        <div className='mb-3 text-start'>
          <label htmlFor="password" className='form-label'>Enter password</label>
          <input className='form-control' type="password" id='password' name='password' value={formData.password} onChange={handleFormData}/>
        </div>

        <button type='submit' className='col-12 btn btn-primary btn-lg'>SignUp</button>
      </form>
    </div>
  )
}

export default Signup;
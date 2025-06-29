import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleFormData = (event) => {
    setFormData((currvalue) => {

      return { ...currvalue, [event.target.name]: event.target.value }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { data } = await axios.post("http://localhost:3000/login",
      {
        ...formData
      },
    );

    const { message, success , token } = data;
    console.log(success);
    console.log(message);

    if (success) {
      window.location.href = `http://localhost:5174/?token=${token}`;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className='fw-bold'>LogIn</h3>
        <div className='mb-3 text-start'>
          <label htmlFor="email" className='form-label'>Enter Your Email</label>
          <input className='form-control' type="email" id='email' name='email' value={formData.email} onChange={handleFormData} />
        </div>
        <div className='mb-3 text-start'>
          <label htmlFor="password" className='form-label'>Enter Password</label>
          <input className='form-control' type="password" id='password' name='password' value={formData.password} onChange={handleFormData} />
        </div>

        <button className='col-12 btn btn-primary btn-lg'>Login</button>
      </form>
    </div>
  )
}

export default Login;


import React, { useState } from 'react'
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
// import { Home } from '@mui/icons-material';


const Login = () => {

  const history=useNavigate();
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/",{
        email,password
      })
      .then(res=>{
        if(res.data==="exist")
        {
             history("/home ",{state:{id:email}})
        }
        else if(res.data==="notexist")
        {
             alert("Username dosent exist. Please Signup") 
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
     
    }
    catch(err)
    {
      console.log(err);
    }
  }
  
  let navigate =useNavigate();
  const gotoHome = () => {
    let path =`home`;
    navigate(path);
  }
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-pink'>
      <div className='form-container p-5 rounded bg-white'> 
      <form action ="POST">
      <h3 className='text-center'>Sign In</h3>

       <div className='mb-2'>
        <label htmlFor='email' className='email'>Email</label>
        <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) =>{setEmail(e.target.value)}} />
       </div>
       <div className='mb-2'>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Enter Password' className='form-control' onChange={(e) =>{setPassword(e.target.value)}} />
       </div>
       <div className='mb-2'>
       {/* <input type='checkbox' placeholder='custom-control custom-checkbox' id='check'/> */}
       {/* <label htmlFor='check' className='custom-input-label ms-2'>
        Remember me
       </label> */}
       </div>
       <div className='d-grid'>
        <button className='btn btn-primary bg-pink' onClick={submit}>Sign in</button>
       </div>
       {/* <Link>Sign in as a Doctor</Link> */}
      
       <p className='text-end mt-2 fi'>
         <Link to='/signup' className='text-pink'>Forgot Password? </Link><Link to="/signup" className='ms-2 text-pink'>Sign up</Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default Login

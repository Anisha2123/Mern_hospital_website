

import React, {useEffect,useState} from 'react'
import "./signup.css"
import { Link,useNavigate} from 'react-router-dom'
import axios from "axios"

function Login() {
   
  const history=useNavigate();
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    

    try{
      await axios.post("http://localhost:8000/signup",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist")
        {
          alert("User already exits")
            //  history("/home ",{state:{id:email}})
        }
        else if(res.data="notexist")
        {
          history("/home ",{state:{id:email}}) 
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

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-pink'>
    <div className='form-container p-5 rounded bg-white'> 
    <form action="POST">
    <h3 className='text-center'>Sign Up</h3>
    <div className='mb-2'>
        <label htmlFor='email' className='email'>Email</label>
        <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) =>{setEmail(e.target.value)}} />
       </div>
     <div className='mb-2'>
      <label htmlFor='password'>Password</label>
      <input type='password' placeholder='Enter Password' className='form-control' onChange={(e) =>{setPassword(e.target.value)}} />
     </div>
     
     <div className='d-grid'>
      <button className='btn btn-primary bg-pink border-none text-white' onClick={submit} >Sign Up</button>
     </div>
     <p className='text-end mt-2 fi'>
      Already Registered? <Link to="/" className='ms-2 text-pink'>Sign in</Link>
      </p>
    </form>
    </div>
  </div>
  )
}

export default Login

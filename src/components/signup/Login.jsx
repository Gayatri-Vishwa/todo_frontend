import React from 'react'
import "./signup.css";
import { useState } from 'react';
import HeadingComp from "./HeadingComp";
import axios from "../../axios";;
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate=useNavigate()
  const dispatch=useDispatch()                                         //we will not update state here  we will do it in reducers ....not here like    isLoggedIn=!isLoggedIn  //loggeged in state true now
   const [inputs,setInputs]=useState({ email:"" ,password:""})

   const change=(e)=>{
    const {name,value}=e.target
    setInputs({...inputs, [name]:value})
  }
  const submit=async(e)=>{
    e.preventDefault()
    try { 
      const response = await axios.post('/api/v1/login',inputs)
          console.log(response.data.others._id);     //'...others' are users data without password ....we have defined in backend
          sessionStorage.setItem("id",response.data.others._id)
          dispatch(authActions.login())
            toast.success("user login successfully")
          navigate('/todo')                    //navigate to todo after login successfull
    } catch (error) {
         toast.error(error.response?.data?.message || "Login failed");
      
    }
    
  }

  return (
    <div className="signup overflow-hidden ">
      <div className="container mx-auto max-w-8xl ">
          <ToastContainer />
        <div className="row h-[80vh] w-[80vw]  flex flex-col justify-center items-center  gap-8  align-center   md:flex-row  ">
            <div className="col w-full  md:w-1/3  flex justify-center items-center">
           <HeadingComp first={"Log"} second={"In"}/>
          </div>
          
          <div className="col1 w-full  flex md:w-2/3 justify-center h-[400px]    items-center ">
            <div className="box  bg-white/10 mb-auto h-full    rounded-2xl  shadow-lg p-8  max-h-4xl flex flex-col justify-center  align-center gap-7 ">
                      
  <form className="box1" onSubmit={submit}>
    <input 
      type="email"
      name="email"
      placeholder="Enter your email"
      value={inputs.email}
      onChange={change}
      autoComplete="email"
      required
    />
    <input 
      type="password"
      name="password"
      placeholder="Enter password"
      value={inputs.password}
      onChange={change}
      autoComplete="new-password"
      required
    />
    <button type="submit" className="btn" >Log in</button>
    <h2 className='text-gray-800 cursor-pointer' onClick={()=>navigate('/signup')}>Don't have an Account? <span className='text-blue-500'>click here to SignUp</span></h2>
  </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Login





// 1️ What is sessionStorage?    "here used in submit func"
// sessionStorage is a built-in browser object that lets you store data temporarily in the browser for that session (until the browser tab is closed).
// It’s part of the Web Storage API, along with localStorage.
//  takes two argument.......... sessionStorsage.setItem("key","value")

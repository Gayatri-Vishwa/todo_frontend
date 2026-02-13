import React, { useState } from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "../../axios";
import {useNavigate }from 'react-router-dom'
import {  ToastContainer, toast } from "react-toastify";


function Signup() {
  const navigate=useNavigate()

  const [inputs,setInputs]=useState({username:"" , email:"" ,password:""})
  const change=(e)=>{
    const {name,value}=e.target
    setInputs({...inputs, [name]:value})
  }

const submit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("/api/v1/register", inputs);
    console.log("Response:", response.data);
     toast.success(response.data.message)                      //response.data.message= user registered      
   setInputs({ username: "", email: "", password: "" });
   navigate('/login')    // Navigate after successful signup
  } catch (err) {
    //  alert(err.response?.data?.message || "Something went wrong");   //err.response?.data?.message = user already exist
         toast.error(err.response?.data?.message);   
     setInputs({ username: "", email: "", password: "" });
    // console.error("Axios error:", err.response?.data || err.message);
  }
};



  return (
    <div className="signup overflow-hidden ">
      <div className="container mx-auto max-w-8xl ">
          <ToastContainer />
        <div className="row h-[80vh] w-[80vw]  flex flex-col-reverse justify-center items-center  gap-8  align-center   md:flex-row ">
          <div className="col1 w-full  flex md:w-2/3 justify-center  h-[470px]  items-center ">

            <div className="box  bg-white/10 mb-auto h-full  rounded-2xl  shadow-lg p-8  max-h-4xl flex flex-col justify-center  md:gap-30  align-center gap-7 ">
              
          
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
      type="text"
      name="username"
      placeholder="Enter username"
      value={inputs.username}
      onChange={change}
      autoComplete="username"
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
    <button type="submit" className="btn" >Sign Up</button>
    <h2 className='text-gray-800 cursor-pointer' onClick={()=>navigate('/login')}>Already have an Account? <span className="text-blue-500">click here to LogIn </span> </h2>
  </form>
</div>

       
          </div>
          <div className="col w-full  md:w-1/3  flex justify-center items-center">
           <HeadingComp first={"Sign"} second={"Up"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;



//=====  in <input autoComplete="new password " "> ======
// Browsers use this to:
// Suggest strong passwords.
// Auto-fill saved passwords correctly.
// Avoid filling the wrong field with an old password





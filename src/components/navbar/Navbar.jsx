
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authActions } from "../../store";


function Navbar() {
  const dispatch=useDispatch()
  const isLoggedIn= useSelector((state)=> state.isLoggedIn)
  console.log(isLoggedIn)
  const [isOpen, setIsOpen] = useState(false);

  const logout=()=>{
     sessionStorage.clear("id")             //clear id from seesionstorage so that it can not login by refresh after logout 
     dispatch(authActions.logOut())}
  

  return (
    <nav className="bg-white shadow-md max-w-[80vw]  mx-auto my-0 rounded-b-lg ">
      <div className="max-w-8xl mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-red-600">📝 To-Do List</h2>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

       
        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          
            <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          {!isLoggedIn && (<>            
          <li><Link to="/signup" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Sign up</Link></li>
          <li><Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700  transition">Log in</Link></li>
          
          </>) }

           {isLoggedIn && (<>
          <li><Link to="/login"
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700  transition">Log out</Link></li>
           </>)  }
          </ul>

          


      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium">
            <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/todo">Todo</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/signup" className="bg-red-600 text-white px-4 py-2 rounded">Sign up</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/login" className="bg-red-600 text-white px-4 py-2 rounded">log in</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/login" className="bg-red-600 text-white px-4 py-2 rounded">log out</Link></li>
         
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;









// import React from "react";
// import './navbar.css'
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar mx-50">
//       <h2 className="logo">📝 To-Do List</h2>
//       <ul className="nav-links">
//         <li><Link to="">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/todo">todo</Link></li>
//         <li className="btn"><Link to="/signup">Sign up</Link></li>
//         <li className="btn"><Link to="/login">Log in</Link></li>
//         <li className="btn"><Link to="/logout">Log out</Link></li>
//         {/* <li ><img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" /></li> */}
//         {/* <Logo /> */}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

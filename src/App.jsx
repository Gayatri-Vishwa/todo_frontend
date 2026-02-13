import About from "./components/about/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/signup/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Todo from "./components/Todo/Todo.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";

function App() {

  const dispatch=useDispatch()
  //when we are login and refresh page it logout by default so we have to avoid this by useEffect
useEffect(()=>{
  const id =sessionStorage.getItem("id")      //if during session id is present then isLoogegin true by dispatch.... not to be logout
  if(id){
    dispatch(authActions.login())
  }
},[])

  return (
    <div className="min-h-100vh ">
   
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
           <Footer />
      </Router>

   
    </div>
  );
}


export default App;

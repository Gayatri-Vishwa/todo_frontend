import React, { useEffect, useState } from "react"; //only signup users can store data in DB
import "./todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateTodo from "./UpdateTodo";
import axios from "axios";

function Todo() {
  // const [toUpdateArray,setToUpdateArray]=useState([])
  let id = sessionStorage.getItem("id");
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [todos, setTodos] = useState([]);
  const [showTextarea, setShowTextarea] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  // const openUpdateComp=setIsDisplay(true)
  // const closeUpdateComp=setIsDisplay(false)
  // ❌ Problem:
    const closeUpdateComp = () => setIsDisplay(false);
  const openUpdateComp = (task) =>{ 
      setTaskToUpdate(task);  // store task info
      setIsDisplay(true)};



  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };


  
const submit = async (e) => {
  e.preventDefault();
  try {
    if (inputs.title === "" || inputs.body === "") {
      toast.error("Title or Body should not be empty");
      return;
    }

    if (id) {
      const resp = await axios.post("/api/v2/addTask", {
        title: inputs.title,
        body: inputs.body,
        id: id._id || id,
      });
      console.log("Add Task Response:", resp.data);
      // ✅ Use backend response (which includes _id)
      setTodos((prev) => [...prev, resp.data.list]);
      setInputs({ title: "", body: "" });
      toast.success("Your task is added");
    }
    else{
      toast.error("please SignUp first")
    }
  } catch (err) {
    console.error("Error adding task:", err.response?.data || err.message);
    toast.error(err.response?.data?.message || "Server error while adding task");
  }
};


const del = async (taskId) => {
if(id){
    try {
   const resp= await axios.delete(`/api/v2/deleteTask/${id}/${taskId}`);
    setTodos(prev => prev.filter(t => t._id !== taskId));
    console.log("dlete task response: ",resp.data?.message)
    toast.success("Task deleted successfully");
  } catch (err) {
    toast.error(err.response?.data?.message || "Error deleting task");
  }
}
};




// getting all task for a user

useEffect(() => {
if(id){
    const fetchAllTask = async () => {
    const resp = await axios.get(`/api/v2/getTasks/${id}`);
    console.log("Fetched tasks:", resp.data);

    if (Array.isArray(resp.data)) { // <-- check if backend returned array  (sending....lists)
      setTodos(resp.data); // set state with array of tasks
    } else {
      setTodos([]); // no tasks, set empty array
      toast.info(resp.data.message); // show "No tasks found" message
    }
  };
  fetchAllTask();
}
}, [id]);



  return (
  <div className="todo min-h-screen flex flex-col px-4 sm:px-6 mt-2.50 ">
    
    {/* ADD TASK SECTION */}
    <div className="main-container flex flex-col flex-grow gap-6 sm:gap-10 justify-center items-center mt-6">
      <ToastContainer />

      <h1 className="text-3xl sm:text-4xl text-red-600 text-center font-bold">
        Add Tasks
      </h1>

      <form
        onSubmit={submit}
        className="w-full max-w-md sm:max-w-lg"
      >
        <div className="box flex flex-col gap-4 p-4 bg-white rounded-lg shadow-2xl shadow-gray-300">
          <input
            name="title"
            onChange={change}
            onClick={() => setShowTextarea(true)}
            value={inputs.title}
            type="text"
            placeholder="TITLE"
            className="inpt w-full p-2"
          />

          {showTextarea && (
            <textarea
              name="body"
              onChange={change}
              value={inputs.body}
              placeholder="BODY"
              rows="4"
              className="textArea w-full p-2"
            />
          )}
        </div>

        <div className="flex justify-end mt-3">
          <button className="btn px-4 py-2">Add</button>
        </div>
      </form>
    </div>

    {/* TODO LIST */}
    <div className="todo-body w-full max-w-6xl mx-auto mt-8 px-2">
      <div className="flex flex-wrap justify-center gap-4">

        {todos &&
          todos.map((item, index) => (
            <div
              key={item._id}
              className="w-full sm:w-[48%] lg:w-[31%]"
            >
              <TodoCards
                title={item.title}
                body={item.body}
                id={item._id}
                delId={del}
                display={() => openUpdateComp(item)}
                updateId={index}
              />
            </div>
          ))}
      </div>
    </div>

    {/* UPDATE MODAL */}
    {isDisplay && (
      <UpdateTodo
        closeUpdateComp={closeUpdateComp}
        userId={id}
        task={taskToUpdate}
        onTaskUpdated={(updatedTask) => {
          setTodos((prev) =>
            prev.map((t) =>
              t._id === updatedTask._id ? updatedTask : t
            )
          );
        }}
      />
    )}
  </div>
  


  );
}

export default Todo;

// splice() is a JavaScript array method used to add, remove, or replace elements in an array, and it changes (mutates) the original array.
// array.splice(start, deleteCount, item1, item2, ...)

// const openUpdateComp=setIsDisplay(true)




// id's
// POST    /addTask
// GET     /getTasks/:userId
// PUT     /updateTask/:taskId
// DELETE  /deleteTask/:userId/:taskId


// const closeUpdateComp=setIsDisplay(false)
// ❌ Problem:
// setIsDisplay(true) immediately executes when the component renders. It does not define a function.
// Same with setIsDisplay(false) — it runs immediately, causing React state updates during render → infinite loop / error boundary issues.
// ✅ Solution:
// You need to wrap these in functions so they only run when called:
// const openUpdateComp = () => setIsDisplay(true);
// const closeUpdateComp = () => setIsDisplay(false);


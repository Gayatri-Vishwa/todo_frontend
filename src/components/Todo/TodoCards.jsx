// import React, { useState } from "react";
import "./todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

function TodoCards({ title, body, id, delId, display ,toBeUpdate}) {
  //will send  this 'dellId' & 'display' to parents //delid me id dalkr pass krege for delete //rest of all are getting from parent

  return (
    <div className="flex flex-wrap w-full ">
      <div className="todo-card flex flex-col gap-4 p-4 bg-white rounded-lg shadow-2xl shadow-gray-200">
        <h4 className="text-xl  font-semibold text-gray-800 "
        onClick={()=>toBeUpdate(id)}>
          Title : {title}
        </h4>
        <p className=" ">Body: {body.slice(0, 77)}... </p>
        <br />
        <div className=" flex justify-around items-center">
          <div className="icon head flex items-center px-2 py-1" id="update">
            {" "}
            <GrDocumentUpdate
              className="icon update"
              onClick={() => display()}  //No need to pass true or extra arguments.
            />{" "}
            Update
          </div>
          <div className="head flex items-center text-red-600 icon px-2 py-1">
            {" "}
            <MdDelete className="icon del" onClick={() => delId(id)} /> Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCards;

// Always wrap the function in ()=> if you need to pass parameters from child to parent:

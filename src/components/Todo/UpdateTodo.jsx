import { useState, useEffect } from "react";
import "./todo.css";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

function UpdateTodo({
  closeUpdateComp,
  userId,
  task,
  onTaskUpdated,
  toUpdatedData,
}) {

  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (task) {
      setInputs({
        title: task.title,
        body: task.body,
      });
    }
  }, [task]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (userId) {
      try {
        const resp = await axios.put(`/api/v2/updateTask/${task._id}`, {
          title: inputs.title,
          body: inputs.body,
          id: userId,
        });

        toast.success("Task updated successfully ✅");
        console.log("Update response:", resp.data);
        console.log(toUpdatedData, "to updated dataaaaaaaaaaaaaaaaaaaaaa");

        // 👇 Call the callback to update parent state
        if (onTaskUpdated) {
          // onTaskUpdated(resp.data.updatedTask);
          onTaskUpdated({
            ...task,
            title: inputs.title,
            body: inputs.body,
          });
        }

        closeUpdateComp(); // close popup
      } catch (err) {
        console.error("Error updating task:", err);
        toast.error("Failed to update task");
      }
    }
  };

 
  return (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-3 sm:px-6">
    
    {/* UPDATE BOX */}
    <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-2xl p-5 sm:p-6">

      {/* CLOSE BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={closeUpdateComp}
          className="text-red-600 text-2xl hover:scale-110 transition"
        >
          <FaWindowClose />
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="flex flex-col justify-center items-center max-w-[340px] mx-auto gap-6 mt-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-red-600">
          Update Your Task
        </h2>

        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={change}
          placeholder="Update title"
          className="max-w-[290px] mx-auto  p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
        />

        <textarea
          name="body"
          value={inputs.body}
          onChange={change}
          placeholder="Update body"
          rows="4"
          className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-red-400 resize-none"
        />

        <button
          type="submit"
          className="w-full sm:w-auto self-center px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  </div>
);

}

export default UpdateTodo;







import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    // Access user data and function to update it from AuthContext
    const [userData, setUserData] = useContext(AuthContext);

    // State variables for task details
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [newTask, setNewTask] = useState({});

    // Handler to submit the form and create a new task
    const submitHandler = (e) => {
        e.preventDefault();

        // Create a new task object
        const newTask = {
            active: false,
            newTask: true,
            failed: false,
            completed: false,
            taskTitle,
            taskDescription,
            taskDate,
            category,

        }; 
        setNewTask(newTask);
        const data = userData


        data.employees.forEach((elem) => {
            if (elem.firstname === assignTo) {
                elem.tasks.push(newTask);
                elem.taskCount.active += 1
                elem.taskCount.newTask += 1
            }
        });
        setUserData(data)
        localStorage.setItem('employees', JSON.stringify(data));
        console.log("From Create Task:",data);
        
        // Clear the form fields after submission
        setTaskTitle("");
        setTaskDate("");
        setAssignTo("");
        setCategory(""); 
        setTaskDescription("");
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded-lg shadow-lg">
            <form
                onSubmit={submitHandler}
                className="flex flex-wrap w-full items-start justify-between gap-4"
            >
                {/* Left Section */}
                <div className="w-full md:w-1/2">
                    {/* Task Title */}
                    <div>
                        <label
                            htmlFor="taskTitle"
                            className="text-sm text-gray-300 mb-1 block"
                        >
                            Task Title
                        </label>
                        <input
                            id="taskTitle"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] text-white border-[1px] border-gray-600 mb-4 focus:ring-2 focus:ring-emerald-500"
                            type="text"
                            placeholder="Enter task title"
                        />
                    </div>
                    {/* Task Date */}
                    <div>
                        <label
                            htmlFor="taskDate"
                            className="text-sm text-gray-300 mb-1 block"
                        >
                            Task Date
                        </label>
                        <input
                            id="taskDate"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] text-white border-[1px] border-gray-600 mb-4 focus:ring-2 focus:ring-emerald-500"
                            type="date"
                        />
                    </div>
                    {/* Assign To */}
                    <div>
                        <label
                            htmlFor="assignTo"
                            className="text-sm text-gray-300 mb-1 block"
                        >
                            Assign To
                        </label>
                        <input
                            id="assignTo"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] text-white border-[1px] border-gray-600 mb-4 focus:ring-2 focus:ring-emerald-500"
                            type="text"
                            placeholder="Enter employee name"
                        />
                    </div>
                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="text-sm text-gray-300 mb-1 block"
                        >
                            Category
                        </label>
                        <input
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] text-white border-[1px] border-gray-600 mb-4 focus:ring-2 focus:ring-emerald-500"
                            type="text"
                            placeholder="Enter category (e.g., Design, Dev)"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/5 flex flex-col items-start">
                    {/* Task Description */}
                    <label
                        htmlFor="description"
                        className="text-sm text-gray-300 mb-1 block"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-44 text-sm py-3 px-4 rounded-lg outline-none bg-[#2a2a2a] text-white border-[1px] border-gray-600 focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter task details"
                    ></textarea>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-emerald-500 py-3 px-5 rounded-lg text-white text-sm mt-4 w-full hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;

import React, { useState, useEffect } from "react";

const TaskForm = ({ onTaskSaved, taskToEdit, onClose }) => {
  const [task, setTask] = useState({
    assignedTo: "",
    status: "",
    dueDate: "",
    priority: "",
    comments: "",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({
        assignedTo: "",
        status: "",
        dueDate: "",
        priority: "",
        comments: "",
      });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSaved(task);
    setTask({
      assignedTo: "",
      status: "",
      dueDate: "",
      priority: "",
      comments: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {taskToEdit ? "Edit Task" : "Create Task"}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-600 text-4xl hover:text-gray-900"
        >
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Assigned To
          </label>
          <input
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select priority
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Comments</label>
          <textarea
            name="comments"
            value={task.comments}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-all"
        >
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

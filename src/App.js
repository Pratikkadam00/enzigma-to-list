import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import { Toaster, toast } from "sonner";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const validTasks = storedTasks.filter((task) => {
      const isExpired = Date.now() - task.timestamp > ONE_DAY_MS;
      return !isExpired;
    });
    setTasks(validTasks);
    localStorage.setItem("tasks", JSON.stringify(validTasks));
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleTaskSaved = (newTask) => {
    if (taskToEdit) {
      setTasks(
        tasks.map((task) =>
          task.id === taskToEdit.id
            ? { ...newTask, id: task.id, timestamp: task.timestamp }
            : task
        )
      );
      toast.info("Task updated successfully!");
    } else {
      const newTaskWithTimestamp = {
        ...newTask,
        id: tasks.length + 1,
        timestamp: Date.now(),
      };
      setTasks([...tasks, newTaskWithTimestamp]);
      toast.success("Task added successfully!");
    }
    setShowForm(false);
    setTaskToEdit(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleAddTask = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    toast.warning("Task deleted successfully!");
  };


 const handleCloseForm = () => {
   setShowForm(false);
 };

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks
    .filter((task) =>
      Object.values(task).some((val) =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .slice(indexOfFirstTask, indexOfLastTask);

  return (
    <div className="h-screen w-full p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Toaster richColors />
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 mb-4 rounded-md shadow hover:bg-blue-600 transition-all"
      >
        Add New Task
      </button>
      {showForm && (
        <TaskForm
          onTaskSaved={handleTaskSaved}
          taskToEdit={taskToEdit}
          onClose={handleCloseForm}
        />
      )}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskList
        tasks={currentTasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      <Pagination
        currentPage={currentPage}
        tasksPerPage={tasksPerPage}
        totalTasks={tasks.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;

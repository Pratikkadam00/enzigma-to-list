import React from "react";

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Assigned To</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Comments</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No tasks available.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td className="border px-4 py-2">{task.assignedTo}</td>
                <td className="border px-4 py-2">{task.status}</td>
                <td className="border px-4 py-2">{task.dueDate}</td>
                <td className="border px-4 py-2">{task.priority}</td>
                <td className="border px-4 py-2">{task.comments}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => onEditTask(task)}
                    className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

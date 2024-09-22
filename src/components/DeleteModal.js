import React from "react";

const DeleteModal = ({ taskName, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden w-96">
        <div className="bg-red-600 p-4">
          <h2 className="text-white text-xl">Delete</h2>
        </div>
        <div className="p-4">
          <p>
            Do you want to delete task <strong>{taskName}</strong>?
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={onCancel}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2"
            >
              No
            </button>
            <button
              onClick={onConfirm}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

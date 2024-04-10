import React, { useState } from 'react';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

const ListTask = ({ task, index, removeTask, editTask }) => {
 // State to track if the task is in edit mode
 const [isEditing, setIsEditing] = useState(false);
 // State to hold the edited task title
 const [editedTask, setEditedTask] = useState(task.title);

 // Function to toggle edit mode
 const toggleEditMode = () => {
    setIsEditing(!isEditing);
 };

 // Function to handle saving the edited task title
 const handleSave = () => {
    editTask(index, editedTask);
    setIsEditing(false);
 };

 return (
    <>
  <table className='list-Task w-full bg-white border border-gray-300'>
 <tbody>
    <tr className='flex flex-row gap-4 justify-between w-full '>
      <td className='  px-4 py-2'>
        {isEditing ? (
          <input
            type="text"
            className='overflow-x-hidden'
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          task.title
        )}
      </td>
      <td className='border  px-4 py-2'>
      <button onClick={() => removeTask(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded">
                <FaTrash /> {/* Delete Icon */}
              </button>
      </td>
      <td className='border  px-4 py-2'>
      <button onClick={toggleEditMode} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded">
                <FaEdit /> {/* Edit Icon */}
              </button>
      </td>
      {isEditing && (
        <td className='border  px-4 py-2'>
          <button onClick={handleSave} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </td>
      )}
    </tr>
 </tbody>
</table>

   </>
   
 );
};

export default ListTask;

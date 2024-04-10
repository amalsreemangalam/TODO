import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

const AddTask = ({AddTask}) => {

    const [value,setValue]=useState("");


    const additem=()=>{
       AddTask(value)
       setValue('')
    }
  return <>
    <div className='input-container'>
        <input
         type='text'
         className='input' placeholder='Add a new Task'
         value={value}
         
         onChange={(e)=>{
            setValue(e.target.value)}}


            
         
         />
<button onClick={additem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-2 rounded"
disabled={!value}>
 <FaPlus />
</button>

    </div>
  </>
}

export default AddTask
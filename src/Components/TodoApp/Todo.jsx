import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'


const Todo = () => {
  const [Tasks,setTasks]=useState([])
useEffect(()=>{
  document.title=`you have ${Tasks.length}pending Tasks`
})
  


  const addTask=(title)=>{

const newTask=[...Tasks,{title}]
setTasks(newTask);


  }



const removeTask=(index)=>{
const newTask=[...Tasks]
newTask.splice(index,1);
setTasks(newTask)
}


const editTask = (index, newTitle) => {
    const newTasks = [...Tasks];
    newTasks[index].title = newTitle;
    setTasks(newTasks);
   };
   


  
  return <>
<div className='flex flex-col items-center bg-slate-500 justify-center min-h-screen'>
 <div className='w-[700px] h-[300px] flex flex-col items-center justify-center bg-yellow-800 opacity-80 shadow-lg rounded-lg p-6'>
    <div className='text-center text-2xl mb-4 font-bold'>Todo App</div>
    <div className='mb-4'>
      <AddTask AddTask={addTask} />
    </div>
    <div className='task w-[650px] '>
      {Tasks.map((task, index) => (
        <ListTask task={task} removeTask={removeTask} editTask={editTask} index={index} key={index} />
      ))}
    </div>
 </div>
</div>


  </>
}

export default Todo
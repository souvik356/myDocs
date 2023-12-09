import React, { useRef, useState } from 'react'
import { Card } from './Card'
import { CiCirclePlus } from "react-icons/ci";


export const Foreground = () => {
 
    const ref = useRef(null);

    const [inputValue,setInputValue] = useState('');
    const [task,setTask]= useState([]);

    const handleOnchange = (e)=>{setInputValue(e.target.value)};

    const addCard = ()=>{
        if(!inputValue){
            alert("Add task");
        }
        else{
            setTask([... task,inputValue]);
            setInputValue('');
        }
    }

    const deleteTask = (index) => {
       const updatedTask = [... task];
       updatedTask.splice(index,1);
       setTask(updatedTask);
    }
    

  return (
    <>
      <div ref={ref} className='p-10 fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
        <div className=' flex items-center justify-center gap-5 absolute right-[10%] top-[8%]'>
            <input className=' p-1 rounded-xl' type='text' placeholder='Enter your Docs' value={inputValue} onChange={handleOnchange}/>
            <button className='bg-white p-1 rounded-lg' onClick={addCard}>Add</button>
        </div>
         {
            task.map((card,index)=>(
               <Card key={index} content={card} onDelete={()=>deleteTask(index)} reference={ref}/>
            ))
         }
         
      </div>
    </>
  )
}

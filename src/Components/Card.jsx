import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoSmiley } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import { motion } from "framer-motion"
import { FaFire } from "react-icons/fa";


export const Card = ({content,onDelete,reference}) => {


    const [change,setChange] = useState('All Task are important');
    const handleDelete = () => {
      console.log("Deleting card...");
      onDelete();
    }

    const important = () =>{
        console.log('Priority Task');
       setChange('Priroty Task...!!!');
    }

  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.2} className='relative p-10 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white overflow-hidden'>
      <div className= 'flex items-center justify-between text-lg'>
      <button onClick={important}><FaRegFileAlt /></button>
      <button onClick={handleDelete}><MdDelete /></button>
      </div>
        <p className='mt-5'>{content}</p>
        <div className='footer absolute bottom-0 bg-green-600 w-full p-6 left-0 flex items-center gap-2 text-white'> {change} <GoSmiley /></div>
    </motion.div>
    </>
  )
}

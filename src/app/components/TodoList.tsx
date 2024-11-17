"use client"
import { RiDeleteBack2Fill } from "react-icons/ri";

 import { useState } from "react";

 import React from 'react'

function TodoList() {

    const [ todos , setTodo ] = useState<string[]>([]);
    const [input , setInput] = useState<string>("");
    
    const handleAddTodo= () => {
        setTodo([...todos, input])
        setInput("")
    }

    const handleDeleteTodo = (index:number) => {
        setTodo(todos.filter((todo, i) => i!== index))
    }

 
  return (

  
    
        <div className='transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] bg-[#D7B26D] w-[350px] md:w-[700px] h-auto border-2 border-green-400 rounded-lg flex flex-col items-center'>

            <input className=' md:w-[80%] h-[3rem] transition-all duration-1000 ease-in-out hover:shadow-[0_0_5px_6px_rgb(153,50,204)] hover:scale-105 rounded-md mt-6 my-3 ml-5 w-[300px] px-4 py-4 bg-slate-200 border-2 border-teal-700 text-xl text-black' type="text" placeholder='Add ToDo' value={input} onChange={(e) => setInput(e.target.value)}/>

            <button onClick={handleAddTodo} className={`w-[40%] md:w-[40%] h-12 border-2 bg-teal-400 rounded-md  md:text-2xl flex justify-center items-center p-3 ml-6 hover:scale-105 transition-all duration-1000 ease-in-out hover:shadow-[0_0_5px_6px_rgb(153,50,204)] text-xl my-3`}>
            Add ToDo</button>
              
              <ul>
           {
               todos.map((todo,index) => (
                <li key={index} className="bg-[#F6F7C4] text-center text-black text-xl rounded-md my-4 w-[300px] md:w-[550px] border-2  px-2 py-2 border-blue-600 flex justify-between items-center transition-all duration-1000 ease-in-out hover:shadow-[0_0_5px_6px_rgb(153,50,204)] ">
                 <div className="inline-block ">
                 {todo}
                 </div> 
                  <span>
                    <button onClick={()=>handleDeleteTodo(index)}>
                      <RiDeleteBack2Fill className="h-6 w-10 text-red-500" />
                    </button>
                  </span>
                </li>
                
               )
            
              )
           }
  </ul>

             
        </div>
 
   )
 }

 export default TodoList


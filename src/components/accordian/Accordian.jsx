import { useState } from "react"
import {Data} from "./Data.js"

export default function Accordian(){
   
   const [openIdx,setOpenIdx] =useState(null);
   
  
   const handleClick = (id) => {
      setOpenIdx(openIdx==id?"null" : id);
   }
   
   
  return(
     <div className="flex flex-col items-center">
      <h1 className="p-5 bg-red-500 m-2 w-[500px] text-center font-bold text-2xl cursor-pointer" >Accordian</h1>
        
        {
           Data.map((item,index) =>{
           return( 
              <div className="p-5 bg-green-500 m-2 w-[500px]  cursor-pointer " onClick={()=>handleClick(index)} key={index}>
              <div className="flex justify-between text-xl font-semibold">
                 <h1>{item.title}</h1>
                 <h1>{openIdx==index?"-":"+"}</h1>
              </div>
          
              {openIdx==index && <div className="mt-2">{item.content}</div>}
           </div>
           )
           }
           )
        }
     </div>
  )
}
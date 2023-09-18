"use client";
import { CustombtnProps } from "@/types";

const Custombtn = ({title,containerStyles,handleClick} : CustombtnProps) => {
  return (
    <div>
        <button
         type='button' 
         disabled={false} 
         className={`custom-btn ${containerStyles}`} 
         onClick={handleClick}
         >
            <span>{title}</span>
        </button>
    </div>
  )
}

export default Custombtn
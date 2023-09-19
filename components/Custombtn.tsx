"use client";
import { CustombtnProps } from "@/types";

const Custombtn = ({title,containerStyles,handleClick,btnType} : CustombtnProps) => {
  return (
    <div>
        <button
         disabled={false} 
         type= {btnType || "button"}
         className={`custom-btn ${containerStyles}`} 
         onClick={handleClick}
         >
            <span>{title}</span>
        </button>
    </div>
  )
}

export default Custombtn
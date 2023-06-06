import Image from "next/image";
import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";


function Header() {
  return (
    <header> 
      
      {/*hidden div to background colour */}

       <div 
       className="absolute
        top-0
         left-0 w-full
          h-full
           bg-gradient-to-br
           from-pink-500
            to-[#0055D1]
            rounded-md 
            filter 
            blur-3xl
         opacity-50 
         -z-50"
       
       
       />

      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
      <Image src="https://bookface-images.s3.amazonaws.com/logos/11d69dc30f768592b1462178d0f7fcc9ad0f3859.png" alt="volvo logo"
      width={300}
      height={100}
      className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
      />
<div className="flex items-center space-x-5 flex-1 justify-end w-full">
      {/* SEARCH BOX*/}
      <form  className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input type="text" placeholder="Search" className="flex-1 outline-none p-2" />
        <button type="submit" hidden> Search</button>
      </form>

    
</div>   



  
</div>



    </header>
  )
  
}

export default Header
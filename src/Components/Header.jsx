import { useState } from "react";
import ShowCase from "./ShowCase";
import SideNave from "../page/SideNave";
function Header(){


    const [admin, setAdmin]=useState(false)


    const handleAdmin = (event)=>{
        event.preventDefault()
        setAdmin(true)
    }

   
    
    return <div> 
     <div style={{display: admin == true ? "none" : "" }} className="bg-[#023047] items-center relative text-white px-20 py-5 flex justify-between">
        <h1 className="text-3xl font-bold ">Complaints</h1>
        <ul className="flex gap-10 text-3xl">
            <li>Home</li> 
            <li>About</li>
        </ul>
        
        
        <button onClick={handleAdmin}   className="bg-[#ffb703] rounded  text-black text-2xl py-2 px-10">  Addmin</button>
        
    
    </div>

    {
        admin == true ? "" : <ShowCase/>
    }
    
    {
       admin == true ? <SideNave/> : ""
    }

    
    </div>
}

export default Header;
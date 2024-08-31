import {  useState } from "react"
import axios from "axios";
function ShowCase(){
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("")
    const [discriptio, setDiscription] = useState("")

    const handleOpen=()=>{
        setShow(true);
    }

    const handleClose=()=>{
        setShow(false);
    }


    const handleSend = (event)=>{
        event.preventDefault()
        axios.post("http://localhost:1000/create",{

            "title": title,
            "description": discriptio
            
        }).then(()=>{
            alert("Data has been send successfully ")
        }).catch((error)=>{
            console.log(error)
        })
    }
    

    


    return <div>
        <div style={{display: show == false ? "block" : ""}} className="bg-[#a2d2ff] relative h-[505px] text-center py-[60px] ">

        <h1 className="text-6xl">Make your complaints way easier ever</h1>
        <p className="pt-10">We are commited to solve your complaints. Make any  complaints you could</p>
       
        <button onClick={handleOpen} className="bg-[#ffb703] text-3xl px-5 py-3 mt-10 rounded-3xl ">Make Complaint</button>
    
        
    </div>





    <div className="flex   justify-center">
    
    
     <div  style={{display: show == true ? "block" : ""}} className="bg-white w-[300px] p-5 hidden absolute top-40 h-[380px]   rounded">
        <form>
            <h1>Send us your complaints please</h1>
            <input value={title}  onChange={(event)=> setTitle(event.target.value)} className="border-2 border-black w-[250px] mt-3" type="text" placeholder="Title" />
            <textarea value={discriptio} onChange={(event)=> setDiscription(event.target.value)} className="h-[220px] w-[250px] border-2 mt-2 border-black" rows={8} placeholder="Description"/>
            <button onClick={handleClose} className="bg-[#ffb703] px-5 py-2 m-2 rounded ">Close</button>
            <button onClick={handleSend} className="bg-[#ffb703] px-5 py-2 m-2 rounded ">Send</button>
        </form>

    </div>
    </div>
    
    </div> 
}
export default ShowCase
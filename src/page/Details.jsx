import axios from "axios"
import { useEffect,useState } from "react"
function Details(){

    const [getData, setGetData] = useState([])



    

    const getDataResult = ()=>{
        axios.get("http://localhost:1000/result").then((response)=>{
            setGetData(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getDataResult()
    })
    
     const deleteResult=(id)=>{
            axios.delete(`http://localhost:1000/delete/${id}`).then(()=>{
                alert("Result has been deleted succesfully")
            }).catch((error)=>{
                console.log(error)
            })
    }
    



    return <div className="ml-[25%] py-10">
        <button onClick={()=> deleteResult(data_id)} className="bg-[#a2d2ff] px-10 py-2 rounded ">Delete</button>

        {
            getData.map((data)=>{
                return <div> <h1>{data.title} </h1>
                <p>{data.description} </p>
                </div>
            })
        }
        
    </div>
}
export default Details
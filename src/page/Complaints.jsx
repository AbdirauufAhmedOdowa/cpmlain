import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Complaints() {

    const [data, setData] = useState([])


    const getResult = () => {

        axios.get("http://localhost:1000/result").then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getResult()
    })

    return <div className="ml-[25%] py-10 px-10">

        <table className="w-full text-center ">
            <tr>
                <th className="border-2 border-gray-500">S.N</th>
                <th className="border-2 border-gray-500">Title</th>
                <th className="border-2 border-gray-500">Description</th>
                <th className="border-2 border-gray-500">Issu Data</th>
                <th className="border-2 border-gray-500">Action</th>
            </tr>
            {
                data.map((data) => {
                    return <tr>

                        <td className="border-2 border-gray-500 font-bold">  </td>
                        <td className="border-2 border-gray-500">{data.title} </td>
                        <td className="border-2 border-gray-500"> {data.description} </td>
                        <td className="border-2 border-gray-500 font-bold">  </td>
                        <td className="border-2 border-gray-500">
                            <Link to={`/details/data._id`}>
                                <button className="bg-[#a2d2ff] px-3 rounded"> Details</button>
                            </Link>

                        </td>
                    </tr>
                })
            }

        </table>

    </div>
}
export default Complaints
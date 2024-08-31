import { Link } from "react-router-dom"
function SideNave(){
    return <div  className="bg-[#53a2ca] fixed   h-screen w-[20%]  ">
        <ul className="pt-20 pl-10">
            <Link to="/dash">
            <li className="text-2xl font-medium p-3"><i class="fa-brands fa-microsoft"></i> Dashboard</li>
            </Link>

            <Link to="/complaints">
            <li className="text-2xl font-medium p-3"><i class="fa-solid fa-book"></i> Complaints</li>
            </Link>
            <li className="text-2xl font-medium p-3"><i class="fa-solid fa-layer-group"></i> Logout</li>
        </ul>


    </div>
}

export default SideNave
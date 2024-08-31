import {Route, Routes} from "react-router-dom"
import Dashboard from "./page/Dashboard"
import Compolaints from "./page/Complaints"
import Details from "./page/Details"
function App(){
    return <div>
        <Routes>
            <Route path="/dash" element={<Dashboard/>}/>
            <Route path="/complaints" element={<Compolaints/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    </div>
}
export default App  
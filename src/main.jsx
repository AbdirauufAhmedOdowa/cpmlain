import { createRoot } from 'react-dom/client'
import "./style.css"
import Header from './Components/Header'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(

    <BrowserRouter>

  <Header/>
  <App/>
</BrowserRouter>
    


 
)

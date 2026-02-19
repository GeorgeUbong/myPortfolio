import Navbar from './components/Navbar'
import Hero from './Pages/Hero';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from './Pages/404';
function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Hero />} />
     <Route path="*" element={<Error />} />  
      
    </Routes>
    </BrowserRouter>
      
      

    </>
  )
}

export default App

import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import { useLocation ,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./Components/Footer"
import AllPages from "./pages/AllPages"
import RoomDetails from "./pages/RoomDetails"
import MyBookings from "./Components/MyBookings"


function App() {
 
  const isOwner=useLocation().pathname.includes("owner")
  return (
    <div>
     {!isOwner && <Navbar/>}
      <div className="min-h-[70vh]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<AllPages/>}/>
        <Route path="/rooms/:id" element={<RoomDetails/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default App

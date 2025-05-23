import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import { useLocation ,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./Components/Footer"
import AllPages from "./pages/AllPages"
import RoomDetails from "./pages/RoomDetails"
import MyBookings from "./Components/MyBookings"
import HotelReg from "./Components/HotelReg"
import Layout from "./pages/hotelOwner/layout"
import Dashboard from "./pages/hotelOwner/Dashboard"
import AddRoom from "./pages/hotelOwner/AddRoom"
import ListRoom from "./pages/hotelOwner/ListRoom"



function App() {
 
  const isOwner=useLocation().pathname.includes("owner")
  return (
    <div>
     {!isOwner && <Navbar/>}
     { false && <HotelReg/>}
      <div className="min-h-[70vh]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms" element={<AllPages/>}/>
        <Route path="/rooms/:id" element={<RoomDetails/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
        <Route path="/owner" element={<Layout/>}>
           <Route index element={<Dashboard/>}/>
           <Route path='add-room' element={<AddRoom/>}/>
           <Route path='list-room' element={<ListRoom/>}/>
        </Route>
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default App

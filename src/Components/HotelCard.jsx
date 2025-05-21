import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard=({room,index})=>{
  return(
    <Link to={"/rooms/"+room._id} key={room._id} className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]" >

        <img src={room.images[0]} alt=""  />

       { index % 2===0 && <p className="absolute top-3 left-3 bg-white text-gray-700 rounded-full font-medium px-3.5 py-1">BestSeller</p>}

       <div className="p-4 pt-5">
        <div className="flex justify-between items-center">
            <p className="text-xl font-medium text-gray-700 font-Playfair ">{room.hotel.name}</p>
            <div className="flex item-center gap-1">
               <img src={assets.starIconFilled} alt="" />
               4.9
            </div>  
        </div>
        <div className="flex">
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.city}</span>
        </div>
        <div className="flex justify-between">
            <p ><span className="text-xl text-gray-700">${room.pricePerNight}</span>/night</p>
            <button className=" px-4 py-2 rounded text-sm font-medium border border-gray-300 hover:bg-gray-100 hover: transition-all hover:cursor-pointer">Book Now</button>
        </div>
        
       </div>
    </Link>
  )
}

export default HotelCard;
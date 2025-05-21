
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination=()=>{
    const navigate=useNavigate();
    return(
    <div className="flex flex-col items-center px-6 md:px-16  lg:px-24 py-20  bg-slate-50">
        <Title title="Featured Destination" subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences" />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.map((room,index)=>(
          <HotelCard key={room._id} room={room} index={index}/>
        ))}
        </div>

        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 my-16 text-sm font-medium  rounded hover:bg-gray-200 hover:text-gray-500 transition all cursor-pointer" onClick={()=>{
            navigate('/rooms');
            scrollTo(0,0)

        }} >
            View All Destinations
        </button>
    </div>
    )
}

export default FeaturedDestination;
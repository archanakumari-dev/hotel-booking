import { useNavigate } from "react-router-dom"
import { assets, facilityIcons, roomsDummyData } from "../assets/assets"
import StarRating from "../Components/StarRating";
import { useState } from "react";

const CheckBox=({label,selected=false, onChange=()=>{}})=>{
    return(
       <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm " >
          <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked,label)}/>
          <span className="font-light select-none">{label}</span>
       </label> 
    )
}

const RadioButton=({label ,selected=false,onChange=()=>{}})=>{
    return(
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(e.target.checked,label)}/>
            <span className="font-light select-none">{label}</span>
        </label>
    )
}


const AllPages=()=>{
    
    const navigate=useNavigate();
    const [openFilter,setOpenFilter]=useState(false);
    const roomTypes=[
        "Single Bed","Double Bed","Lusury Room","Family Suite"
    ];
    const priceRanges=[
        "0 to 500","500 to 1000","1000 to 2000","2000 to 3000"
    ];
    const sortOptions=[
        "Price Low to High","Price High to Low","Newest First"
    ];


    return(
        
        <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse lg:flex-row items-start justify-between">
            <div>
               <div className="flex flex-col items-start text-left">
                <h1 className="font-Playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
               </div>
               

               {roomsDummyData.map((room,index)=>(
                <div key={room._id} className="flex flex-col md:flex-row  items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0">
                    <img src={room.images[0]} alt="hotel-img" title="Biew Room Details" className="max-h-65 md:w-1/2 rounded-xl shadow-lg cursor-pointer object-cover" onClick={()=>{
                        navigate(`/rooms/${room._id}`);
                        scrollTo(0,0);
                    }}/>
                    <div>
                        <p className="text-gray-500">{room.hotel.city}</p>
                        <p onClick={()=>{
                        navigate(`/rooms/${room._id}`);
                        scrollTo(0,0);  }}  className="font-Playfair text-3xl font-medium text-gray-800 cursor-pointer">
                            {room.hotel.name}
                        </p>
                        <div className="flex items-center">
                            <StarRating/>
                            <p className="ml-2">200+ reviews</p>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                            <img src={assets.locationIcon} alt="" className="w-3.5" />
                            <p>{room.hotel.address}</p>
                        </div>
                        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                            {room.amenities.map((item)=>(
                             <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100/70">
                            <img src={facilityIcons[item]} className="w-5 h-5"/>
                            <p className="text-sm"> {item}</p>
                            </div>
                        ))}
                        </div>
                        <p className="text-xl font-medium text-black/80">${room.pricePerNight}/night</p>
                    </div>

                </div>
               ))}
            </div>
             {/* filters */}



            <div className="w-80 bg-white border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
            <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
                <p className="text-base font-medium text-gray-800">FILTERS</p>
                <div className="text-sm cursor-pointer">
                    <span className="lg:hidden" onClick={()=> setOpenFilter(val=>!val)
                    }>
                        {openFilter?"Hide":"Show"}</span>
                    <span className="hidden lg:block">
                        Clear
                    </span>
                </div>
            </div>
            <div className={`${openFilter?"h-auto":"h-0 lg:h-auto" } overflow-hidden transtion-all duration-700`}>
                <div className="px-5 pt-5">
                    <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
                  {roomTypes.map((room,index)=>(
                     <CheckBox key={index} label={room} />
                  ))}
                </div>
                <div className="px-5 pt-5">
                    <p className="font-medium text-gray-800 pb-2">Price Range</p>
                  {priceRanges.map((room,index)=>(
                     <CheckBox key={index} label={`$  ${room}`} />
                  ))}
                </div>
                <div className="px-5 pt-5 pb-7">
                    <p className="font-medium text-gray-800 pb-2">Sort By</p>
                  {sortOptions.map((room,index)=>(
                     <RadioButton key={index} label={room} />
                  ))}
                </div>
                
               
                 
            </div>
            </div>
        </div>
    )
}
export default AllPages
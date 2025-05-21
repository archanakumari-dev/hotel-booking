import React from "react";
import { assets } from "../assets/assets";
import "../index.css"

const Hero=()=>{
    const cities = [
        "India",
        "America",
        "Dubai",
        "Singapore",
        "New York",
        "London",
    ];
    return (
       <div className={`overflow-x-hidden font-Playfair text-white flex flex-col justify-center  font-Playfair items-start  px-4 md:px-16 lg:px-24 xl:px-32 w-full h-screen bg-[url("/src/assets/heroImage.png")]  `}>

        <p className="rounded-full   bg-blue-400 px-3.5 py-1  mt-20"> The Ultimate Hotel Experience</p> 

        <h1 className=" text-2xl md:text-5xl font-bold md:font-extrabold  max-w-3xl mt-4 font-Playfair ">Discover Your Perfect Gateway Destination</h1>

        <p className=" text-sm md:text-base mt-2 max-w-130">Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>

        <form className=" bg-white mt-8 rounded-3xl text-gray-500  gap-4 flex flex-col md:flex-row md:flex-wrap items-start max-md:mx-auto p-5">
            <div>
                <div className="flex  items-center gap-2">
                   <img src={assets.calenderIcon} alt="" className="h-4 " />
            
                   <label htmlFor="destination" >Destination</label>
                </div>
            <input type="text" list="destinations" id="destination"
            className="rounded border border-gray-200  bg-gray-100   px-3 py-1.5  outline-none required " name="destination" placeholder="Type Here" />

             <datalist id='destinations'>
                {cities.map((city,index)=>(
                    <option value={city} key={index}/>
                ))}
             </datalist>
            </div>

            <div>
               <div className="flex  items-center gap-2">
                   <img src={assets.calenderIcon} alt="" className="h-4 " />
            
                   <label htmlFor="checkIn" >Check In</label>
                </div> 
                <input type="date" name="checkIn" className="rounded border border-gray-200  px-3 py-1.5 outline-none"  />
            </div>

            <div>
               <div className="flex  items-center gap-2">
                   <img src={assets.calenderIcon} alt="" className="h-4 " />
            
                   <label htmlFor="checkOut" >Check Out</label>
                </div> 
                <input type="date" name="checkOut" className="rounded border border-gray-200  px-3 py-1.5 outline-none  "  />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="guestCount">Guests</label>
                <input name="guestCount" placeholder="0" type="number" min={1} max={5} className="rounded border border-gray-200  bg-gray-100 px-3 py-1 outline-none " /> 
            </div>

            <div className=" w-full md:w-auto flex justify-start ">
                <button className=" w-full flex  bg-gray-800 justify-center items-center  h-10 px-6 rounded-full text-white text-sm hover:cursor-pointer">
                <img src={assets.searchIcon} alt="" className="h-6 w-6" />
                <div>Search</div>
            </button>
            </div>
        </form>

       </div>
    )
}

export default Hero;
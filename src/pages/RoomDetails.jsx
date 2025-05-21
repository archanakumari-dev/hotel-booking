import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData, roomsDummyData } from "../assets/assets";
import StarRating from "../Components/StarRating";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* room Details */}
        <div className="flex flex-col md:flex-row items-start gap-2">
          <h1
            className="text-3xl md:text-4xl font-medium 
            font-Playfair"
          >
            {room.hotel.name}{" "}
            <span className="text-base text-gray-800/90 ">
              ({room.roomType})
            </span>
          </h1>
          <p className="bg-orange-400 text-white px-3 py-1.5 rounded-2xl text-sm">
            20% OFF
          </p>
        </div>

        {/* Rating  */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex ">
            <StarRating />
          </div>
          <p className="ml-2 ">200+ reviews</p>
        </div>

        {/* room address  */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location" />
          <span>{room.hotel.address}</span>
        </div>

        {/* room Images */}
        <div className="flex flex-col md:flex-row mt-6 gap-6 ">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt=""
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`w-full rounded-xl shadow-md cursor-pointer object-cover ${
                    mainImage == image && "outline-orange-500 outline-3"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* room Facility */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:4xl font-Playfair font-medium">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 mb-6">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2"
                >
                  <img src={facilityIcons[item]} alt="" className="w-5 h-5" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" font-medium text-xl">
            ${room.pricePerNight}/night
          </div>
        </div>

        {/* checkIn out form  */}
        <form className=" flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row md:items-center gap-4 md:gap-10 text-gray-500 font-medium">
            <div className="flex flex-col">
              <label htmlFor="checkInDate">Check-In</label>
              <input
                type="date"
                id="checkInDate"
                className="w-full px-3 py-2 mt-1.5 outline-none  border border-gray-300 rounded "
                required
              />
            </div>
            <div className="h-15 bg-gray-300/90 w-px max-md:hidden"></div>
             <div className="flex flex-col">
              <label htmlFor="checkOutDate">Check-Out</label>
              <input
                type="date"
                id="checkOutDate"
                className="w-full px-3 py-2 mt-1.5 outline-none  border border-gray-300 rounded "
                required
              />
            </div>
            <div className="h-15 bg-gray-300/90 w-px max-md:hidden"></div>
             <div className="flex flex-col">
              <label htmlFor="guests">Guests</label>
              <input
                type="number"
                id="guests" min={1} max={5} defaultValue={1}
                className="max-w-20 px-3 py-2 mt-1.5 outline-none  border border-gray-300 rounded "
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-sky-400 active:scale-95 transition-all text-white  rounded-md max-md:w-full max-md:mt-6 md:px-25 md:py-4 text-base  cursor-pointer px-4 py-2.5 "
          >
            Check Availability
          </button>
        </form>
        {/* Some Extra things */}
        <div className="mt-25 space-y-4">
            {roomCommonData.map((item,index)=>(
                <div key={index} className="flex items-start gap-2" >
                    
                    <img src={item.icon} alt="" className="w-6.5" />
                    <div >
                    <p className="text-base">{item.title}</p>
                    <p className="text-gray-500 text-md">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* last one about */}
        <div className=" text-gray-500 my-15 py-10 max-w-3xl
        border-y border-gray-300 text-xl ">
            <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
        </div>

        {/* Hosted by */}
        <div>
                 <p className="text-2xl">{room.hotel.name}</p>
                 <div className="flex gap-2 items-center ">
                        <div className="flex">
                        <StarRating/>
                        </div>
                    <p>200+ reviews</p>
                </div>
            <button className="bg-sky-400 rounded px-3 py-1.5 mt-3 outline-none border border-sky-800 cursor-pointer">Contact</button>
    
        </div>


      </div>
    )
  );
};

export default RoomDetails;

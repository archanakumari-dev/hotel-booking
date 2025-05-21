import Title from "./Title";
import { assets, userBookingsDummyData } from "../assets/assets";
import { useState } from "react";

    const date=new Date()

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:py-32 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align={"left"}
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className=" hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>
        {bookings.map((booking) => (
          <div key={booking._id} className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-1">
            {/* // hotel details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt="image"
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-Playfair text-2xl">
                  {booking.hotel.name} 
                   <span className="font-inter text-sm">  ({booking.room.roomType}) </span>
                </p>
                <div className="flex gap-1 items-center text-md text-gray-500">
                  <img src={assets.locationIcon} alt="locationIcon" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex gap-1 items-center text-md text-gray-500">
                  <img src={assets.guestsIcon} alt="guestIcon" />
                  <span  >Guests: {booking.guests}</span>
                </div>
                <p className="text-base font-md
                ">Total: ${booking.room.pricePerNight}</p>
              </div>
            </div>
            {/* Date and Timings */}
            <div className="flex flex-row md:items-center md:gap-12 gap-8 mt-3">
            <div>
                <p>Check-In:</p>
                <p className="text-gray-600">{new Date(booking.checkInDate).toDateString()}</p>
            </div>
            <div>
                <p>Check-Out:</p>
                <p className="text-gray-600">{new Date(booking.checkOutDate).toDateString()}</p>
            </div>
            </div>
            {/* payment */}
            <div className="flex flex-col items-start justify-center pt-3 ">
                <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${booking.isPaid?"bg-green-600":"bg-red-600"}`}></div>
                <p className={`text-base ${booking.isPaid?"text-green-600":"text-red-600"}`}>{booking.isPaid?"Paid":"Unpaid"}</p>
                </div>
                <button className={`${booking.isPaid && "hidden"} cursor-pointer border border-gray-300 px-3 py-1 rounded-xl active:scale-95 mt-2 hover:bg-gray-50 transition-all`}>Pay Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;

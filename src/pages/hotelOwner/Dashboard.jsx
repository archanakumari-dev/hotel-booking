import { useState } from "react"
import { assets, dashboardDummyData } from "../../assets/assets"
import Title from "../../Components/Title"

const Dashboard=()=>{
    const [dashboardData,setDashboardData]=useState(dashboardDummyData)
    return(
        <div>
          <Title title="Dashboard" subTitle="Monitor your room listings,track booking and analyze revenue-all in one place.Stay updated with real-time insights to ensure smooth operations." align={"left"} font='outfit'/>

          <div className="flex gap-4 my-8">
            {/* total booking */}
            <div className="flex bg-gray-100 border border-gray-300 rounded p-4 pr-8">
                <img src={assets.totalBookingIcon} alt="" className="max-sm:hidden h-10" />
                <div className="flex flex-col sm:ml-4 font-medium">
                    <p className="text-blue-500 text-lg">Total Bookings</p>
                    <p className="text-neutral-400 text-base">{dashboardData.totalBookings}</p>
                </div>
            </div>
            {/* total revenue */}
             <div className="flex bg-gray-100 border border-gray-300 rounded p-4 pr-8">
                <img src={assets.totalRevenueIcon} alt="" className="max-sm:hidden h-10" />
                <div className="flex flex-col sm:ml-4 font-medium">
                    <p className="text-blue-500 text-lg">Total Revenue</p>
                    <p className="text-neutral-400 text-base">$ {dashboardData.totalRevenue}</p>
                </div>
            </div>
          </div>
          
          {/* Recent bookings */}

          <h2 className="text-xl text-blue-950/70 font-medium mb-5">Recent Bookings</h2>
           <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
              <table className="w-full">
                <thead className="bg-gray-50">
                   <tr>
                    <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
                    <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Room Name</th>
                    <th className="py-3 px-4 text-gray-800 font-medium text-center">Total Amount</th>
                    <th className="py-3 px-4 text-gray-800 font-medium text-center">Payment Status</th>
                   </tr>
                </thead>
                 
                 <tbody className="text-sm">
                    {dashboardData.bookings.map((item,index)=>(
                      <tr key={index}>
                        <td className="px-4 py-3 text-gray-700 border-t border-gray-300">
                            {item.user.username}
                        </td>
                        <td className="px-3 py-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                            {item.room.roomType}
                        </td>
                        <td className="px-3 py-4 text-gray-700 border-t border-gray-300 text-center ">
                            $ {item.room.pricePerNight}
                        </td>
                        <td className={`px-3 py-4 border-gray-300 border-t flex`}>
                            <button className={`rounded-full px-3 py-1.5 mx-auto ${item.isPaid?"bg-green-300/90 text-green-800":"bg-amber-200 text-yellow-700"}`}>
                                {item.isPaid?"Completed":"Pending"}
                            </button>
                            
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>

        </div>
    )
}

export default Dashboard
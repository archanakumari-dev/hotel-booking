import {assets} from "../assets/assets"
const HotelReg=()=>{
    const cities=["Banglore","Mumbai","Delhi","Noida","Chennai","Ahemdabad"];
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
           <form className=" flex bg-white rounded-xl max-w-4xl max-md:mx-2">
               <img src={assets.regImage} alt="reg-image" className="w-1/2 rounded-xl hidden md:block" />
               <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
                  <img src={assets.closeIcon} alt="" className="absolute top-4 right-4 h-4 w-4 cursor-pointer"/>
                  <p className="text-2xl font-semibold mt-6 flex  ">Register Your Hotel</p>
                  {/* hotel name */}
                  <div className="w-full mt-4">
                    <label htmlFor="name" className="font-medium text-gray-600">Hotel</label>
                    <input type="text" id="name" placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light" required />
                  </div>
                  {/* phone */}
                  <div className="w-full mt-4">
                    <label htmlFor="contact" className="font-medium text-gray-600">Phone</label>
                    <input type="text" id="contact" placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light" required />
                  </div>
                  {/* Address*/}
                  <div className="w-full mt-4">
                    <label htmlFor="address" className="font-medium text-gray-600">Address</label>
                    <input type="text" id="address" placeholder="Type here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light" required />
                  </div>
                  {/* city dropdown */}
                  <div className="w-full mt-4">
                    <label htmlFor="city" className="font-medium text-gray-600">Select City</label>
                    <select name="city" id="city" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light" required>
                        <option value="">Select City</option>
                        {cities.map((city)=>(
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                  </div>
                  <button className="bg-indigo-500 hover:bg-indigo-600 transition-all rounded text-white px-6 py-2 mr-auto cursor-pointer mt-6">Register</button>
               </div>
            </form> 
        </div>
    )
}

export default HotelReg;
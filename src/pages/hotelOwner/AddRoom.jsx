import { useState } from "react"
import { assets, hotelDummyData, roomsDummyData } from "../../assets/assets"
import Title from "../../Components/Title"

const AddRoom=()=>{
    const [images,setImages]=useState({
       1:null,2:null,3:null,4:null
    })
    const [inputs,setInputs]=useState({
        roomType:'',
        pricePerNight:0,
        amenities:{
            'Free Wifi':false,
            'Free Breakfast':false,
            'Room Service':false,
            'Mountain View':false,
            'Pool Access':false
        }
    })
    return(
        <form>
          <Title title="Add Room" subTitle="Fill in the details carefully and accurate room details,pricing and amenities,to enhance theuser booking experience. " font="Outfit" align="left"/>

          {/* room images */}

          <p className="text-gray-800 mt-10">Images</p>
          <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
            {Object.keys(images).map((key)=>(
                <label htmlFor={`roomImage${key}`} key={key}>
                    <img src={images[key]?URL.createObjectURL(images[key]):assets.uploadArea} alt="" className="max-h-18 cursor-pointer opacity-80" />
                    <input type="file" accept="image/*" id={`roomImage${key}`} hidden onChange={e=>setImages({...images,[key]:e.target.files[0]})}/>
                </label>
            ))}
          </div>

          {/* room type */}

          <div className="w-full flex max-sm:flex-col sm: gap-4 mt-4">
            <div className="flex-1 max-w-48">
                <p className="text-gray-800 mt-4">Room Type</p>
                <select className="border border-gray-300 opacity-60 mt-1 rounded p-2 w-full " value={inputs.roomType} onChange={e=>setInputs({...inputs,roomType:e.target.value})}> 
                    <option value="">Select Room Type</option>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Luxury Room">Luxury Room</option>
                    <option value="Family Suite">Family Suite</option>
                </select>
            </div>
            <div>
                <p className="text-gray-800 mt-4">Price <span className="text-sm">/night</span></p>
                <input type="number" placeholder="0" className="border border-gray-300 mt-1 rounded p-2 w-24 rounded outline-gray-400" value={inputs.pricePerNight} onChange={e=>setInputs({...inputs,pricePerNight:e.target.value})}/>
            </div>
          </div>

          {/* amenities */}

          <p className="text-gray-800 mt-4">Amenities</p>
          <div className="flex flex-col flex-wrap mt-1 ">
            {Object.keys(inputs.amenities).map((amenity,index)=>(
                <div key={index}>
                   <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({...inputs,amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity]}})}/>
                   <label htmlFor={`amenities${index+1}`}>    {amenity}</label>
                </div>
            ))}
          </div>
            
            <button className="bg-blue-400 rounded px-8 mt-8 py-1.5 cursor-pointer text-white">Add Room</button>
        </form>
    )
}

export default AddRoom
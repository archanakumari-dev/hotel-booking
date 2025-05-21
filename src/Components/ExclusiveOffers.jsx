import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./Title";

const ExclusiveOffers=()=>{
    return (
     <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
        <div className="flex flex-col md:flex-row items-center justify-between w-full ">
            
            <Title align={"left"}  title="Exclusive Offers" subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."/>
            <button className="group cursor-pointer flex gap-2 font-medium items-center mt-15" >View All Offers 
                <img src={assets.arrowIcon} alt=""   className="group-hover:translate-x-1  transition-all "/>
            </button>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item)=>(
         <div key={item._id} style={{backgroundImage:`url(${item.image})`}}  className=" group relative bg-no-repeat bg-cover bg-center flex flex-col  items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white" >
            <p className="px-3 py-1 bg-white text-gray-800 rounded-xl absolute top-4 left-4 text-sm font-medium">{item.priceOff}% OFF</p>
            <div>
                <p className="text-2xl font-medium font-Playfair ">{item.title}</p>
                <p >{item.description}</p>
                <p className="text-xs text-white/70 mt-3"> Expires {item.expiryDate}</p>
                <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
                   View Offers 
                   <img src={assets.arrowIcon} alt="" className="invert group-hover:translate-x-1 transition-all" />
                </button>
            </div>


         </div>
        ))}
       </div>
     </div>
    )
}

export default ExclusiveOffers;
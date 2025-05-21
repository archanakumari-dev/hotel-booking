import { Link } from "react-router-dom"
import { assets } from "../assets/assets"
import Title from "./Title"

const Footer=()=>{
  return(
    <div className="bg-slate-200 text-gray-500/90 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 ">
        <div className="flex flex-wrap justify-between gap-12 mt-4">
        <div className="max-w-80">   
            <img src={assets.logo} alt="logo"  className="invert opacity-80 mb-4 h-8 md:h-9"/>
            <p className="text-sm">Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
            <div className="flex items-center mt-4 gap-3">
                <img src={assets.instagramIcon} alt=""  className="w-6"/>
                <img src={assets.linkendinIcon} alt="" className="w-6"/>
                <img src={assets.twitterIcon} alt=""  className="w-6"/>
                <img src={assets.facebookIcon} alt="" className="w-6"/>
                
            </div>
        </div>
        

        <div > 
            <p className="font-Playfair text-lg text-gray-800">COMPANY</p>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Carrers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Partners</a></li>
                
                
            </ul>
        </div> <div > 
            <p className="font-Playfair text-lg text-gray-800">SUPPORT</p>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Safety Information</a></li>
                <li><a href="#">Cancellation Options</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Accessibility</a></li>
                
                
            </ul>
        </div>

        <div className="max-w-80">
            <p className="font-Playfair text-lg text-gray-800">STAY UPDATED</p>
            <p className="mt-3 text-sm">Subscribe to our newsletter for travel inspiration and special offers.</p>
           <div className="flex items-center mt-4">
            <input type="text" placeholder="Your email"
            className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none "
             />
             <button className="bg-gray-800 flex items-center justify-center h-9 w-9 rounded-r "><img src={assets.arrowIcon} alt="" className="w-3.5 invert  "/></button>
           </div>
            
        </div>
        </div>

         <hr  className="border-gray-400 mt-8"/>
         <div className="flex flex-col md:flex-row items-center md:justify-between py-5">
           <p>&copy; {new Date().getFullYear()} QuickStay.All rights reserved.</p> 
           <ul className="flex gap-3 mt-1">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Sitemap</a></li>
           </ul>
         </div>
        
    </div>
  )
}

export default Footer
import { assets } from "../assets/assets"
import Title from "./Title"

const NewsLetter=()=>{
  return (
    
    <div className=" px-4 py-12 md:py-16 mx-2 lg:mx-auto  my-30 flex flex-col justify-center items-center w-full  max-w-5xl lg:w-full rounded-2xl  bg-gray-900 text-white ">
        <Title  title="Stay Inspired" subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."/>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-6">
            <input type="text" placeholder="Enter your email" className=" bg-white/10  px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"  />
            <button className="bg-black px-4 md:px-7 py-2.5 flex items-center justify-center gap-2 group rounded active:scale-95 " >
                Subscribe
                <img src={assets.arrowIcon} alt="ArrowIcon" className="w-3.5 invert group-hover:translate-x-1 transition-all " />
            </button>
        </div>
        <p className="text-xs mt-6 text-center text-gray-500 ">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
    </div>
   
  )
}

export default NewsLetter
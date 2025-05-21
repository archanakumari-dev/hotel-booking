import { testimonials } from "../assets/assets"
import StarRating from "./StarRating"
import Title from "./Title"

const Testimonial=()=>{

return(
    <div className="bg-slate-50 flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">
        <Title align={"center"} title="What Our Guests Say" subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."/>
        <div className=" flex flex-wrap gap-6 items-center justify-center mt-20 mb-10 ">
            {testimonials.map((testimonial)=>(
                <div className="bg-white p-6 rounded-xl shadow max-w-sm ">
                    <div className="flex items-center gap-3  " >
                    <img src={testimonial.image} alt="UserImage" className="h-14 w-14 rounded-full" />
                    <p>{testimonial.name}</p>
                   </div>
                   <div className="flex items-center gap-1  mt-4">
                    <StarRating/>
                   </div>
                   <div className="text-gray-500 max-w-90 mt-4 ">
                    {testimonial.review}
                   </div>
                </div>
            ))}
        </div>
        
    </div>
)

}

export default Testimonial
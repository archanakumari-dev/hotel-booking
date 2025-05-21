import React from "react";
import { assets } from "../assets/assets";
import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClerk, useUser ,UserButton } from "@clerk/clerk-react";

const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];
   
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location=useLocation();
  const navigate=useNavigate();

  const {openSignIn}=useClerk()
  const {user}=useUser()

  useEffect(() => {
    if(location.pathname!=='/'){
      setIsScrolled(true);
      return;
    }
    else{
      setIsScrolled(false);
    }
    setIsScrolled(prev=>{prev!=='/'?true:prev})

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (<>
    <nav
      className={` flex items-center justify-between fixed top-0 left-0 w-full px-4 md:px-16 lg:px-24 xl:px-32  transition-all duration-500 z-50 
        ${
          isScrolled
            ? "bg-white shadow-md text-gray-700 py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
    >
{/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className={`h-9 ${isScrolled && "invert opacity-80"}`}
        />
      </Link>

{/* Desktop links and searchicon and login button  */}

      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link, i) => (
          <Link to={link.path} key={i} className={`group flex flex-col  ${isScrolled?"text-gray-600":"text-white"} text-xl`}>
            {link.name}
            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} group-hover:w-full transition-all duration-300 h-0.5 w-0 `}/>
            </Link>
        ))}
        
     
        
        {/* search icon */}
        <img
          src={assets.searchIcon}
          alt="search"
          className={`hover:cursor-pointer ${isScrolled && "invert"} 
            h-7 transition-all duration-500`}
        />

        {/* Login Button */}
        {user ?
        (<UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=>navigate("/my-bookings")}/>
          </UserButton.MenuItems>
        </UserButton>)
        :
        ( <button onClick={openSignIn} className="rounded-4xl border bg-black text-white px-6 py-2 hover:cursor-pointer transition-all duration-500">
          Login
        </button>)
      }
       {/* <button onClick={openSignIn} className="rounded-4xl  border  bg-black text-white px-6 py-2 hover:cursor-pointer ">
          Login
        </button> */}
      </div>

{/* Mobile Device Menu and Cut */}

      <div className={`md:hidden `}>
         <img onClick={()=>{setIsMenuOpen(!isMenuOpen)}} src={assets.menuIcon} alt="menu" className={`md:hidden  ${isMenuOpen && "hidden"} ${isScrolled && "invert"}`}   />
      </div>       

      <div className={` fixed top-0 left-0 w-full h-screen bg-white flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen?"translate-x-0":"translate-x-full"}`} >
        <button className={`absolute top-5 right-5  `} onClick={()=>{setIsMenuOpen(!isMenuOpen)}} >
           <img src={assets.closeIcon} alt="close-menu"/>
        </button>

        {navLinks.map((link,i)=>(
        <Link to={link.path} key={i} className={`hover:bg-gray-200 w-full flex text-center justify-center py-3`}>{link.name}</Link>
        ))}
        {user?
          (<UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=>navigate("/my-bookings")}/>
          </UserButton.MenuItems>
        </UserButton>)
         :
         ( <button onClick={openSignIn} className="rounded-4xl border bg-black text-white px-6 py-2 hover:cursor-pointer transition-all duration-500">
          Login
        </button>)}
       
        
        
      </div>

    </nav >
     
    </>

    
  );

};
export default Navbar;

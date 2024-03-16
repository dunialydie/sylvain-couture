import { useState } from "react";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faBars } from '@fortawesome/free-solid-svg-icons';
import backGround from "/src/assets/boris-stefanik-wxJscL5ZzDA-unsplash.jpg";


export default function Header(){
    const [menuOpen,setMenuOpen]=useState(false)

    return (
        <div className="relative h-80 border-2 mb-5 md:h-auto ">
            <img src={backGround} alt="" className="object-cover h-full w-full "/>
            <div className="absolute top-3 text-white w-[24rem] items-center px-4 md:flex md:justify-between justify-between md:w-full md:px-16 md:py-8 md:gap-8 ">
                <div className="flex justify-between items-center ">
                    <div className="font-bold text-xl md:text-4xl">Nitro</div>
                    <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#ffffffff",}} className="w-6 h-6"/>
                    </Buttons>
                </div>
                <nav className={`${!menuOpen ? 'flex' : 'hidden'} flex justify-between items-center  text-[14px] md:justify-between  md:w-full md:text-l 2xl:text-3xl`}>
                        <div className="flex md:gap-8 md:w-80 items-center gap-2">
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">Home</a>
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">Services</a>
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">About us</a>
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">Blog</a>
                        </div>
                    <Buttons style=' rounded-full bg-lime-400 p-2 font-medium md:px-2 md:w-28 text-black' name="Start With Us"/>
                </nav>
            </div>
            <div className="absolute  md:flex md:justify-between  md:top-64 w-full top-24">
                <div className="text-white flex flex-col gap-3 w-full 2xl:px-24  md:px-16 px-8 md:basis-3/4 boder-2 border-blue-700">
                    <div className=" font-bold text-3xl flex flex-col  md:w-auto md:gap-4 md:text-5xl ">
                        <span>Innovative solutions</span>
                        <span>for a digital world.</span> 
                    </div>
                    <div className="text-[15px] ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium
                        quae eveniet culpa quos eligendi debitis animi harum nulla nam.
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                </div>
                <div className="hidden text-white  rotate-[-90deg] text-[12px] md:flex items-center gap-3  md:basis-1/4 ">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className="border-2 border-white rounded-full p-2"/>
                    <span className="">
                        Scroll Down
                    </span>
                </div>
            </div>
            
                
            
        </div>
    
    )
}

// import { useState } from "react";
// import Buttons from "./Buttons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowLeft,faBars } from '@fortawesome/free-solid-svg-icons';
// import backGround from "/src/assets/boris-stefanik-wxJscL5ZzDA-unsplash.jpg";


// export default function Header(){
//     const [menuOpen,setMenuOpen]=useState(false)

//     return (
//         <div className="relative h-80 border-2 border-pink-600 mb-5 md:h-auto ">
//             <img src={backGround} alt="" className="object-cover h-full w-full "/>
//             <div className="absolute top-3 text-white w-[20rem] items-center mx-auto border-2 border-violet-600 md:flex md:justify-between justify-between md:w-full md:px-20 md:py-8 md:gap-8">
//                 <div className="flex justify-between border-2 border-violet-600">
//                     <div className="font-bold text-xl md:text-4xl">Nitro</div>
//                     <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenuOpen(!menuOpen)}>
//                         <FontAwesomeIcon icon={faBars} style={{color: "#ffffffff",}} className="w-6 h-6"/>
//                     </Buttons>
//                 </div>
//                 <nav className={`${!menuOpen ? 'flex' : 'hidden'} flex justify-between items-center  text-[13px] md:justify-between border-2 border-violet-600 md:w-full md:text-l 2xl:text-3xl`}>
//                         <div className="flex gap-3 ">
//                             <div>Home</div>
//                             <div>Services</div>
//                             <div>About us</div>
//                             <div>Blog</div>
//                         </div>
//                     <Buttons style=' rounded-full bg-lime-400 p-2 font-bold md:px-2 md:w-36' name="Start With Us"/>
//                 </nav>
//             </div>
            
//             <div className="text-white absolute top-24  flex flex-col gap-3 w-72 border-2 border-pink-600 2xl:px-24 md:top-64 md:w-full md:px-20">
//                 <div className=" font-bold text-3xl flex flex-col border-2 border-yellow-600  md:w-auto md:gap-4 md:text-5xl ">
//                     <span>Innovative solutions</span>
//                     <span>for a digital world.</span> 
//                 </div>
//                 <div className="text-[15px] border-2 border-white">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium
//                     quae eveniet culpa quos eligendi debitis animi harum nulla nam.
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium
//                     quae eveniet culpa quos.
//                 </div>
//             </div>
                
//             <div className="absolute top-44 text-white left-72 rotate-[-90deg] text-[12px] flex items-center gap-3 w-28 border-2 border-green-600 md:top-96 md:inset-x-[85%]">
//                 <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className="border-2 border-white rounded-full p-2"/>
//                 <span className="">
//                     Scroll Down
//                 </span>
//             </div>
//         </div>
    
//     )
// }


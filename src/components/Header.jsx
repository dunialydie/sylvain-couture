import { useState } from "react";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faBars } from '@fortawesome/free-solid-svg-icons';
import backGround from "/src/assets/boris-stefanik-wxJscL5ZzDA-unsplash.jpg";


export default function Header(){
    const [menuOpen,setMenuOpen]=useState(false)

    return (
        <div className=" mx-3 my-6 relative h-80">
            <img src={backGround} alt="" className="object-cover h-full w-full "/>
            <div className="absolute top-3 text-white w-[22rem] items-center ml-5 border-2 border-white">
                <div className="flex justify-between">
                    <div className="font-bold text-xl ">Nitro</div>
                    <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#ffffffff",}} className="w-6 h-6"/>
                    </Buttons>
                </div>
                <nav className={`${menuOpen ? 'flex' : 'hidden'} flex justify-between items-center w-full  border-2 border-blue-700 `}>
                        <div className="flex gap-3 ">
                            <div>Home</div>
                            <div>Services</div>
                            <div>About us</div>
                            <div>Blog</div>
                        </div>
                    <Buttons style=' rounded-full bg-lime-400 p-2 font-bold text-[10px] ' name="Start With Us"/>
                </nav>
            </div>
            
                <div className="text-white absolute top-28 mx-8 flex flex-col gap-3 w-80">
                    <div className=" font-bold text-3xl flex flex-col">
                        <span>Innovative solutions</span>
                        <span>for a digital world.</span> 
                    </div>
                    <div className="text-[14px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium
                    quae eveniet culpa quos eligendi debitis animi harum nulla nam.
                    Reprehenderit autem, ut eveniet officia ullam officiis! Nam,
                    commodi placeat!
                </div>
                </div>
                
                <div className="absolute top-44 text-white left-80 rotate-[-90deg] text-[10px] flex items-center gap-3 w-28">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className="border-2 border-white rounded-full p-2"/>
                     <span className="">
                        Scroll Down
                    </span>
                </div>
        </div>
    )
}

// <div className=" mx-3 my-6 relative h-80">
//             <img src={backGround} alt="" className="object-cover h-full w-full "/>
//             <div className="font-bold text-xl ">DUNI'S</div>
//             <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenu(!menuOpen)}>
//                 <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="w-6 h-6"/>
//             </Buttons>
//                 <nav className="absolute top-3 flex text-xs px-3 ml-2 justify-between  w-96 items-center">
//                     <div className="flex justify-between gap-6 items-center text-white ">
//                         <div className=" col-span-1">Nitro</div>
//                         <div className="flex gap-3 col-span-3 text-[8px]">
//                             <div>Home</div>
//                             <div>Services</div>
//                             <div>About us</div>
//                             <div>Blog</div>
//                         </div>
//                     </div>
//                     <Buttons style=' rounded-full bg-lime-400 p-2 font-bold text-[8px] ' name="Start With Us"/>
//                 </nav>
//                 <div className="text-white absolute top-32 mx-8 flex flex-col gap-3 w-80">
//                     <div className=" font-bold text-3xl flex flex-col">
//                         <span>Innovative solutions</span>
//                         <span>for a digital world.</span> 
//                     </div>
//                     <div className="text-[8px] ">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium
//                     quae eveniet culpa quos eligendi debitis animi harum nulla nam.
//                     Reprehenderit autem, ut eveniet officia ullam officiis! Nam,
//                     commodi placeat!
//                 </div>
//                 </div>
                
//                 <div className="absolute top-44 text-white left-80 rotate-[-90deg] text-[10px] flex items-center gap-3 w-28">
//                     <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className="border-2 border-white rounded-full p-2"/>
//                      <span className="">
//                         Scroll Down
//                     </span>
//                 </div>
//         </div>
//     )
import { useState } from "react";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faBars } from '@fortawesome/free-solid-svg-icons';
import backGround from "/src/assets/boris-stefanik-wxJscL5ZzDA-unsplash.jpg";


export default function Header(){
    const [menuOpen,setMenuOpen]=useState(false)

    return (
        <div className="relative h-80 border-2 border-pink-600 mb-5">
            <img src={backGround} alt="" className="object-cover h-full w-full "/>
            <div className="absolute top-3 text-white w-[20rem] items-center ml-5 border-2 border-pink-600">
                <div className="flex justify-between">
                    <div className="font-bold text-xl ">Nitro</div>
                    <Buttons style="md:hidden p-2 col-start-2" onClick={()=> setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#ffffffff",}} className="w-6 h-6"/>
                    </Buttons>
                </div>
                <nav className={`${menuOpen ? 'flex' : 'hidden'} flex justify-between items-center w-full text-[13px]`}>
                        <div className="flex gap-3 ">
                            <div>Home</div>
                            <div>Services</div>
                            <div>About us</div>
                            <div>Blog</div>
                        </div>
                    <Buttons style=' rounded-full bg-lime-400 p-2 font-bold  ' name="Start With Us"/>
                </nav>
            </div>
            
            <div className="text-white absolute top-24 ml-3 flex flex-col gap-3 w-72 border-2 border-pink-600">
                <div className=" font-bold text-3xl flex flex-col border-2 border-yellow-600">
                    <span>Innovative solutions</span>
                    <span>for a digital world.</span> 
                </div>
                <div className="text-[15px] border-2 border-white ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium
                    quae eveniet culpa quos eligendi debitis animi harum nulla nam.
                </div>
            </div>
                
            <div className="absolute top-44 text-white left-72 rotate-[-90deg] text-[12px] flex items-center gap-3 w-28 border-2 border-green-600">
                <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className="border-2 border-white rounded-full p-2"/>
                <span className="">
                    Scroll Down
                </span>
            </div>
        </div>
    
    )
}


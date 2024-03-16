import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
import FooterQuestions from "./FooterQuestions";
import Buttons from "./Buttons";


export default function Footer(){
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(inputValue);
    setInputValue(''); 
  };
    return (
        <div className="bg-[#1a2700] flex flex-col gap-3 py-8 ">
            <div className="border-b border-b-gray-600 px-8 py-2 flex flex-col gap-5 pb-5 md:flex-row md:justify-between md:px-12 md:pb-14">
                <div className="flex flex-col gap-5 md:gap-8">
                    <div className="flex flex-col text-white text-3xl font-bold gap-2">
                        <span>Have an Awesome</span>
                        <span>Project in Mind?</span>
                    </div>
                    <div className="border-2 bg-white rounded-full flex">
                        <form onSubmit={handleSubmit} className=" rounded-full flex items-center justify-between w-full px-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="md:px-3 rounded-full focus:outline-none focus:border-0 placeholder:text-[14px]"
                            />
                        </form>
                        <Buttons type="submit" style=" bg-[#cafc01] rounded-full px-2">
                            <FontAwesomeIcon icon={faArrowRight} className="w-8 p-2"/>
                        </Buttons>
                        
                    </div>
                </div>
                <div className="grid grid-col-3 gap-3  items-center justify-between md:flex md:gap-6">
                    <div className="flex flex-col col-span-2">
                    <FooterQuestions title="What we do" assone="Home" asstwo="Work" assthree="Service" assfour="Contact us"/>
                    </div>
                    <div className="flex flex-col col-span-1">
                        <FooterQuestions title="Who we are" assone="About us" asstwo="Join us" assthree="Blog" assfour="Insights"/>
                    </div>
                    <div className="flex flex-col col-span-1">
                    <FooterQuestions title="Work" assone="Sendance" asstwo="Teachable" assthree="Shipbob" assfour="Haystack"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 px-8 justify-between text-white md:px-12 md:flex-row">
                <p className=" flex gap-3 items-center">
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className=" w-4 h-4"/>
                    <span className="text-[14px]">2023 Nitro. All rights reserved.</span>
                </p>
                <div className="flex justify-between md:gap-8 ">
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-5 h-6"/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-5 h-6 "/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-5 h-6 "/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-5 h-6 "/>
                </div>
            </div>

        </div>
    )
}
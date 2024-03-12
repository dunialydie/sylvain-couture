import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faCopyright } from '@fortawesome/free-solid-svg-icons';
import FooterQuestions from "./FooterQuestions";


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
        <div className="bg-lime-950 flex flex-col gap-3 p-8 border-2 border-blue-500">
            <div className="border-b border-gray-slate-600 flex flex-col gap-5 pb-5">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col text-white text-3xl">
                        <span>Have an Awesome</span>
                        <span>Project in Mind?</span>
                    </div>
                    <div className="border-2 bg-white rounded-full ">
                        <form onSubmit={handleSubmit} className=" rounded-full flex items-center justify-between px-3">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="p-3 rounded-full focus:outline-none focus:border-0"
                            />
                            <FontAwesomeIcon icon={faArrowRight} className="bg-lime-400 rounded-full p-3 w-8"/>
                        </form>
                    </div>
                </div>
                <div className="grid grid-col-3 gap-3  items-center justify-between">
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
            <div className="flex flex-col gap-3 justify-between text-white">
                <p className=" flex gap-3">
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-6 h-6 "/>
                    <span>2023 Nitro. All rights reserved.</span>
                </p>
                <div className="flex justify-between">
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-6 h-6"/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-6 h-6 "/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-6 h-6 "/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#ffffffff",}} className="w-6 h-6 "/>
                </div>
            </div>

        </div>
    )
}
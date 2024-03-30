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
        <div className="bg-[#1a2700] flex flex-col gap-3 py-8 md:px-12 2xl:px-28 px-8">
            <div className="border-b border-b-gray-600  py-2 grid md:grid-cols-2 gap-8   pb-5 md:flex-row md:justify-between md:pb-14 2xl:pt-10 2xl:pb-20">
                <div className="flex flex-col gap-5 md:gap-8 2xl:gap-10">
                    <div className="flex flex-col text-white text-3xl font-bold gap-2 2xl:text-6xl 2xl:gap-5">
                        <span>Vous avez un modèle </span>
                        <span>génial en tête ?</span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-3 items-center">
                        <form onSubmit={handleSubmit} className="col-span-3 rounded-full flex items-center justify-between w-full">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="adresse mail"
                                className="w-full px-3 h-11 rounded-full focus:outline-none focus:border-0 placehnolder:text-[14px] 2xl:h-16 2xl:px-6 2xl:placeholder:text-[20px]"
                            />
                        </form>
                        <Buttons type="submit" style="col-span-1 bg-[#cafc01] rounded-full px-2 2xl:px-8 md:h-full">
                            <FontAwesomeIcon icon={faArrowRight} className="w-8 p-2 2xl:text-3xl"/>
                        </Buttons>
                    </div>
                </div>
                <div className="grid grid-col-3 gap-3 items-center md:justify-end md:flex md:gap-6 2xl:gap-10">
                    <div className="flex flex-col col-span-2">
                    <FooterQuestions title="Ce que nous faisons" assone="Accueil" asstwo="Collection" assthree="Service" assfour="Nous contacter"/>
                    </div>
                    <div className="flex flex-col col-span-1">
                        <FooterQuestions title="Qui sommes-nous" assone="À propos" asstwo="Nous rejoindre" assthree="Blog" assfour="Aperçus"/>
                    </div>
                    <div className="flex flex-col col-span-1">
                    <FooterQuestions title="Resultats" assone="Pagnes" asstwo="Tissus" assthree="Classique" assfour="Traditionnel"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3  justify-between text-white  md:flex-row items-center 2xl:mt-5">
                <p className=" flex gap-3 items-center">
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#fff",}} className=" w-4 h-4 "/>
                    <span className="text-[14px] md:text-xl">2023 Sylvain. All rights reserved.</span>
                </p>
                <div className="flex justify-between md:gap-8 items-center">
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#fff",}} className="w-5 h-6 2xl:w-10 2xl:h-8"/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#fff",}} className="w-5 h-6 2xl:w-10 2xl:h-8"/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#fff",}} className="w-5 h-6 2xl:w-10 2xl:h-8"/>
                    <FontAwesomeIcon icon={faCopyright} style={{color: "#fff",}} className="w-5 h-6 2xl:w-10 2xl:h-8"/>
                </div>
            </div>

        </div>
    )
}
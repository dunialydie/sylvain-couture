import { useState } from "react";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faBars } from '@fortawesome/free-solid-svg-icons';
import backGround from "/src/assets/alexander-andrews-jNKv4QohAk0-unsplash.jpg";


export default function Header(){
    const [menuOpen,setMenuOpen]=useState(false);
    const handleOpen=()=>{
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="relative h-80 border-2 mb-12 md:h-auto 2xl:h-auto 2xl:mb-24">
            <img src={backGround} alt="" className="object-cover h-full w-full "/>
            <div className="absolute top-3 text-white w-full items-center px-4 md:flex md:justify-between justify-between md:w-full md:px-16 md:py-8 md:gap-8 2xl:px-28 2xl:gap-44 ">
                <div className="flex justify-between items-center ">
                    <div className="font-bold text-xl md:text-4xl">
                        <img src="src/assets/aaaaaaaaaaaaaa-removebg-preview.png" alt="logo" className="rounded-full 2xl:w-40 2xl:h-32 w-14  h-14" />
                    </div>
                    <Buttons style="md:hidden p-2 col-start-2" onClick={handleOpen}>
                        <FontAwesomeIcon icon={faBars} style={{color: "#fff",}} className="w-6 h-6"/>
                    </Buttons>
                </div>
                <nav className={`${menuOpen ? 'flex':'hidden'} md:flex justify-between items-center text-[14px] md:justify-between  md:w-full md:text-l 2xl:text-xl`}>
                        <div className="flex md:gap-8 md:w-80 items-center gap-2  2xl:w-full 2xl:basis-3/4 2xl:gap-16">
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">Accueil</a>
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">Services</a>
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">À propos</a>
                            <a  href="https://www.google.com" target="_blank" title="Cliquez pour visiter Google">Blog</a>
                        </div>
                    <Buttons style='rounded-full bg-[#cafc01] p-2 font-medium md:px-2 md:w-36 text-black 2xl:w-auto 2xl:px-12 2xl:p-4' name="Contactez-nous"/>
                </nav>
            </div>
            <div className="absolute md:flex md:justify-between  md:top-64 w-full top-24 2xl:inset-y-2/4">
                <div className="text-white flex flex-col gap-3 w-full 2xl:px-24  md:px-16 px-8 md:basis-3/4  2xl:gap-10">
                    <div className=" font-bold  flex flex-col md:w-auto md:gap-4 ">
                        <span className="md:text-5xl 2xl:text-8xl text-3xl">De l'étoffe de vos rêves à la réalité.</span>
                        <span className="md:text-4xl 2xl:text-7xl text-2xl">Tisser l'élégance, fil après fil.</span> 
                    </div>
                    <div className="hidden sm:block text-[15px] 2xl:text-2xl 2xl:leading-loose">
                    Bienvenue chez Sylvain Couture, où la tradition rencontre l'innovation au cœur de la création.
                    chaque pièce est le fruit d'une réflexion profonde, alliant savoir-faire et approches novatrices. 
                    Nous croyons en la beauté de la couture faite main, où chaque point est un geste d'amour envers l'art de la mode.
                    Nos créations sont conçues pour célébrer l'individualité de chacun, offrant un ajustement sur mesure et un style pour chaque type d'événement.
                    </div>
                    <div className="block sm:hidden">
                    Bienvenue chez Sylvain Couture, où la tradition rencontre l'innovation au cœur de la création.
                    </div>

                </div>
                <div className="hidden text-white  rotate-[-90deg] text-[12px] md:flex items-center gap-3  md:basis-1/4 2xl:text-2xl 2xl:">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} className="border-2 border-white rounded-full p-2 2xl:p-4"/>
                    <span className="">
                        Visitez-nous
                    </span>
                </div>
            </div>
            
                
            
        </div>
    
    )
}


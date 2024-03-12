import Buttons from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faUser,faCircleDot,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Started from "./Started";

export default function Body(){
    return(
        <div className="flex flex-col gap-4 border-2 border-blue-700">
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col gap-4 col-span-2 items-center ">
                    <div className="text-[18px]">
                        Get started with us
                    </div>
                    <div className="flex flex-col text-3xl col-span-1 items-center">
                        <span>Get started with us</span>
                        <span>simply and quickly</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 border-2 border-black rounded-full mb-3 w-auto px-2">
                    <Buttons style='font-bold py-3 px-1' name="Start With Us"/>
                    <FontAwesomeIcon icon={faArrowRight} className="rounded-full p-2"/>
                </div>
            </div>
            <div className="flex flex-col gap-6 px-4 border-2 border-green-950">
                <Started icon={faUser} title="Create Account" paragraphe="Users must create an account to acces various services on nitro"/>
                <Started icon={faCircleDot} title="Explore the Website" paragraphe="Learn about the agency's services,projects, team, and values"/>
                <Started icon={faArrowRightFromBracket} title="Request a Quote" paragraphe="Locking for a specific service, they can request a quote from the agency"/>
            </div>
            <div className="bg-lime-950 text-white flex flex-col items-center h-auto  w-full">
                <div className="text-[18px] my-6">Our approch</div>
                <div className=" mx-8 text-center mb-5 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. A error nostrum cumque? 
                    Inventore quis nisi necessitatibus ullam 
                    cumque dolor id ad laborum maiores labore 
                    incidunt qui alias, maxime doloribus ab.
                </div>
            </div>
        </div>
    )
}
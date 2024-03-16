// import Buttons from "./Buttons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faCircleDot,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Started from "./Started";
import Intro from "./Intro";

export default function Body(){
    return(
        <div className="flex flex-col gap-12 mb-5 2xl:gap-20 2xl:mb-16 ">
           <Intro title="Get started with us " titleOne="Get started with us" titleTwo="simply and quickly" name="Start with us" />
            <div className="flex flex-col gap-6 px-4 md:px-12 md:flex-row md:gap-2 2xl:px-28 2xl:gap-4">
                <Started icon={faUser} title="Create Account" paragraphe="Users must create an account to acces various services on nitro"/>
                <Started icon={faCircleDot} title="Explore the Website" paragraphe="Learn about the agency's services,projects, team, and values"/>
                <Started icon={faArrowRightFromBracket} title="Request a Quote" paragraphe="Locking for a specific service, they can request a quote from the agency"/>
            </div>
            <div className="bg-[#1a2700] text-white flex flex-col items-center h-auto w-full md:py-8 md:px-10 2xl:px-32">
                <div className="text-[18px] my-6 md:text-[12px] 2xl:text-2xl">Our approch</div>
                <div className=" mx-8 text-center mb-5 text-xl font-regular md:text-3xl 2xl:text-5xl 2xl:leading-relaxed 2xl:mb-16">
                    Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. A error nostrum cumque? 
                    Inventore quis nisi necessitatibus ullam 
                    cumque dolor id ad laborum maiores labore 
                    incidunt qui alias, maxime doloribus ab.
                </div>
            </div>
        </div>
    )
}


// import Buttons from "./Buttons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowRight,faUser,faCircleDot,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import Started from "./Started";

// export default function Body(){
//     return(
//         <div className="flex flex-col gap-4 ">
//             <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between px-16 border-2  border-red-500">
//                 <div className="flex flex-col gap-4 col-span-2 items-center border-2  border-red-500">
//                     <div className="text-[18px]">
//                         Get started with us
//                     </div>
//                     <div className="flex flex-col text-3xl col-span-1 items-center">
//                         <span>Get started with us</span>
//                         <span>simply and quickly</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-1 border-2 border-black rounded-full mb-3 w-auto px-2">
//                     <Buttons style='font-bold py-3 px-1' name="Start With Us"/>
//                     <FontAwesomeIcon icon={faArrowRight} className="rounded-full p-2"/>
//                 </div>
//             </div>
//             <div className="flex flex-col gap-6 px-4 ">
//                 <Started icon={faUser} title="Create Account" paragraphe="Users must create an account to acces various services on nitro"/>
//                 <Started icon={faCircleDot} title="Explore the Website" paragraphe="Learn about the agency's services,projects, team, and values"/>
//                 <Started icon={faArrowRightFromBracket} title="Request a Quote" paragraphe="Locking for a specific service, they can request a quote from the agency"/>
//             </div>
//             <div className="bg-lime-950 text-white flex flex-col items-center h-auto  w-full">
//                 <div className="text-[18px] my-6">Our approch</div>
//                 <div className=" mx-8 text-center mb-5 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur 
//                     adipisicing elit. A error nostrum cumque? 
//                     Inventore quis nisi necessitatibus ullam 
//                     cumque dolor id ad laborum maiores labore 
//                     incidunt qui alias, maxime doloribus ab.
//                 </div>
//             </div>
//         </div>
//     )
// }
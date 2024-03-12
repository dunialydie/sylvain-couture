import Buttons from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Mission from "./Mission";
import bgckground from "/src/assets/keegan-houser--Q_t4SCN8c4-unsplash.jpg"
export default function MissionVision(){

    return (
        <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-5 items-center">
                <p className="text-[18px]">Our Mission & Vision</p>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col font-bold text-2xl">
                        <span>Present creative and</span>
                        <span>innovative solutions.</span>
                    </div>
                    <div className="flex items-center gap-1 border-2 border-black rounded-full w-auto px-2 mb-3 justify-center">
                        <Buttons style='font-bold py-3 px-1' name="All About Nitro"/>
                        <FontAwesomeIcon icon={faArrowRight} className="rounded-full p-2"/>
                    </div>
                </div>
            </div>
            
            <div className="relative border-2 border-violet-700">
                <img src={bgckground} alt="" className="object-cover h-full w-full rounded-lg"/>
                <p className="absolute top-32 text-white underline text-[12px] px-2">Our Goals</p>
                <p className="absolute top-40 text-white font-bold text-[16px] px-2">To be the best leading agency in the industry.</p>
            </div>
            <div className="flex flex-col gap-3 border-2 border-violet-700">
                <Mission title="Our Mission" body="Customer Success" part="Is our Mission" footer= "Digital has been developing elite, award winning designs and digital products since 2008."/>
                <Mission title="Our Vision" body="We are Working" part="on Future" footer= "Digital has been developing elite, award winning designs and digital products since 2008."/>

            </div>

        </div>
    )
}
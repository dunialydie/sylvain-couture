
import Mission from "./Mission";
import bgckground from "/src/assets/keegan-houser--Q_t4SCN8c4-unsplash.jpg"
import Intro from "./Intro";
export default function MissionVision(){

    return (
        <div className="py-6 flex flex-col gap-5 md:gap-12 w-full mb-10 2xl:gap-20 2xl:mb-20">
            <Intro title="Our Mission & Vision " titleOne="Present creative and" titleTwo="innovative solutions" name="All about Nitro" />
            <div className="flex flex-col md:px-12 gap-y-3 2xl:px-28 2xl:gap-5">
                <div className="relative md:h-72 2xl:h-[30rem]">
                    <img src={bgckground} alt="bg" className="object-cover h-full w-full rounded-lg"/>
                    <div className="absolute top-48 text-white flex flex-col gap-4 md:px-8 px-4 2xl:px-16 2xl:top-72 2xl:gap-8">
                        <p className="underline text-[12px] 2xl:text-2xl ">Our Goals</p>
                        <p className="font-bold text-[16px] md:text-xl  2xl:text-4xl">To be the best leading agency in the industry.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row  2xl:w-full 2xl:gap-5">
                    <Mission title="Our Mission" body="Customer Success" part="Is our Mission" footer= "Digital has been developing elite, award winning designs and digital products since 2008."/>
                    <Mission title="Our Vision" body="We are Working" part="on Future" footer= "Digital has been developing elite, award winning designs and digital products since 2008."/>
                </div>
            </div>
        </div>
    )
}
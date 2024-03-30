import Mission from "./Mission";
import bgckground from "/src/assets/pina-messina-qQKv7r1BaRw-unsplash.jpg"
import Intro from "./Intro";
export default function MissionVision(){

    return (
        <div className="py-6 flex flex-col gap-5 md:gap-12 w-full mb-10 2xl:gap-20 2xl:mb-20">
            <Intro title="Un Engagement envers la Durabilité " titleOne="Présent,créatif et" titleTwo="une mode innovante" name="À propos de nous" />
            <div className="flex flex-col md:px-12 gap-y-3 2xl:px-28 2xl:gap-5">
                <div className="relative md:h-72 2xl:h-[30rem]">
                    <img src={bgckground} alt="bg" className="object-cover h-full w-full rounded-lg"/>
                    <div className="absolute top-48 text-white flex flex-col gap-4 md:px-8 px-4 2xl:px-16 2xl:top-72 2xl:gap-8">
                        <p className="underline text-[12px] 2xl:text-2xl ">Mission</p>
                        <p className="font-bold text-[16px] md:text-xl  2xl:text-4xl">Être la maison de couture leader dans l'industrie de la mode</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row  2xl:w-full 2xl:gap-5">
                    <Mission title="Mission" body="Succès Client" part="Est notre Mission" footer= "Depuis 2015, Sylvain Couture conçoit des styles d'élite et des modèles pour les stylistes de la ville de Lubumbashi."/>
                    <Mission title="Vision" body="Nous créeons la mode " part="du future" footer= "Depuis 2015, Sylvain Couture conçoit des styles d'élite et des modèles pour les stylistes de la ville de Lubumbashi."/>
                </div>
            </div>
        </div>
    )
}
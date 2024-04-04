import {faMedal,faCircleDot,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Started from "./Started";
import Intro from "./Intro";

export default function Body(){
    return(
        <div className="flex flex-col gap-12 mb-5 2xl:gap-20 2xl:mb-16 ">
           <Intro title="Approchez chez nous, chez vous." titleOne="Débutez avec nous" titleTwo="simplement et rapidement" name="Débutez" />
            <div className="flex flex-col gap-6 px-4 md:px-12 md:flex-row md:gap-2 2xl:px-28 2xl:gap-4">
                <Started icon={faMedal} title="Excellence et Qualité " paragraphe="Engagement envers la haute qualité des matériaux, du design, et de la finition des produits."/>
                <Started icon={faCircleDot} title="Créativité et Innovation" paragraphe=" Priorité donnée à l'originalité dans le design et l'utilisation de techniques innovantes pour se distinguer sur le marché."/>
                <Started icon={faArrowRightFromBracket} title="Artisanat et Savoir-faire" paragraphe="Valorisation des compétences artisanales traditionnelles et du savoir-faire technique dans la création de pièces uniques."/>
            </div>
            <div className="bg-[#1a2700] text-white flex flex-col items-center h-auto w-full md:py-8 md:px-10 2xl:px-32">
                <div className="text-[18px] my-6 md:text-[12px] 2xl:text-2xl"> Un Tissu d'Innovation et d'Artisanat</div>
                <div className=" mx-8 text-center mb-5 text-xl font-regular md:text-3xl 2xl:text-5xl 2xl:leading-relaxed 2xl:mb-16">
                    Chez Sylvain Couture, chaque pièce est le fruit d'une réflexion profonde, 
                    alliant savoir-faire ancestral et approches novatrices. Nous croyons en 
                    la beauté de la couture faite main, où chaque point est un geste d'amour 
                    envers l'art de la mode.
                </div>
            </div>
        </div>
    )
}



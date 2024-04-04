import CategoriePortfolio from "./CategoriePortfolio";
import first from "/src/assets/istockphoto-175481578-1024x1024.jpg";
import second from "/src/assets/istockphoto-520137102-1024x1024.jpg";
import firstOne from "/src/assets/rio-lecatompessy-cfDURuQKABk-unsplash.jpg";
import secondOne from "/src/assets/annie-spratt-hzdgFPz1V24-unsplash.jpg"


export default function Portfolio(){
    return(
        <div className="p-5 flex flex-col mb-5 md:px-12 gap-4 2xl:px-28 2xl:gap-8 2xl:mb-10">
            <div className="text-[18px] flex md:justify-center md:items-center md:text-3xl font-semibold 2xl:text-6xl">Découvrez notre Expertise</div>
            <div className="flex flex-col gap-3">
                <CategoriePortfolio num="01" title="Design et Création" paragraphe=" Ce service est au cœur de la maison de couture, où les idées prennent vie. Il comprend les designers, les illustrateurs de mode, et les stylistes qui travaillent sur les concepts, les croquis, et la sélection des tissus." first={first} altone="first image" second={second} alttwo="second image" />
                <CategoriePortfolio num="02" title="Atelier de Couture" paragraphe="C'est l'unité où les pièces de mode sont concrètement réalisées. Elle regroupe les couturières, les brodeuses, les modélistes, et les techniciens de patronage qui travaillent sur la confection des vêtements selon les dessins du service de design." first={firstOne} altone="first image" second={secondOne} alttwo="second image" />
                <CategoriePortfolio num="03" title="Contrôle Qualité" paragraphe=" Ce service s'assure que chaque pièce répond aux standards élevés de la maison en termes de finition et de qualité des matériaux."/>
            </div>

        </div>
    )
}
import CategoriePortfolio from "./CategoriePortfolio";
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import first from "/src/assets/aditya-wardhana-ooZ3a5k7GFQ-unsplash.jpg";
import second from "/src/assets/pablo-arroyo-_SEbdtH4ZLM-unsplash.jpg";


export default function Portfolio(){
    return(
        <div className="p-5">
            <div>See Our Portfolio</div>
            <div className="flex flex-col gap-3">
                <CategoriePortfolio num="01" title="UI/UX Design" paragraphe="Qint is a logistics compagny that was specialized in customized solutions for direct deliveries nationwide and worldwide." first={first} altone="first image" second={second} alttwo="second image" icon={faArrowRight} statut={true}/>
                <CategoriePortfolio num="02" title="Branding Design" paragraphe="Qint is a logistics compagny that was specialized in customized solutions for direct deliveries nationwide and worldwide." first={first} altone="first image" second={second} alttwo="second image" icon={faArrowRight} statut={false}/>
                <CategoriePortfolio num="03" title="Logo Design" paragraphe="Qint is a logistics compagny that was specialized in customized solutions for direct deliveries nationwide and worldwide." first={first} altone="first image" second={second} alttwo="second image" icon={faArrowRight} statut={false}/>
                <CategoriePortfolio num="04" title="Illustration" paragraphe="Qint is a logistics compagny that was specialized in customized solutions for direct deliveries nationwide and worldwide." first={first} altone="first image" second={second} alttwo="second image" icon={faArrowRight} statut={false}/>
                <CategoriePortfolio num="05" title="Development" paragraphe="Qint is a logistics compagny that was specialized in customized solutions for direct deliveries nationwide and worldwide." first={first} altone="first image" second={second} alttwo="second image" icon={faArrowRight} statut={false}/>
            </div>

        </div>
    )
}
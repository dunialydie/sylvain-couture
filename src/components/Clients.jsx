import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import client from "/src/assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg";
import client1 from "/src/assets/mubarak-showole-Ve7xjKImd28-unsplash.jpg";
import client2 from "/src/assets/wedding.jpg";
import client3 from "/src/assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg";


function CarouselComponent() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const text= "Lorsque j'ai fait appel à Sylvain Couture pour la création de ma robe de soirée, je ne m'attendais pas à être autant subjuguée. Non seulement la robe était absolument magnifique, mais le processus de création a été une expérience exceptionnelle. L'équipe a pris le temps d'écouter mes besoins et a su traduire ma vision en réalité."
      const text1= "Travailler avec Sylvain Couture sur plusieurs shootings photo a été un véritable plaisir. Leur capacité à fournir des pièces uniques et sur mesure qui correspondent parfaitement à l'ambiance de chaque projet est simplement remarquable. Leur attention aux détails et leur passion pour l'excellence se reflètent dans chaque création."
      const text2= "Recommander Sylvain Couture à mes clients pour leurs tenues de mariage est devenu une évidence. La qualité de leur travail, leur professionnalisme et leur capacité à matérialiser les rêves des futurs mariés en font un choix incontournable. Chaque couple que j'ai envoyé leur direction est revenu émerveillé et reconnaissant."
      const text3= "La collaboration avec Sylvain Couture pour notre dernière collection a été une expérience révolutionnaire. Leur approche innovante et leur technique impeccable ont permis de donner vie à des pièces qui ont véritablement défini la saison. Ce n'est pas seulement leur talent en couture qui impressionne, mais aussi leur engagement."

  return (
    <div className='flex flex-col p-5 md:flex gap-3 md:px-12 2xl:px-28 2xl:gap-6'>
      <div className='text-2xl font-bold text-center 2xl:text-4xl'>Témoignages</div>
      <Carousel responsive={responsive} className='w-auto rounded-lg bg-[#f5f5f4] text-black gap-6' autoPlay={true} autoPlaySpeed={3000} infinite={true}>
          <Clients title="By our clients" parag={text} auteur="Marie-Claire" poste="Entrepreneure"  src={client} />
          <Clients title="By our clients" parag={text1} auteur="Luc" poste="Photographe de mode"  src={client1} />
          <Clients title="By our clients" parag={text2} auteur="Elie" poste="Wedding planner"  src={client2} />
          <Clients title="By our clients" parag={text3} auteur="Alexandre" poste="Directeur artistique" src={client3} />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

 function Clients(props){
    return(
        <div className='relative  gap-4 p-4  '>
            <div className='relative flex flex-col gap-3'>
                <img src={props.src} alt="client" className='object-cover h-full w-full'/>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className='absolute inset-0 top-36 md:top-44 left-16  gap-3 flex flex-col text-xl 2xl:text-2xl'>
                  <span className='text-white'>{props.auteur}</span>
                  <span className='underline font-bold text-[#cafc01]'>{props.poste}</span>
                </div>
                <div className='p-5 text-center  2xl:text-center'>{props.parag}</div>

            </div>
        </div>
    )
}


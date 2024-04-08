import React from "react";
import '../index.css'
import Slider from "react-slick";
import client from "/src/assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg";
import client1 from "/src/assets/mubarak-showole-Ve7xjKImd28-unsplash.jpg";
import client2 from "/src/assets/wedding.jpg";
import client3 from "/src/assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg";

const people = [
  {
    id: 1,
    name: "Marie-Claire",
    position: "Entrepreneure",
    imageUrl: client,
    thanksMessage: "Je tiens à remercier Sylvain Couture pour la création de ma robe de soirée.",
  },
  {
    id: 2,
    name: "Luc",
    position: "Photographe de mode",
    imageUrl: client1,
    thanksMessage: "Travailler avec Sylvain Couture sur plusieurs shootings photo a été un véritable plaisir.",
  },
  {
    id: 3,
    name: "Elie",
    position: "Wedding planner",
    imageUrl: client2,
    thanksMessage: "Recommander Sylvain Couture à mes clients pour leurs tenues de mariage est devenu une évidence.",
  }, {
    id: 4,
    name: "Alexandre",
    position: "Directeur artistique",
    imageUrl: client3,
    thanksMessage: "La collaboration avec Sylvain Couture pour notre dernière collection a été une expérience révolutionnaire.",
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" px-4 md:px-16 2xl:px-28">
      <Slider {...settings}>
        {people.map((person) => (
          <div key={person.id} className="p-4 ">
            <div className="flex flex-col items-center">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-44 h-44 2xl:w-72 2xl:h-72 object-cover rounded-full border-2 border-gray-300"
              />
              <h2 className="mt-2 text-xl 2xl:text-2xl font-semibold">{person.name}</h2>
              <p className="text-lg 2xl:text-xl text-gray-500 underline">{person.position}</p>
              <p className="mt-2 text-center text-gray-600">{person.thanksMessage}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;





// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import client from "/src/assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg";
// import client1 from "/src/assets/mubarak-showole-Ve7xjKImd28-unsplash.jpg";
// import client2 from "/src/assets/wedding.jpg";
// import client3 from "/src/assets/elizeu-dias-2EGNqazbAMk-unsplash.jpg";


// function CarouselComponent() {
//     const responsive = {
//         superLargeDesktop: {
//           breakpoint: { max: 3000, min: 2000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 2000, min: 1000 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//       const text= "Lorsque j'ai fait appel à Sylvain Couture pour la création de ma robe de soirée, je ne m'attendais pas à être autant subjuguée. Non seulement la robe était absolument magnifique, mais le processus de création a été une expérience exceptionnelle. L'équipe a pris le temps d'écouter mes besoins,su traduire ma vision en réalité."
//       const text1= "Travailler avec Sylvain Couture sur plusieurs shootings photo a été un véritable plaisir. Leur capacité à fournir des pièces uniques et sur mesure qui correspondent parfaitement à l'ambiance de chaque projet est simplement remarquable. Leur attention et leur passion pour l'excellence se reflètent dans chaque création."
//       const text2= "Recommander Sylvain Couture à mes clients pour leurs tenues de mariage est devenu une évidence. La qualité de leur travail, leur professionnalisme et leur capacité à matérialiser les rêves des futurs mariés en font un choix incontournable. Chaque couple que j'ai envoyé leur direction est revenu émerveillé et reconnaissant."
//       const text3= "La collaboration avec Sylvain Couture pour notre dernière collection a été une expérience révolutionnaire. Leur approche innovante et leur technique impeccable ont permis de donner vie à des pièces qui ont véritablement défini la saison. Ce n'est pas seulement leur talent en couture qui impressionne, mais aussi leur engagement."

//   return (
//     <div className='flex flex-col p-5 md:flex gap-3 md:px-12 2xl:px-28 2xl:gap-6'>
//       <div className='text-2xl font-bold text-center 2xl:text-4xl'>Témoignages</div>
//       <Carousel responsive={responsive} arrows={true} className='w-auto rounded-lg  text-black gap-x-6 ' autoPlay={true} autoPlaySpeed={3000} infinite={true}>
//           <Clients title="By our clients" parag={text} auteur="Marie-Claire" poste="Entrepreneure"  src={client} />
//           <Clients title="By our clients" parag={text1} auteur="Luc" poste="Photographe de mode"  src={client1} />
//           <Clients title="By our clients" parag={text2} auteur="Elie" poste="Wedding planner"  src={client2} />
//           <Clients title="By our clients" parag={text3} auteur="Alexandre" poste="Directeur artistique" src={client3} />
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselComponent;


// function Clients(props) {
//   return (
//     <div className='p-4  '>
//       <div className=' shadow-lg bg-[#f5f5f4]'>
//       <div className=' flex flex-col gap-2 items-center   '>
//           <div className='p-4 rounded-full '>
//             <img src={props.src} alt="client" className='hover:opacity-75 rounded-full 2xl:w-72 2xl:h-72'/>
//           </div>
//         <div className='  left-16 gap-1 flex flex-col text-xl 2xl:text-2xl items-center'>
//           <span className='text-black'>{props.auteur}</span>
//           <span className='underline font-bold text-black'>{props.poste}</span>
//         </div>
//         <div className='px-14 py-4 text-center 2xl:text-center'>{props.parag}</div>
//       </div>
//       </div>
     
//     </div>
//   )
// }




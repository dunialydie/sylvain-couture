import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import client from "/src/assets/jason-rai-qBlMxpqFiu8-unsplash.jpg";

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
      const text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

  return (
    <div className='flex flex-col p-5 md:flex gap-3 md:px-12 2xl:px-28 2xl:gap-6'>
      <div className='text-2xl font-bold text-center 2xl:text-4xl'>By our clients</div>
      <Carousel responsive={responsive} className='w-auto rounded-lg bg-[#f5f5f4] gap-6' autoPlay={true} autoPlaySpeed={3000} infinite={true}>
          <Clients title="By our clients" parag={text} auteur="lydie" poste="DG"  src={client} />
          <Clients title="By our clients" parag={text} auteur="lydie" poste="DG"  src={client} />
          <Clients title="By our clients" parag={text} auteur="lydie" poste="DG"  src={client} />
          <Clients title="By our clients" parag={text} auteur="lydie" poste="DG" src={client} />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;

 function Clients(props){
    return(
        <div className='relative  gap-4 p-4  '>
            {/* <div className='text-2xl font-bold text-center'>{props.title}</div> */}
            <div className='flex flex-col gap-3'>
                <img src={props.src} alt="client" className='object-cover h-full w-full'/>
                    <div className='absolute  top-36 md:top-44 left-16 text-white gap-3 flex flex-col text-xl 2xl:text-2xl'>
                        <span>{props.auteur}</span>
                        <span className='underline font-bold'>{props.poste}</span>
                    </div>
                <div className='px-5 text-center md:text-start 2xl:text-center'>{props.parag}</div>

            </div>
        </div>
    )
}


//  function Client(props){
//     return(
//         <div className='flex flex-col gap-4 p-4 bg-slate-200 w-full'>
//             <div className='text-2xl font-bold text-center'>{props.title}</div>
//             <div className='flex'>
//               <div className='flex flex-col gap-3 w-full'>
//                 <div className='px-5 md:h-11'>{props.parag}</div>
//                 <div className=' text-white gap-3 flex flex-col text-xl'>
//                   <span>{props.auteur}</span>
//                   <span className='underline font-bold'>{props.poste}</span>
//                 </div>
//               </div>
//               <img src={props.src} alt="client" className='md:h-44 '/>

//             </div>
            

//         </div>
//     )
// }
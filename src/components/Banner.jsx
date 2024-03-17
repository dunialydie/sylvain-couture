import {faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const repetition= (message, time)=>{
    let tab=[];
    for(let i=0; i< time; i++){
        tab= [...tab, ...message]
    }
    return tab;
}

export default function Banner(){
    const messages = ["Let's Talk Now"];
    const config= repetition(messages,5)
    return (
    <div className="overflow-hidden h-12 bg-[#cafc01] flex items-center mt-6 2xl:h-24">
      <div className="banner whitespace-nowrap  py-2 animate-scrollBanner ease-linear infinite">
        {config.map((message, index) => (
          <span key={index} className="text-black text-lg duration-[40s] font-medium p-3 2xl:text-3xl">{message} - <FontAwesomeIcon icon={faFaceSmile} /> </span>
        ))}
      </div>
    </div>
    );
  }
  
  
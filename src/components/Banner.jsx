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
    const config= repetition(messages,10)
    return (
    <div className="banner overflow-hidden h-20 bg-lime-400 flex items-center mt-6 border-2 border-black">
      <div className="whitespace-nowrap px-4 py-2 animate-scrollBanner duration-[10s] ease-linear infinite">
        {config.map((message, index) => (
          <span key={index} className="text-black text-lg ">{message} - <FontAwesomeIcon icon={faFaceSmile} /> </span>
        ))}
      </div>
    </div>
    );
  }
  
  
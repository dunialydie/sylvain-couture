import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {faAngleDown ,faAngleUp} from '@fortawesome/free-solid-svg-icons';

export default function CategoriePortfolio(props){
    const [blocOpen,setOpen]= useState(false)
    return (
        <div className="flex flex-col gap-4 items-center border-b-2" style={props.style}>
            <div className='flex justify-between px-5 w-full border-2 border-yellow-500'>
                <span className=' text-slate-500'>{props.num}</span>
                { blocOpen ? (<FontAwesomeIcon icon={faAngleDown} className={`rounded-full p-2 border-2 ${blocOpen ? 'bg-black text-white' : 'border-black'} cursor-pointer`} onClick={()=> setOpen(!blocOpen)}/>) : (<FontAwesomeIcon icon={faAngleUp} className={`rounded-full p-2 border-2 ${blocOpen ? 'bg-black text-white' : 'border-black'} cursor-pointer`} onClick={()=> setOpen(!blocOpen)}/>)}
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>{props.title}</h1>
                {blocOpen && <p className='text-slate-500'>{props.paragraphe}</p>}
            </div>
            <div className='flex'>
                {blocOpen && <img src={props.first} alt={props.altone} className='w-44 h-48 ' />}
                {blocOpen && <img src={props.second} alt={props.alttwo} className='w-44 h-48 ' />}
            </div>
        </div>
    )
}
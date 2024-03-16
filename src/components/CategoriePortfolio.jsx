import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {faAngleDown ,faAngleUp} from '@fortawesome/free-solid-svg-icons';

export default function CategoriePortfolio(props){
    const [blocOpen,setOpen]= useState(false)
    return (
        <div className="flex flex-col gap-4 items-center md:items-start border-b-2 ">
            <div className='flex justify-between px-5 w-full items-center 2xl:text-3xl'>
                <span className=' text-slate-500'>{props.num}</span>
                
                { blocOpen ? (<FontAwesomeIcon icon={faAngleDown} className={`rounded-full p-2 border-2 2xl:w-14 2xl:h-14 ${blocOpen ? 'bg-black text-white' : 'border-black'} cursor-pointer`} onClick={()=> setOpen(!blocOpen)}/>) : (<FontAwesomeIcon icon={faAngleUp} className={`rounded-full p-2 border-2 2xl:h-14 2xl:w-14 ${blocOpen ? 'bg-black text-white' : 'border-black'} cursor-pointer`} onClick={()=> setOpen(!blocOpen)}/>)}
            </div>
            <div className='flex flex-col gap-y-3 items-center md:px-8 md:flex-row '>
                <div className='flex md:flex-col gap-3 md:basis-5/7 md:pb-5'>
                    <h1 className='text-3xl'>{props.title}</h1>
                    {blocOpen && <p className='text-slate-500 md:text-[12px]'>{props.paragraphe}</p>}
                </div>
                <div className='flex items-center md:px-8 md:items-start md:basis-2/7'>
                    {blocOpen && <img src={props.first} alt={props.altone} className='w-44 h-48 md:w-40 md:h-20  shadow-lg' />}
                    {blocOpen && <img src={props.second} alt={props.alttwo} className='w-44 h-48 md:w-40 md:h-20 shadow-lg' />}
                </div>
            </div>
            
        </div>
    )
}
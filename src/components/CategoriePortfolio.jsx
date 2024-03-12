import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function CategoriePortfolio(props){
    return (
        <div className="flex flex-col gap-4 items-center" statut={props.statut}>
            <span className=' text-slate-500'>{props.num}</span>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>{props.title}</h1>
                <p className='text-slate-500'>{props.paragraphe}</p>
            </div>
            <div className='flex'>
                <img src={props.first} alt={props.altone} className='w-44 h-48' />
                <img src={props.second} alt={props.alttwo} className='w-44 h-48' />
            </div>
            <FontAwesomeIcon icon={props.icon} className="rounded-full p-2 border-2 border-black"/>

        </div>
    )
}
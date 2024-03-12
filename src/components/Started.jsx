import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Started(props){

    return (
        <div className='bg-slate-200 hover:bg-lime-400 rounded-lg flex gap-6 items-center p-5'>
            <div className='bg-white rounded-full flex items-center w-12 h-10 p-4 justify-center'>
                <FontAwesomeIcon icon={props.icon} className="rounded-full p-2"/>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold text-[18px]'>
                    {props.title}
                </div>
                <p className='text-[16px] text-slate-500'>
                    {props.paragraphe}
                </p>
            </div>
        </div>
    )
}
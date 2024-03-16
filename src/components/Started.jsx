import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Started(props){

    return (
        <div className='bg-[#f5f5f4] hover:bg-[#cafc01] rounded-lg flex gap-6 md:gap-4 items-center p-5 md:px-3 md:py-5 2xl:px-6 2xl:py-10 2xl:w-full 2xl:gap-8'>
            <div className='bg-white rounded-full flex items-center w-10 h-8 p-4 md:p-0 justify-center basis-1/7 2xl:w-28 2xl:h-16 2xl:basis-2/7'>
                <FontAwesomeIcon icon={props.icon} className="rounded-full p-2 2xl:h-6 2xl:w-8"/>
            </div>
            <div className='flex flex-col gap-3 basis-6/7 2xl:gap-5 2xl:basis-5/7'>
                <div className='font-bold text-[18px] md:text-[16px] 2xl:text-2xl'>
                    {props.title}
                </div>
                <p className='text-[16px] text-slate-500 md:text-[10px] 2xl:text-lg'>
                    {props.paragraphe}
                </p>
            </div>
        </div>
    )
}
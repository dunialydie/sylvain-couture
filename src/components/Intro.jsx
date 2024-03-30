import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Buttons from "./Buttons";

export default function Intro(props){
    return (
        <div className="flex flex-col items-center gap-3 md:items-start md:px-12 md:w-full px-4 2xl:px-28">
            <div className="text-[18px] md:text-[12px] 2xl:text-2xl">
                {props.title}
            </div>
            <div className="flex md:flex-row md:justify-between w-full md:content-end flex-col gap-4 items-center">
                <div className="flex flex-col text-3xl col-span-1  font-semibold md:text-4xl 2xl:text-6xl 2xl:font-medium 2xl:gap-5">
                    <span>{props.titleOne}</span>
                    <span>{props.titleTwo}</span>
                </div>
                <div className="flex items-center gap-1 border border-black rounded-full mb-3 md:mb-0 w-auto md:mt-10 px-2 2xl:px-8 2xl:gap-2">
                    <Buttons style='px-1 md:text-[12px] py-3 2xl:text-2xl' name={props.name}/>
                    <FontAwesomeIcon icon={faArrowRight} className="rounded-full 2xl:text-2xl"/>
                </div>
            </div>
                
        </div>
    )
}
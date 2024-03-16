export default function FooterQuestions(props){
    return(
        <div className="flex flex-col gap-1">
            <div className="font-bold text-white">{props.title}</div>
            <div className="flex flex-col text-gray-400 md:text-[12px] md:gap-2">
                <span>{props.assone}</span>
                <span>{props.asstwo}</span>
                <span>{props.assthree}</span>
                <span>{props.assfour}</span>
            </div>
        </div>
    )
}
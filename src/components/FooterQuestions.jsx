export default function FooterQuestions(props){
    return(
        <div className="flex flex-col gap-1 2xl:gap-3">
            <div className="font-bold text-white 2xl:text-2xl">{props.title}</div>
            <div className="flex flex-col text-gray-400 md:text-[12px] md:gap-2 2xl:text-xl 2xl:gap-4">
                <span>{props.assone}</span>
                <span>{props.asstwo}</span>
                <span>{props.assthree}</span>
                <span>{props.assfour}</span>
            </div>
        </div>
    )
}
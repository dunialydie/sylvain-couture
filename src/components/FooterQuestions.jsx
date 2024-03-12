export default function FooterQuestions(props){
    return(
        <>
            <div className="font-bold text-white">{props.title}</div>
            <div className="flex flex-col text-gray-400">
                <span>{props.assone}</span>
                <span>{props.asstwo}</span>
                <span>{props.assthree}</span>
                <span>{props.assfour}</span>
            </div>
        </>
    )
}
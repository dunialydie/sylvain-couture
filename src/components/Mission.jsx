export default function Mission(props){
    return (
        <div className="bg-slate-200 hover:bg-lime-400 rounded-lg p-5 flex flex-col gap-3">
            <p className="underline">{props.title}</p>
            <div className="flex flex-col ">
                <span className="font-bold text-xl">{props.body} </span>
                <span className="font-bold text-xl">{props.part} </span>
            </div>
            <p className="text-[14px]">{props.footer} </p>
        </div>
    )
}
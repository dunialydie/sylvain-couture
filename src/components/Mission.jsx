export default function Mission(props){
    return (
        <div className="bg-[#f5f5f4] hover:bg-[#cafc01] rounded-lg p-5 flex flex-col gap-3 md:px-8 md:gap-5 2xl:gap-10 2xl:p-16">
            <p className="underline text-[18px] md:text-[14px] 2xl:text-2xl">{props.title}</p>
            <div className="flex flex-col font-bold text-xl md:text-2xl 2xl:text-5xl 2xl:gap-3">
                <span className="">{props.body} </span>
                <span className="">{props.part} </span>
            </div>
            <p className="text-[16px] md:text-[11px] 2xl:text-xl">{props.footer} </p>
        </div>
    )
}
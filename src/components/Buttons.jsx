export default function Buttons(props){
    return <button type ={props.type || 'button'} className={props.style} onClick={props.onClick}>
                {props.name}
                {props.children}
            </button>
}



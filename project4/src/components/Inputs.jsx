import { createSignal } from "solid-js";
import Card from "./Card";



function Inputs(props){
    const [info, setInfo] = createSignal("");

    return (
        <>
            <label htmlFor={props.id}  class={"form-label"}> {props.name} </label>
            <input 
                type="text"
                class={"form-control"} 
                id={props.id}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                required
                value={info()}
                onInput={(event) => setInfo( event.target.value )}
            />                
        </>
    );

}

export default Inputs;
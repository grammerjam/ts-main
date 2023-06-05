import { createEffect, createSignal } from "solid-js";
import Card from "./Card";



function Inputs(props){
    const [info, setInfo] = createSignal("");   

    const test =() =>{
        return <Card information={info} />;
    }

    return (
        <>
            <label htmlFor={props.id} class={"form-label ms-5"}> {props.name} {info} </label>
            <input 
                type="text"
                class={"form-control w-75 ms-5"} 
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
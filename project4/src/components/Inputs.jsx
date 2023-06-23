import { createSignal } from "solid-js";
import { useCardContext } from "../context/CardContext";
import {cardInfo, setCardInfo} from "../App"

function Inputs(props){
    // signal to get info from ith input tag
    const {items,setItems} = useCardContext()
    const [info, setInfo] = createSignal("");

    setItems(info)

    return (
        <>
            <label htmlFor={props.id} class={"form-label ms-5"}> {props.name}  </label>
            <input
            // input for props  
                type="text"
                class={"form-control w-75 ms-5"} 
                id={props.id}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                pattern={props.pattern}
                required
                value={info()}
                onInput={(event) => setInfo( event.target.value )}
            /> 
            {/* Validation section  */}
            <div class="invalid-feedback ms-5">
                {props.error} 
            </div>

        </>
    );

}

export default Inputs;
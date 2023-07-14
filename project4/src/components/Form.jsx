import styles from './Form.module.css'
// import Inputs from "../components/Inputs"
import { A } from '@solidjs/router'
import { render } from "solid-js/web";
import { createSignal } from "solid-js"; 
import { createStore } from "solid-js/store";
import {useForm} from "../components/Validation";
import Card from './Card';
import Visa from '../assets/images/visa-logo.png'
import Amex from '../assets/images/amex-logo.png'



// set card number on card and add spaces
function setCardNumbers(value, code){

    if(value != "") {
        value = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
        document.getElementById("inputCardNumber").value = value;
    }
    if(value[0] == "4"){
        document.getElementById("cardImg").setAttribute("src", Visa)
    }
    else if(value[0] == "3"){
        document.getElementById("cardImg").setAttribute("src", Amex)
    }
    else {
        document.getElementById("cardImg").setAttribute("src", "")
    }
    
}

export const [cardName, setCardName] = createSignal("Jane Appleseed");
export const [cardNumber, setCardNumber] = createSignal("0000 0000 0000 0000");
export const [cardMonth, setCardMonth] = createSignal("00");
export const [cardYear, setCardYear] = createSignal("00");
export const [cardCvc, setCardCvc] = createSignal("000");
export const [cardImg, setCardImg] = createSignal("");



function Form() {

    const userNameExists = async ({ value }) => {
        const exists = await fetchUserName(value);
        return exists && `${value} is already being used`;
        };

        const { validate, formSubmit, errors } = useForm({
            errorClass: "error-input"
          });

    const ErrorMessage = (props) => <span class="error-message">{props.error}</span>;

    return (
           
        <>
            <div className="col-md-8 px-5">

                <form use:formSubmit action="/new_url" method="POST" class="needs-validation " novalidate>
                <label class="form-label ms-5"> CARDHOLDER NAME </label>
                    {/* Card holder Name */}
                    <input id="inputCardHolder"
                        class="form-control w-75 ms-5"
                        maxLength="40"
                        placeholder="e.g Jane Appleseed"
                        pattern="^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)"
                        oninput={(event) => setCardName( event.target.value )}
                        use:validate={[userNameExists]}
                        required
                    />
                    <div class="invalid-feedback ms-5">
                    "Please input first and last name"
                    </div>

                    {/* Card number */}
                    <label class="form-label ms-5"> CARD NUMBER </label>
                    <input id="inputCardNumber"
                        class="form-control w-75 ms-5"
                        maxLength="19"
                        placeholder="e.g 1234 5678 9123 0000"
                        error="Please input a valid card number"
                        pattern="^[0-9\s]{13,19}$"
                        oninput={(event) => setCardNumbers( event.target.value )}
                    />

                    {/* Section for 3 buttons */}
                    <div className="container-fluid g-0">
                        <div className="row row-cols-1">

                            {/* month */}
                            <div className="col-3 ">
                            <label class="form-label ms-5">EXP.DATE</label>
                                <input id="inputMonth"
                                    class="form-control w-75 ms-5"
                                    maxLength="2"
                                    placeholder="MM"
                                    error="Invalid month"
                                    pattern="^0[1-9]|1[0-2]$"
                                    onInput={(event) => setCardMonth( event.target.value )}
                                />
                            </div>

                            {/* Year */}
                            <div className="col-3">
                            <label class="form-label ms-5">(MM/YY)</label>
                                <input id="inputYear"
                                    class="form-control w-75 ms-5"
                                    maxLength="2"
                                    placeholder="YY"
                                    error="Invalid year"
                                    pattern="^[2-9][3-9]$"
                                    onInput={(event) => setCardYear( event.target.value )}
                                />
                            </div>

                            {/* CVC */}
                            <div className="col-4">
                            <label class="form-label ms-5">CVC </label>
                                <input id="inputCvc"
                                    class="form-control w-75 ms-5"
                                    maxLength="3"
                                    placeholder="e.g 123"
                                    error="Invalid CVC"
                                    pattern="^[0-9][0-9][0-9]$"
                                    onInput={(event) => setCardCvc( event.target.value )}
                                />
                            </div>

                        </div>

                        {/* Button for submit */}
                        <div class="col-9 ms-5">
                            <button type="submit" class="btn btn-primary w-100 my-4">Confirm</button>
                            <A href='/complete' class="btn btn-secondary w-100 my-4">Confirm</A>
                        </div>

                    </div>

                </form>
            </div>
            
        </>
    )
}

export default Form;
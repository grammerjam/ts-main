import styles from './Form.module.css'
import Inputs from "../components/Inputs"
import { A } from '@solidjs/router'
import Card from './Card'

function Form() {

    return (
        <>
            <div className="col-md-8 px-5">

                <form action="" class="needs-validation " novalidate>

                    {/* Card holder Name */}
                    <Inputs id="inputCardHolder"
                        name="CARDHOLDER NAME"
                        maxLength="40"
                        placeholder="e.g Jane Appleseed"
                        error="Please input first and last name"
                        pattern="^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)"
                    />

                    {/* Card number */}
                    <Inputs id="inputCardNumber"
                        name="CARD NUMBER"
                        maxLength="19"
                        placeholder="e.g 1234 5678 9123 0000"
                        error="Please input a valid card number"
                        pattern="^[0-9\s]{13,19}$"
                    />

                    {/* Section for 3 buttons */}
                    <div className="container-fluid g-0">
                        <div className="row row-cols-1">

                            {/* month */}
                            <div className="col-3 ">
                                <Inputs id="inputMonth"
                                    name="EXP.DATE"
                                    maxLength="2"
                                    placeholder="MM"
                                    error="Invalid month"
                                    pattern="^0[1-9]|1[0-2]$"
                                />
                            </div>

                            {/* Year */}
                            <div className="col-3">
                                <Inputs id="inputYear"
                                    name="(MM/YY)"
                                    maxLength="2"
                                    placeholder="YY"
                                    error="Invalid year"
                                    pattern="^[2-9][3-9]$"
                                />
                            </div>

                            {/* CVC */}
                            <div className="col-4">
                                <Inputs id="inputCvc"
                                    name="CVC"
                                    maxLength="3"
                                    placeholder="e.g 123"
                                    error="Invalid CVC"
                                    pattern="^[0-9][0-9][0-9]$"
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
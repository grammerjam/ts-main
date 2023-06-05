import styles from './Form.module.css'
import Inputs from "../components/Inputs"
import { A } from '@solidjs/router'


function Form() {

    return (
        <>
            <div className="col-md-8 px-5">

                <form action="" class="needs-validation ">
                    <Inputs id="inputCardHolder"
                        name="CARDHOLDER NAME"
                        maxLength="40"
                        placeholder="e.g Jane Appleseed"
                    />
                    <Inputs id="inputCardNumber"
                        name="CARD NUMBER"
                        maxLength="19"
                        placeholder="e.g 1234 5678 9123 0000"
                    />

                    <div className="container-fluid g-0">
                        <div className="row row-cols-1">

                            <div className="col-3 ">
                                <Inputs id="inputMonth"
                                    name="EXP.DATE"
                                    maxLength="2"
                                    placeholder="MM"
                                />
                            </div>

                            <div className="col-3">
                                <Inputs id="inputYear"
                                    name="(MM/YY)"
                                    maxLength="2"
                                    placeholder="YY"
                                />
                            </div>

                            <div className="col-4">
                                <Inputs id="inputCvc"
                                    name="CVC"
                                    maxLength="3"
                                    placeholder="e.g 123"
                                />
                            </div>

                        </div>

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
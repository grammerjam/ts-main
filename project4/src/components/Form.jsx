import Inputs from "./Inputs"
import logo from '../assets/images/Team_spark_black.png'


function Form(){


    return(
        <>
            <div class="col-8">
                <img src={logo} alt="" />

                <form action="" class="needs-validation">
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

                    <div className="row ">
                        <div className="col">
                            <Inputs id="inputMonth"
                                name="EXP. DATE"
                                maxLength="2" 
                                placeholder="MM"
                            />
                            <Inputs id="inputYear"
                                name="(MM/YY)"
                                maxLength="2" 
                                placeholder="YY"
                            />
                            <Inputs id="inputCvc"
                                name="CVC"
                                maxLength="3" 
                                placeholder="e.g 123"
                            />
                        </div>
                    </div>
                    
                    
                </form>
                
            </div>          

        </>
    )
}

export default Form;
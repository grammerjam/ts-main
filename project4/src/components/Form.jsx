import Inputs from "./Inputs"
import Test from "./Test";


function Form(props){

    function handleChange() {
        console.log("function used");
      }

    return(
        <>
            <div class="col-8 ">
                
                <p onClick={handleChange}>TESTESTESTSESTSTESETSET</p>

                <form action="" class="needs-validation">
                    

                    <Test>
                        <label for="inputCardHolder" class="form-label ms-5">CARDHOLDER NAME</label>
                        <input type="text" class="form-control w-75 ms-5" placeholder="e.g Jane Appleseed" id="inputCardHolder" maxlength="40" pattern="^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)" required/>
                        <div class="invalid-feedback ms-5">
                            Please input first and last name  
                        </div>
                    </Test>

                    <Test>
                        <label for="inputCardHolder" class="form-label ms-5">hsgavsdjdjhE</label>
                        <input type="text" class="form-control w-75 ms-5" placeholder="e.g Jane Appleseed" id="inputCardHolder" maxlength="40" pattern="^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)" required/>
                        <div class="invalid-feedback ms-5">
                            Please input first and last name
                        </div>
                    </Test>
                </form>
                <button class="btn btn-primary">confirm</button>
                {/* <div class={props.class}> jshbfksjksjdksj</div> */}
            </div>


        </>
    )
}

export default Form;
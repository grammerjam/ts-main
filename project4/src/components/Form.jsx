import Inputs from "./Inputs"


function Form(){

    function handleChange() {
        console.log("function used");
      }

    return(
        <>
            <div className="col-8 ">
                
                <p onClick={handleChange}>TESTESTESTSESTSTESETSET</p>

                <form action="" className="needs-validation">
                    <Inputs type="text"/> 
                    <Inputs type="text"/> 
                    <Inputs type="text"/> 
                    <Inputs type="text"/> 
                    <Inputs type="text"/> 
                </form>
                <button className="btn btn-primary">confirm</button>
            </div>


        </>
    )
}

export default Form;
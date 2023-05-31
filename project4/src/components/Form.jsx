import Inputs from "./Inputs"


function Form(){

    // function handleChange(event) {
    //     console.log(event.target.name);
    //   }

    return(
        <>
            <div className="col-8 ">
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
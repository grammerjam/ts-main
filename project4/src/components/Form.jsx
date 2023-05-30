import Inputs from "./Inputs"

function Form(){
    return(
        <>
            <div className="col-8">
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
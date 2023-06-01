
function Label(props){
    return (
        <>
            <label htmlFor={props.label} class={props.class}> 
                test
            </label>
        </>
    );
}


function Inputs(props){
    return (
        <>
            <div class="col">
                <Label label={"inputcard"} class={"form-label text-center"} />
                <input 
                    type={props.type} 
                    class={"form-control"} 
                    // placeholder={props.placeholder}
                    // maxLength={props.maxLength}

                />
                
            </div>
        </>
    );
}

export default Inputs;
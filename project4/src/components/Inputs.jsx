
function Label(props){
    return (
        <>
            <label htmlFor={props.label} className={props.className}> 
                test
            </label>
        </>
    );
}


function Inputs(props){
    return (
        <>
            <div className="col">
                <Label label={"inputcard"} className={"form-label text-center"} />
                <input 
                    type={props.type} 
                    className={"form-control"} 
                    // placeholder={props.placeholder}
                    // maxLength={props.maxLength}

                />
                
            </div>
        </>
    );
}

export default Inputs;
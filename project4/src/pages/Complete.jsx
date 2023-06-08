import { A } from "@solidjs/router";
import  style  from './Complete.module.css';


export default function Complete(){
    return(

        <div class="col-md-8 px-5">
            <div class="container">
              <div class={style.completeForm}>
                <div class="row">
                    <div class="col text-center ms-5">
                      <div class={style.completedCircle}>
                        <p class={style.checkMark}></p>
                      </div>
                        <p>Thank you</p>
                        <p>We added your card details</p>
                    </div>
                </div>
                  <div class="col ms-5 px-5 text-center ">

                    {/* A tag for button that allows you to go to Home page. */}
                    <A type="submit" href="/" class="btn btn-primary w-50 my-4 px-5">Confirm</A>
                  </div>
              </div>
            </div>
        </div>
    );
}
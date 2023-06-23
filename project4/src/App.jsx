import Card from './components/Card';
import DesktopGradiant from './assets/images/bg-main-desktop.png'
import MobileGraidiant from './assets/images/bg-main-mobile.png'
import { Routes, Route} from "@solidjs/router"
import Home from './pages/Home';
import Complete from './pages/Complete';
import logo from './assets/images/Team_spark_black.png'
import styles from './App.module.css'
import { createSignal } from 'solid-js';

export const [cardInfo, setCardInfo] = createSignal({
  name:"",
  number:"",
  month: "",
  year:"",
  cvc:""
});


function App() {

  return (
    <>
      <div class="container-fluid">
        {/* logo section */}
        <div class="text-center me-5" >
          <img src={logo} class="img-fluid w-50 position-absolute logo" />
        </div>

        <div class="row">
          <div class="col-md-4 g-0">
            {/* images and graident  */}
            <img class="img-fluid float-start d-none d-md-block" src={DesktopGradiant} />
            <img class="img-fluid float-start d-sm-block d-md-none w-100 h-75" src={MobileGraidiant} />
          </div>
          
          <Card cardInfo={cardInfo}
                
          />

          {/* Routes for home and completed pages */}
          <Routes>
            <Route path="/" component={Home}/>
            <Route path="/complete" component={Complete}/>
          </Routes>

        </div>
      </div>
      <footer class="text-center">
        Start date: 5/28/23 2pm <br />
        End date:
      </footer>
    </>
  );
}

export default App;

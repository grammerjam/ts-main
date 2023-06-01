import Form from './components/Form';
import Header from './components/Header';
import logo from './assets/images/Team_spark_black.png'
import Card from './components/Card';

function App() {
  
  return (
    <>
    <div class="container-fluid text-center">
        <img src={logo} alt="" />
      <div class="row">
        <div class="col-4 g-0">
        <img class="img-fluid float-start vh-100 w-100 position-relative" src="./src/assets/images/bg-main-desktop.png" alt="" />

        </div>
      <Form  class="something"/>
      <Card/>
      </div>
    </div>
    <footer class="text-center">
      start date: 5/28/23 2pm <br />
      end date:
    </footer>
    </>
  );
}

export default App;

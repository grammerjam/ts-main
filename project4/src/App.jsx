import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  
  return (
    <>
    <div className="container-fluid text-center">
      <header className ="position-relative">
        <img src="src/assets/images/Team_spark_black.png" alt="" />
      </header>
      <div className="row">
        <div className="col-4 g-0">
        <img className="img-fluid float-start vh-100 w-100 position-relative" src="./src/assets/images/bg-main-desktop.png" alt="" />

        </div>
      <Form/>
      <Card/>
      </div>
    </div>
    <footer className="text-center">
      start date: 5/28/23 2pm <br />
      end date:
    </footer>
    </>
  );
}

export default App;

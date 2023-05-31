import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  
  return (
    <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src="./src/assets/images/bg-main-desktop.png" alt="" />
        </div>
      <Form/>
      <Card/>
      </div>
    </div>
    </>
  );
}

export default App;

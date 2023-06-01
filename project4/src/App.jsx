import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Card';
import DesktopGradiant from './assets/images/bg-main-desktop.png'

function App() {
  
  return (
    <>
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-4 g-0">
        <img class="img-fluid float-start vh-100 w-100 position-relative" src={DesktopGradiant} alt="" />

        </div>
      <Form  class="something"/>
      <Card/>
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

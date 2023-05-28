import styles from './App.module.css';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <div class={styles.test}> hello world</div>
    </>
  );
}

export default App;

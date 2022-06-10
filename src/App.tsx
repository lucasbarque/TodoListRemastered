import './global.css';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Tasks />
      </div>
    </>
  );
}

export default App;

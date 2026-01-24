import logo from './logo.svg';
import './App.css';
import Bienvenida from './components/bienvenida';
import NavBarPrincipal from './components/navbar';

function App() {

  return (
    <div>
      <NavBarPrincipal />
      <div className='container'>
        <Bienvenida />
      </div>
    </div>
  );
}

export default App;

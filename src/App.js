import logo from './logo.svg';
import './App.css';
import Bienvenida from './components/bienvenida';
import NavBarPrincipal from './components/navbar';
import CarouselPrincipal from './components/carousel';

function App() {

  return (
    <div>
      <NavBarPrincipal/>
      <CarouselPrincipal/>
      <div className='container'>
        <Bienvenida />
      </div>
    </div>
  );
}

export default App;

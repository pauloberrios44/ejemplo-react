import react from 'react';
import Bienvenida from '../components/bienvenida';
import NavBarPrincipal from '../components/navbar';
import CarouselPrincipal from '../components/carousel';

function Home() {
    return (
        <div>
            <NavBarPrincipal />
            <CarouselPrincipal />
            <div className='container'>
                <Bienvenida />
            </div>
        </div>
    );
}

export default Home;
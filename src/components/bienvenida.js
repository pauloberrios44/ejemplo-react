import react from 'react';
import CarouselPrincipal from './card';
import CardProducto from './card';

function Bienvenida() {

    return (
        <div>
            <div className='row'>
                <div className='col-xl-12'>
                    <h2 className='text-center'>Productos destacados</h2>
                </div>
            </div>

            <div className='row'>
                <div className='col-xl-3'>
                    <CardProducto titulo='Notebook Gamer Nitro 5' desc='Gaming F16 Intel Core 5' ruta='/images/notebook1.jpg'/>
                </div>
                <div className='col-xl-3'>
                    <CardProducto titulo='Notebook Gamer Asus TUF' desc='Gaming Ultra AMD Ryzen 7'/>
                </div>
                <div className='col-xl-3'>
                    <CardProducto titulo='Notebook Gamer HP Proliant' desc='Intel Core 9+'/>
                </div>
                <div className='col-xl-3'>
                    <CardProducto titulo='Notebook Gamer HP Proliant' desc='Intel Core 9+'/>
                </div>
            </div>
        </div>

    );

}

export default Bienvenida;
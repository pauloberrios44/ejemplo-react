import react from 'react';

function Bienvenida() {

    const nombreAlumno = 'Andres Lopez';
    const edad = 12;

    return (
        <div className='row mt-3'>
            <div className='col-xl-6'>
                <h2>Titulo principal</h2>
                <h4>{nombreAlumno}</h4>
                <p>La edad del alumno es: {edad}</p>
            </div>

            <div className='col-xl-6'>
                <p>ldu sisaoisapiosaiodsaoiasioaspiodusaodiusapdiuas doisuadopuidouia</p>
            </div>
        </div>
    );

}

export default Bienvenida;
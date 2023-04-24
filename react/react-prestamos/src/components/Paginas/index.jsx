
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';

export default function Landing() {

    let inputs = document.querySelectorAll(".valor");
    // console.log(input.dataset.cambio);
    inputs.forEach(input => {
        // input.value = input.dataset.cambio;
        console.log(input.dataset.cambio);
        console.log(input.value);
    });

    function valorModificado(input) {
        // let factor = input.value / input.dataset.cambio;

        // inputs.forEach(input => {
        //     input.value = input.dataset.cambio;
        //     console.log(input.value);
        // });
        // console.log("hola");
        // console.log(input.value);
    }

    return (
        <Estilob>
            <div className='contenedor'>
                <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                        alt='...'
                    >
                        <h5>First slide label</h5><button id='botones'>Dato</button>
                        <p id='texto'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                        alt='...'
                    >
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                        alt='...'
                    >
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                </MDBCarousel>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>

                    <div id='contenedor'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque? Et natus accusamus debitis.
                            Similique modi beatae soluta id temporibus delectus? Similique qui facere doloremque quaerat ratione non nobis dolorem?</p>
                    </div>


            </div>


            <div id='Conversor'>
                <h1 id='titulo'>Conversor de Divisas</h1>
                <div id="divisa">
                    <div id="nombre">Valor en MXN</div>
                    <input id="valor" type="text" defaultValue={1} data-cambio="1" step="0.25" />
                </div>

                <div id="divisa">
                    <div id="nombre">Dólares</div>
                    <input className="valor" type="number" defaultValue={1} data-cambio="0.055568" step="0.25" onChange={valorModificado(this)} />
                </div>

                <div id="divisa">
                    <div id="nombre">Euros</div>
                    <input className="valor" type="number" defaultValue={1} data-cambio="0.050564" step="0.25" onChange={valorModificado(this)} />
                </div>

                <div id="divisa">
                    <div id="nombre">Yenes</div>
                    <input className="valor" type="number" defaultValue={1} data-cambio="7.44947" step="0.25" onChange={valorModificado(this)} />

                </div>


            </div>
        </Estilob>

    );
}


const Estilob = styled.body`

#botones{
    background-color: blue;
    color: #FFF;
    border-radius: 20px;
    overflow: hidden;
}

#contenidos{
    box-shadow: 0 2px 5px rgba(0, 0, 0, 1);
    margin: 5rem auto;
    margin-top: 1rem;
}

#contenedor {
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 2px 5px #b70c0c;
    overflow: hidden;
    width: 500px;
    height: 300px;
    max-width: 100%;
    margin: auto;
    margin-top: 2rem;
    text-align: center;
    p{
        margin: 1rem;
        margin-top: 2rem;
    }
}

#texto{
    margin: 1rem;
}

#Conversor{
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0 2px 5px #980000;
    overflow: hidden;
    width: 400px;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
}

#divisa {
    margin-top: 1rem;
    margin: 2rem;
    display: grid;                    /* cuadrícula */
    grid-template-columns: 50% 50%;   /* 2 columnas iguales */
    margin-bottom: 15px;
    background: rgb(37, 169, 209); 
    color: white;
    margin-bottom: 3rem;
}

#titulo{
    margin: 1rem;
}

#nombre{
    padding: 5px;
    font-size: 16px;
    align-self: center;  /* alinear elemento al centro en altura */
    text-align: center;  /* alinear texto al centro en ancho */
}

.valor{
    padding: 5px;
    font-size: 16px;
    align-self: center;  /* alinear elemento al centro en altura */
    text-align: center;  /* alinear texto al centro en ancho */
}


`
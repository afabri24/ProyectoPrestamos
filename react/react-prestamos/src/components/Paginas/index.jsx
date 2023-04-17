

// export default function Landing() {
//     return (
//         <h2>Pagina Landing (public)</h2>
//     );

// }

//

import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styled from 'styled-components';

export default function Landing() {
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
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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


            </div>
        </Estilob>
    );
}


const Estilob = styled.body`

#contenedor, #contenedorTabla {
     background-color: #FFF;
     border-radius: 20px;
     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
     overflow: hidden;
     width: 400px;
     max-width: 100%;
     margin: 30px;
}

`
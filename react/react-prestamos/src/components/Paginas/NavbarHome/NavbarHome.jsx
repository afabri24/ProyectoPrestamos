import React, { useState } from 'react';
import {
  MDBNavbar, MDBContainer, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink,
  MDBNavbarToggler, MDBNavbarBrand, MDBCollapse
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdbreact';
// import styled from 'styled-components';

export default function NavbarHome() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavRight] = useState(false);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


      <MDBNavbar sticky expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>PrestaMax</MDBNavbarBrand>
          <MDBNavbarToggler type='button' data-target='#navbarColor02' aria-controls='navbarColor02' aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}>

            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>

            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='/Home'><i className="fa fa-fw fa-home"></i> Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/simulacion'><i className="fa fa-fw fa-calculator"></i> Simulacion
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='/Contacto'><i className="fa fa-envelope"></i> Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            {/* right */}

            <MDBCollapse navbar show={showNavRight}>
              <MDBNavbarNav right fullWidth={false} className='mb-3 mb-lg-0'>

                <MDBNavbarItem>
                  <MDBNavbarLink href='/Login'> Login
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}


// const Estilos = styled.body`
// .active{
//   background-color: #fafafa;
// }
// `


// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBNavbarBrand,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  
//   return (
//     <>
//       <MDBNavbar expand='lg' dark bgColor='dark'>
//         <MDBContainer fluid>
//           <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarColor02'
//             aria-controls='navbarColor02'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavColorSecond(!showNavColorSecond)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//           <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
//             <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//               <MDBNavbarItem className='active'>
//                 <MDBNavbarLink aria-current='page' href='#'>
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href='#'>About</MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }
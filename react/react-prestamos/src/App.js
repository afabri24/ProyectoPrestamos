import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// Componentes
import NavbarHome from './components/Paginas/NavbarHome/NavbarHome';
// import NavbarLogin from './components/Paginas/NavbarLogin/NavbarLogin';
import Footer from './components/Paginas/Footer';

//publicas
import Landing from './components/Paginas/index'
import Prestamos from './components/Paginas/Prestamos';
import SimulacionPrestamo from './components/Paginas/SimulacionPrestamo';
import Contacto from './components/Paginas/Contacto';
import Error from './components/Paginas/Error';
import React from 'react';

//privadas
// import Registro from './components/Paginas/Registro';
// import Login from './components/Paginas/Login';


function App() {


    return (
        <React.StrictMode>
            <BrowserRouter>
                <NavbarHome />
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path='/Home' component={Landing} />
                    <Route exact path='/Prestamos' component={Prestamos} />
                    <Route exact path='/Simulacion' component={SimulacionPrestamo} />
                    <Route exact path='/Contacto' component={Contacto} />

                    {/* <Route path='/Registro' component={Registro} />
                    <Route path='/Login' component={Login} /> */}


                    <Route path='*' component={Error} />

                </Switch>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>

    );
}


export default App;
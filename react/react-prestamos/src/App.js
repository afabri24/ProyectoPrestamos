import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// Componentes
import NavbarHome from './components/Paginas/NavbarHome/NavbarHome';
// import NavbarLogin from './components/Paginas/NavbarLogin/NavbarLogin';

//publicas
import Landing from './components/Paginas/publico/index'
import Prestamos from './components/Paginas/publico/Prestamos';
import SimulacionPrestamo from './components/Paginas/publico/SimulacionPrestamo';
import Contacto from './components/Paginas/publico/Contacto';
import Error from './components/Paginas/publico/Error';
import Footer from './components/Paginas/publico/Footer';
import Registro from './components/Paginas/publico/Registro';
import Login from './components/Paginas/publico/Login';


//privadas

import perfil from './components/Paginas/privado/Perfil';

import ClienteList from './components/Paginas/Servidor/Cliente/ClienteList';
import ClienteForm from './components/Paginas/Servidor/Cliente/ClienteForm';


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

                    <Route path='/Registro' component={Registro} />
                    <Route path='/Login' component={Login} />

                    <Route path='/perfil' component={perfil} />


                    <Route path='/cliente' component={ClienteList} />


                    {/* <Route path='/cliente' component={ClienteList} /> */}

                    <Route path='/clienteForm' component={ClienteForm} />
                    <Route path='/updateCliente/:id' component={ClienteForm} />

                    <Route path='*' component={Error} />

                </Switch>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>

    );
}


export default App;
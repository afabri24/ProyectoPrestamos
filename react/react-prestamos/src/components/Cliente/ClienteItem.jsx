import React from "react";
import { useHistory } from "react-router-dom";

import * as ClienteServer from "./ClienteServer";

<<<<<<< Updated upstream
const ClienteItem=({ cliente, listClientes })=>{
    const history = useHistory();

    const handleDelete = async (clienteId) =>  { 
        await ClienteServer.deleteCliente(clienteId);
        listClientes();
    };
=======
const ClienteItem = ({cliente, listClientes })=>{
    const history = useHistory();

    const handleDelete = async (clienteId) => {
        await ClienteServer.deleteCliente(clienteId);
        listClientes();
      };
>>>>>>> Stashed changes

    return (
        <div className="col-md-4">
            <div className="card card-body">
<<<<<<< Updated upstream
                <h3 className="card-title">
                    {cliente.name}
                    <button onClick={() => history.push(`/updateCliente/${cliente.id}`)} className="ms-2 btn btn-sm btn-info">
                        Update
                    </button>
=======
                <h3 className="card-title">{cliente.name}
                <button onClick={() => history.push(`/updateCliente/${cliente.id}`)} className="ms-2 btn btn-sm btn-info">
                    Update
                </button>
>>>>>>> Stashed changes
                </h3>
                <p className="card-text">Apellidos: <strong>{cliente.apellidos}</strong></p>
                <p className="card-text">Fecha de Nacimiento: <strong>{cliente.fechaNacimiento}</strong></p>
                <p className="card-text">RFC: <strong>{cliente.rfc}</strong></p>
                <p className="card-email">Correo:: <strong>{cliente.correo}</strong></p>
                <p className="card-text">Telefono: <strong>{cliente.telefono}</strong></p>
<<<<<<< Updated upstream
                <p className="card-text">Password: <strong>{cliente.password}</strong></p>
                <button onClick={() =>cliente.id && handleDelete(cliente.id)} className="btn btn-danger my-2" >Delete</button>
=======
                <button onClick={ () => cliente.id && handleDelete(cliente.id)} className="btn btn-danger my-2">Delete</button>
>>>>>>> Stashed changes
            </div>
        </div>
    );
};

export default ClienteItem;
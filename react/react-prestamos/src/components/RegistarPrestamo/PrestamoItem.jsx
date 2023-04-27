import React from "react";
import { useHistory } from "react-router-dom";

import * as PrestamoServer from "./ClienteServer";

const PrestamoItem=({ prestamo, listPrestamos })=>{
    const history = useHistory();

    const handleDelete = async (prestamoId) =>  { 
        await PrestamoServer.deletePrestamo(prestamoId);
        listPrestamos();
    };

    return (
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title">
                    {prestamo.name}
                    <button onClick={() => history.push(`/updatePrestamo/${prestamo.id}`)} className="ms-2 btn btn-sm btn-info">
                        Update
                    </button>
                </h3>
                <p className="card-text">Monto de prestamo: <strong>{prestamo.montoPrestar}</strong></p>
       
        //         <p className="card-text">Apellidos: <strong>{cliente.apellidos}</strong></p>
        //         <p className="card-text">Fecha de Nacimiento: <strong>{cliente.fechaNacimiento}</strong></p>
        //         <p className="card-text">RFC: <strong>{cliente.rfc}</strong></p>
        //         <p className="card-email">Correo:: <strong>{cliente.correo}</strong></p>
        //         <p className="card-text">Telefono: <strong>{cliente.telefono}</strong></p>
        //         <p className="card-text">Password: <strong>{cliente.password}</strong></p>
        //         <button onClick={() =>cliente.id && handleDelete(cliente.id)} className="btn btn-danger my-2" >Delete</button>
        //     </div>
        // </div>
    );
};

export default PrestamoItem;
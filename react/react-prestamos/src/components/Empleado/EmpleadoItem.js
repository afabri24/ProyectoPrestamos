import React from "react";

const EmpleadoItem=({empleado})=>{
    return (
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title">Nombre: <strong>{empleado.name}</strong></h3>
                <p className="card-text">Apellidos: <strong>{empleado.apellidos}</strong></p>
                <p className="card-text">Fecha de Nacimiento: <strong>{empleado.fechaNacimiento}</strong></p>
                <p className="card-text">RFC: <strong>{empleado.rfc}</strong></p>
                <p className="card-text">Correo:: <strong>{empleado.correo}</strong></p>
                <p className="card-text">Telefono: <strong>{empleado.telefono}</strong></p>
            </div>
        </div>
    );
};

export default EmpleadoItem;
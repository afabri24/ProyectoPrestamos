import { useState } from "react";
import { useHistory } from "react-router-dom";

import * as EmpleadoServer from "./EmpleadoServer";

const EmpleadoForm=()=>{
    const history=useHistory();
    const initialState={id:0,name:"",apellidos:"",fechaNacimiento:"",rfc:"",correo:"",telefono:""};

    const [empleado, setEmpleado]=useState(initialState);

    const handleInputChange=(e)=>{
        setEmpleado({...empleado, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res;
            res = await EmpleadoServer.registerEmpleado(empleado);
            const data = await res.json();
            if(data.message=="Success"){
                setEmpleado(initialState);
            }
            history.push("/");
        }catch(error){
            alert.show('Oh look, an alert!')
        }
    };
    return (<div className="col-md-3 mx-auto">
    <h2 className="mb-3 text-center">Empleado</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" value={empleado.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
      </div>
      <div className="mb-3">
        <label className="form-label">Apellidos</label>
        <input type="text" name="apellidos" value={empleado.apellidos} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha de Nacimiento</label>
        <input type="text" name="fechaNacimiento" value={empleado.fechaNacimiento} onChange={handleInputChange} className="form-control" maxLength="100" required />
      </div>
      <div className="mb-3">
        <label className="form-label">RFC</label>
        <input type="text" name="rfc" value={empleado.rfc} onChange={handleInputChange} className="form-control" minLength="13" maxLength="13" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo</label>
        <input type="text" name="correo" value={empleado.correo} onChange={handleInputChange} className="form-control" maxLength="100" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Telefono</label>
        <input type="text" name="telefono" value={empleado.telefono} onChange={handleInputChange} className="form-control" maxLength="100" required />
      </div>
      <div className="d-grid gap-2">

          <button type="submit" className="btn btn-block btn-primary">
            Registro
          </button>

          <button type="submit" className="btn btn-block btn-primary">
            Registro
          </button>

      </div>
    </form>
  </div>)
};

export default EmpleadoForm;
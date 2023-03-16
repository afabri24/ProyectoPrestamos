const API_URL = "http://127.0.0.1:8000/api/empleados/";

export const listEmpleados = async () => {
    return await fetch(API_URL)
};

export const registerEmpleado= async (newEmpleado) => {
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/jason'
        },
        body:JSON.stringify({
            "name":String(newEmpleado.name).trim(),
            "apellidos":String(newEmpleado.apellidos).trim(),
            "fechaNacimiento":String(newEmpleado.fechaNacimiento).trim(),
            "rfc":String(newEmpleado.rfc).trim(),
            "correo":String(newEmpleado.correo).trim(),
            "telefono":String(newEmpleado.telefono).trim(),
        })
    });
};
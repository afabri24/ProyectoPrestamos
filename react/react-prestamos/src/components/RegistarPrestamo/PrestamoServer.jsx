const API_URL = "http://127.0.0.1:8000/api/prestamos/";

export const listPrestamos = async () => {
    return await fetch(API_URL);
};

export const getPrestamo = async (prestamoId) => {
    return await fetch(`${API_URL}${prestamoId}`);
};

export const registerPrestamo= async (newPrestamo) => {
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/jason'
        },
        body:JSON.stringify({
            "montoPrestar":String(newPrestamo.montoPrestar).trim(),
            "interes":String(newPrestamo.interes).trim(),
            "pagoMensual":String(newPrestamo.pagoMensual).trim(),
            "numeroCliente":String(newPrestamo.numeroCliente).trim(),
            "numeroEmpleado":String(newPrestamo.numeroEmpleado).trim(),
            "fechaPrestamo":String(newPrestamo.fechaPrestamo).trim(),
            "fechaPago":String(newPrestamo.fechaPago).trim(),

        })
    });
};

export const updatePrestamo = async (prestamoId, updatedPrestamo) => {
    return await fetch(`${API_URL}${prestamoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "montoPrestar":String(updatedPrestamo.montoPrestar).trim(),
            "interes":String(updatedPrestamo.interes).trim(),
            "pagoMensual":String(updatedPrestamo.pagoMensual).trim(),
            "numeroCliente":String(updatedPrestamo.numeroCliente).trim(),
            "numeroEmpleado":String(updatedPrestamo.numeroEmpleado).trim(),
            "fechaPrestamo":String(updatedPrestamo.fechaPrestamo).trim(),
            "fechaPago":String(updatedPrestamo.fechaPago).trim(),
        })
    });
};

export const deletePrestamo = async (prestamoId) => {
    return await fetch(`${API_URL}${prestamoId}`, {
        method: 'DELETE'
    });
};
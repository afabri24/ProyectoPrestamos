import './estiloSimulador.css'
// import './prestamo.js.js'
import React from 'react';

function App() {
  return (
    <>
      <div id="contenedor">
        <div className="header">
          <h2>Solicitud de préstamo</h2>
        </div>
        <div name="frmPrestamo" id="frmPrestamo">

          <div className="control">
            <label for="fecha">Fecha: <input type="date" name="fecha" id="fecha" placeholder="fecha" /></label>
          </div>

          <div className="control">
            <label for="monto">Monto:
              <input type="number" name="monto" id="monto" placeholder="monto" min="500" step="500" reque></input>
            </label>
          </div>

          <div className="control">
            <label for="periodo">Periodo de pago:
              <select name="periodo" id="periodo">
                <option value="semanal">Semanal</option>
                <option value="quincenal">Quincenal</option>
                <option value="mensual">Mensual</option>
              </select>
            </label>
          </div>

          <div className="control">
            <label for="interes">Interés (anual): 2.0 %</label>
          </div>

          <div className="control">
            <label for="plazo">Plazo: Mensual
            </label>
          </div>

          <button id="simular" onclick='simularPrestamo()'>Simular préstamo</button>
          <button id="simular" onclick='impresion()'>Pedir préstamo</button>
        </div>
      </div>

      <div>
        <div id="contenedorTabla">
          <div className="header">
            <h2>Simulacion</h2>
          </div>
          <div id="amortizaciones">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

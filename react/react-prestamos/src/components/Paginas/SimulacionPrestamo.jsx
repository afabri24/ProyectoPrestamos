

export default function Simulador() {
  return (
    <>
    <h2>Pagina Simulacion (public - private)</h2>
    </>
  );
      
}

// import React from 'react';
// import styled from 'styled-components';

// function App() {

//   const simularPrestamo = () => {
//     console.log("hola");
//   }

//   return (
//     <>
//       <SimuladorC>
//         <div id="contenedor">
//           <div className="header">
//             <h2>Solicitud de préstamo</h2>
//           </div>
//           <div name="frmPrestamo" id="frmPrestamo">

//             <div className="control">
//               <label for="fecha">Fecha: <input type="date" name="fecha" id="fecha" placeholder="fecha" /></label>
//             </div>

//             <div className="control">
//               <label for="monto">Monto:
//                 <input type="number" name="monto" id="monto" placeholder="monto" min="500" step="500" reque></input>
//               </label>
//             </div>

//             <div className="control">
//               <label for="periodo">Periodo de pago:
//                 <select name="periodo" id="periodo">
//                   <option value="semanal">Semanal</option>
//                   <option value="quincenal">Quincenal</option>
//                   <option value="mensual">Mensual</option>
//                 </select>
//               </label>
//             </div>

//             <div className="control">
//               <label for="interes">Interés (anual): 2.0 %</label>
//             </div>

//             <div className="control">
//               <label for="plazo">Plazo: Mensual
//               </label>
//             </div>

//             <button id="simular" onclick={simularPrestamo}>Simular préstamo</button>
//             <button id="simular" onclick='impresion()'>Pedir préstamo</button>
//           </div>
//         </div>

//         {/* <div>
//         <div id="contenedorTabla">
//           <div className="header">
//             <h2>Simulacion</h2>
//           </div>
//           <div id="amortizaciones">
//           </div>
//         </div>
//       </div> */}
//       </SimuladorC>

//     </>
//   );
// }

// export default App;


// const SimuladorC = styled.body`

// body {
//     margin: 0;
//     padding: 0%;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
  
//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }
//   @import url('https://fonts.googleapis.com/css?family=DM+Sans&display=swap');
  
//   * {
//     box-sizing: border-box;
//   }
  
//   body {
//     background: linear-gradient(to right, royalblue, darkblue);
//     font-family: 'DM Sans', sans-serif;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 100vh;
//     margin: 0;
//   }  
  
//   #contenedor, #contenedorTabla {
//     background-color: #FFF;
//     border-radius: 20px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
//     overflow: hidden;
//     width: 400px;
//     max-width: 100%;
//     margin: 30px;
//   }
  
//   #contenedorTabla {
//     width: 400px;
//     max-height: 820px;
//     overflow-y: scroll;
//   }
  

//   #frmPrestamo button {
//     background: rgba(65, 105, 225, 90%);
//     border: 2px solid royalblue;
//     border-radius: 4px;
//     color: #FFF;
//     display: block;
//     font-family: inherit;
//     font-size: medium;
//     padding: 10px;
//     margin-top: 20px;
//     width: 100%;
//   }
  

//   ::-webkit-scrollbar {
//     width: 10px;
//     height: 10px;
//   }
  
//   ::-webkit-scrollbar-track {
//     border: 1px solid rgba(0, 0, 0, 0.3);
//     border-radius: 10px;
//   }
  
//   ::-webkit-scrollbar-thumb {
//     background: rgba(0, 0, 0, 0.3);
//     border-radius: 10px;
//   }



//   .header, thead {
//     border-bottom: 1px solid #F0F0F0;
//     background-color: #F7F7F7;
//     padding: 20px 40px;
//   }
  
//   .header h2 {
//     margin: 0;
//   }
  
//   #frmPrestamo {
//     padding: 30px 40px;
//   }
  
//   #frmPrestamo .control, #amortizaciones .control, .radios {
//     margin-bottom: 10px;
//     padding-bottom: 20px;
//     position: relative;
//   }
  
//   #frmPrestamo .control input, #frmPrestamo .control select {
//     border: 2px solid #F0F0F0;
//     border-radius: 4px;
//     font-family: inherit;
//     font-size: 14px;
//     padding: 10px;
//     width: 100%;
//   }


// `
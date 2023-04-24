
import React from 'react';
import styled from 'styled-components';


export default function Simulador() {



  // function simular() {

  //   const IVA = 0.16;
  //   let monto, plazo, totalPagos, tasaAnual, fechaInicio, fechaPago, tasaMensual, mensualidad, intereses, impuestos, periodo, dinero,
  //     capital, insoluto, primerInteres, primerImpuesto, primerCapital, primerInsoluto, primerFechaPago, acumIntereses, acumImpuestos, acumCapital

  //   var establecerDatos = function () {
  //     primerInteres = 0;
  //     primerImpuesto = 0;
  //     primerCapital = 0;
  //     primerInsoluto = 0;
  //     primerFechaPago = true;
  //     acumIntereses = 0;
  //     acumImpuestos = 0;
  //     acumCapital = 0;

  //     monto = document.getElementById('monto').value;
  //     periodo = document.getElementById('periodo').value;
  //     tasaAnual = 15.0;
  //     fechaInicio = new Date(document.getElementById('fecha').value);
  //     fechaInicio.setDate(fechaInicio.getDate() + 1);

  //     switch (periodo) {
  //       case 'Semanal':
  //         let fechaFin = new Date(fechaInicio);
  //         fechaFin.setMonth(fechaFin.getMonth() + parseInt(plazo));
  //         let tiempo = fechaFin.getTime() - fechaInicio.getTime();
  //         let dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
  //         totalPagos = Math.ceil(dias / 7);
  //         break;

  //       case 'Quincenal':
  //         totalPagos = plazo * 2;
  //         break;

  //       case 'Mensual':
  //         totalPagos = plazo;
  //         break;

  //       default:
  //         alert('No ha Selecionado un peridodo de pago');
  //         break;
  //     }

  //   }

  //   function calcularTasaMensual() {
  //     tasaMensual = (tasaAnual / 100) / 12;
  //     return tasaMensual;
  //   }

  //   function tasaMsensualconIva() {
  //     return (calcularTasaMensual() + (calcularTasaMensual() * IVA))
  //   }

  //   function PagoMensual() {
  //     let denominador = Math.pow((1 + tasaMsensualconIva()), totalPagos) - 1;
  //     mensualidad = (tasaMsensualconIva() + (tasaMsensualconIva() / denominador)) * monto;
  //     return mensualidad;
  //   }

  //   function calcularTotalPrestamo() {
  //     let totalPrestamo = 0;
  //     for (let i = 0; i < totalPagos; i++) {
  //       totalPrestamo += mensualidad;
  //     }
  //     return totalPrestamo;
  //   }

  //   function obtenerPagoMensual() {
  //     return Math.round(PagoMensual(), 2);
  //   }

  //   function obtenerTotalPrestamo() {
  //     return Math.round(calcularTotalPrestamo(), 2);
  //   }

  //   function Intereses() {
  //     if (primerInteres === 0) {
  //       intereses = tasaMensual * monto;
  //       primerInteres = intereses;
  //     } else {
  //       intereses = tasaMensual * insoluto;
  //     }
  //     return intereses;
  //   }

  //   function Impuestos() {
  //     if (primerImpuesto === 0) {
  //       impuestos = primerInteres * IVA;
  //       primerImpuesto = impuestos;
  //     } else {
  //       impuestos = Intereses() * IVA;
  //     }
  //     return impuestos;
  //   }

  //   function Capital() {
  //     if (primerCapital === 0) {
  //       capital = mensualidad - primerInteres - primerImpuesto;
  //       primerCapital = capital;
  //     } else {
  //       capital = mensualidad - Intereses() - Impuestos();
  //     }
  //     return capital;
  //   }

  //   function SaldoInsoluto() {
  //     if (primerInsoluto === 0) {
  //       insoluto = monto - primerCapital;
  //       primerInsoluto = insoluto;
  //     } else {
  //       insoluto -= Capital();
  //     }
  //     return insoluto;
  //   }

  //   function simularPrestamo() {
  //     establecerDatos();
  //     PagoMensual();
  //     calcularTotalPrestamo();

  //     var columnas = ['N°', 'Fecha', 'Mensualidad', 'Intereses', 'Impuestos', 'Capital', 'Insoluto'];

  //     var amortizaciones = document.getElementById('amortizaciones');
  //     var tabla = document.getElementById('table');
  //     var cabeceraTabla = document.getElementById('thead');
  //     var cuerpoTabla = document.getElementById('tbody');
  //     var pieTabla = document.getElementById('tfoot');
  //     var fila = document.getElementById('tr');

  //     //header
  //     for (let j = 0; j < columnas.length; j++) {
  //       let celda = document.createElement('td');
  //       let texto = columnas[j];
  //       let textoCelda = document.createElement(texto);
  //       celda.appendChild(textoCelda);
  //       fila.appendChild(celda);
  //     }
  //     cabeceraTabla.appendChild(fila);

  //     //cuerpo tabla
  //     for (let i = 0; i < totalPagos; i++) {
  //       let intereses = Intereses();
  //       let impuestos = Impuestos();
  //       let capital = Capital();
  //       let insoluto = SaldoInsoluto();
  //       acumIntereses += intereses;
  //       acumImpuestos += impuestos;
  //       acumCapital += capital;

  //       fila = document.createElement('tr');
  //       for (let j = 0; j < columnas.length; j++) {
  //         let celda = document.createElement('td');
  //         let texto;

  //         switch (columnas[j]) {
  //           case 'N°':
  //             texto = (i + 1);
  //             break;

  //           case 'Fecha':
  //             if (primerFechaPago === true) {
  //               fechaPago = new Date(fechaInicio);
  //               primerFechaPago = false;
  //             } else {
  //               if (periodo === 'Semanal') {
  //                 fechaPago.setDate(fechaPago.getDate() + 7);
  //               } else if (periodo === 'Quincenal') {
  //                 fechaPago.setDate(fechaPago.getDate() + 15);
  //               } else if (periodo === 'Mensual') {
  //                 fechaPago.setMonth(fechaPago.getMonth() + 1);
  //               }
  //             }
  //             texto = fechaPago.toLocaleDateString();
  //             break;

  //           case 'Mensualidad':
  //             texto = dinero.format(mensualidad);
  //             break;

  //           case 'Intereses':
  //             texto = dinero.format(intereses);
  //             break;

  //           case 'Impuestos':
  //             texto = dinero.format(impuestos);
  //             break;

  //           case 'Capital':
  //             texto = dinero.format(capital);
  //             break;

  //           case 'Insoluto':
  //             texto = dinero.format(insoluto);
  //             break;

  //           default:
  //             texto = '';
  //             break;
  //         }
  //         var textoCelda = document.createTextNode(texto);
  //         celda.appendChild(textoCelda);
  //         fila.appendChild(celda);
  //       }
  //       cuerpoTabla.appendChild(fila);
  //     }

  //     //footer
  //     for (let j = 0; j < columnas.length; j++) {
  //       let celda = document.createElement('td');
  //       let texto;
  //       switch (columnas[j]) {
  //         case 'N°':
  //           texto = totalPagos;
  //           break;
  //         case 'Intereses':
  //           texto = dinero.format(acumIntereses);
  //           break;
  //         case 'Impuestos':
  //           texto = dinero.format(acumImpuestos);
  //           break;
  //         case 'Capital':
  //           texto = dinero.format(acumCapital);
  //           break;
  //         default:
  //           texto = '';
  //           break;
  //       }
  //       let textoCelda = document.createTextNode(texto);
  //       celda.appendChild(textoCelda);
  //       pieTabla.appendChild(celda);
  //     }
  //     tabla.appendChild(cabeceraTabla);
  //     tabla.appendChild(cuerpoTabla);
  //     tabla.appendChild(pieTabla);
  //     amortizaciones.appendChild(tabla);
  //   }
  // }


  return (
    <>
      <SimuladorC>
        <div id="contenedor">
          <div className="header">
            <h2>Simulacion de préstamo</h2>
          </div>

          <div name="frmPrestamo" id="frmPrestamo">

            <div className="control">
              <label htmlFor="fecha">Fecha: <input type="date" name="fecha" id="fecha" placeholder="fecha" /></label>
            </div>

            <div className="control">
              <label htmlFor="monto">Monto:
                <input type="number" name="monto" id="monto" placeholder="monto" min="500" step="500"></input>
              </label>
            </div>

            <div className="control">
              <label htmlFor="periodo">Periodo de pago:
                <select name="periodo" id="periodo">
                  <option value="semanal">Semanal</option>
                  <option value="quincenal">Quincenal</option>
                  <option value="mensual">Mensual</option>
                </select>
              </label>
            </div>

            <div className="control">
              <label htmlFor="interes">Interés (anual): 2.0 %</label>
            </div>

            <div className="control">
              <label htmlFor="plazo">Plazo: Mensual
              </label>
            </div>

            <button id="simular">Simular préstamo</button>
            <button id="pedir" >Pedir préstamo</button>
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
      </SimuladorC>

    </>
  );
}


const SimuladorC = styled.body`

body {
    margin: 0;
    padding: 0%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  @import url('https://fonts.googleapis.com/css?family=DM+Sans&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background: linear-gradient(to right, royalblue, darkblue);
    font-family: 'DM Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
  }  
  
  #contenedor{
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(195, 0, 0, 0.3);
    overflow: hidden;
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  #contenedorTabla {
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(182, 0, 0, 0.3);
    overflow: hidden;
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
  
  #contenedorTabla {
    width: 500px;
    max-height: 820px;
    overflow-y: scroll;
  }
  

  #frmPrestamo button {
    background: rgba(65, 105, 225, 90%);
    border: 2px solid royalblue;
    border-radius: 4px;
    color: #FFF;
    display: block;
    font-family: inherit;
    font-size: medium;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
  }
  

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-track {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }



  .header, thead {
    border-bottom: 1px solid #F0F0F0;
    background-color: #F7F7F7;
    padding: 20px 5rem;
    text-align: center;
  }
  
  .header h2 {
    margin: 0;
  }
  
  #frmPrestamo {
    padding: 30px 40px;
  }
  
  #frmPrestamo .control, #amortizaciones .control, .radios {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
  }
  
  #frmPrestamo .control input, #frmPrestamo .control select {
    border: 2px solid #F0F0F0;
    border-radius: 4px;
    font-family: inherit;
    font-size: 14px;
    padding: 10px;
    width: 100%;
  }


`
import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom';
import '../App.css'


const InvoiceTable = () => {
  const [facturas,setFacturas] = useState([]);


  useEffect(()=>{
    loadFacturas()}
    // eslint-disable-next-line
  ,[]);
  
  const loadFacturas = async ()=> {
    const response = await fetch("http://localhost:3000/facturas");
    const data = await response.json();
    setFacturas(data);
    // console.log(data);
  }
  const borrarFactura = async (id)=> {
    fetch('http://localhost:3000/facturas/' + id, {
     method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    setFacturas(facturas.filter(factura=>factura.id!==id))
  } 

  return(

    <div className="invoice">
      
      <table table className="ui celled table">
        <tbody>


      <tr>
        <th>
          Cliente
        </th>
        <th>
          Importe
        </th>
        <th>
          Fecha
        </th>
        <th>
          Acción
        </th>
      </tr>
      {
        facturas.map(factura=>(
         <tr key={factura.id}>
           <td><Link to={`/${factura.id}`}>{factura.cliente}</Link></td>
           <td>{factura.importe}</td>
           <td>{factura.fecha}</td>
           <td><button onClick={()=>borrarFactura(factura.id)}>Borrar</button></td>
         </tr>
        ))
      }
      </tbody>
      </table>
      <button className="ui  button" ><Link to={`/new`}>Nueva factura</Link></button>
    </div>
  )
  

}

export default InvoiceTable;


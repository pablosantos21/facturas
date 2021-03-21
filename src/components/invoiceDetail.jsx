import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import '../App.css'

const InvoiceDetail = () => {
  let {id} = useParams();
  const [factura,setFactura] = useState([])


  useEffect(()=>{loadFactura()},[factura]);

  const loadFactura = async ()=> {
    const response = await fetch(`http://localhost:3000/facturas/${id}`);
    const data = await response.json();
    setFactura(data);
    
  }
    return (
        <div className="invoice">
             <h1>DETALLE CLIENTE</h1>
            <h2>Nombre:   {factura?factura.cliente:""}</h2>
           <h2>Importe:   {factura?factura.importe:""}</h2>
           <h2>Fecha:  {factura?factura.fecha:""}</h2> 
          
           
           <Link to={`/`}>Volver a facturas</Link>
           
        </div>
    )
}

export default InvoiceDetail
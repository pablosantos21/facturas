import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import { v4 as uuid } from 'uuid';

const InvoiceForm = () => {

    
    let FACTURA ={
        id:uuid(),
        cliente:"",
        importe:0,
        fecha:""
    }
    const [redirect, setRedirect] = useState(false)
    const [factura,setFactura] = useState(FACTURA)

    
    const submit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/facturas', {
          method: 'POST',
          body: JSON.stringify(factura ),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res =>console.log(res))
          setRedirect(true)
      }
    

    const cancelar = () => {
        setRedirect(true)
    }

    return (
        <div className="invoice">
            {redirect && <Redirect to="/"/>}
            <form onSubmit={submit}>
                <input   type="text"
                        name="factura[cliente]"
                        value={factura.cliente}
                        onChange={e => setFactura({ ...factura, cliente: e.target.value })}
                        placeholder="Cliente"
                        ></input><br/>
                <input type="text"
                        name="factura[importe]"
                        value={factura.importe}
                        onChange={e => setFactura({ ...factura, importe: e.target.value })}
                        
                        ></input><br/>
                <input type="text"
                        name="factura[fecha]"
                        value={factura.fecha}
                        onChange={e => setFactura({ ...factura, fecha: e.target.value })}
                        placeholder="Fecha"
                        ></input><br/>
                <button className="ui  button" type="submit">Guardar</button>
                <button className="ui negative button" onClick={cancelar}>Cancelar</button>
            </form>

            
        </div>
    )
}

export default InvoiceForm
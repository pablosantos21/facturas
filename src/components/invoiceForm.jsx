import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import { useParams } from 'react-router'
import { v4 as uuid } from 'uuid';

const InvoiceForm = () => {

    let {idEdit} = useParams();
    console.log(idEdit)
    let FACTURA ={
        id:idEdit?idEdit:uuid(),
        cliente:"",
        importe:0,
        fecha:""
    }
    const [redirect, setRedirect] = useState(false)
    const [factura,setFactura] = useState(FACTURA)

    

    const submit = e => {
        e.preventDefault()
        if(idEdit){
            fetch(`http://localhost:8000/facturas/${idEdit}`, {
                method:'PUT',
                body: JSON.stringify(factura ),
                headers: { 'Content-Type': 'application/json' },
              })
                .then(res =>console.log(res))
        }else{
            fetch('http://localhost:8000/facturas/', {
                method:'POST',
                body: JSON.stringify(factura ),
                headers: { 'Content-Type': 'application/json' },
              })
                .then(res =>console.log(res))
        }
        setRedirect(true)
        
        
        //   setRedirect(true)
      }
    

    const cancelar = () => {
        setRedirect(true)
    }

    return (
        <div className="invoice">
            {redirect && <Redirect to="/"/>}
            <h1>{idEdit?`Editando ${idEdit}`:"Creando Factura"}</h1>
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
                <button className="ui  button" type="submit">{idEdit?"Editar":"Guardar"}</button>
                <button className="ui negative button" onClick={cancelar}>Cancelar</button>
            </form>

            {factura.id}
        </div>
    )
}

export default InvoiceForm
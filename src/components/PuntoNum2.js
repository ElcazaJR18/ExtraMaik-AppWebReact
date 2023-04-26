import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PuntoNum3.css"

function PuntoNum2() {
    const [response, setResponse] = useState({});
    const [data, setData] = useState([]);
    const getFetch = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto2/", {
            method: 'GET',

        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData(Object.values(data));
    }
    useEffect(() => {
        getFetch().catch((error) => {
            console.log(error);
        });
        return () => {

        };
        console.log(data);
    }, []);
    return (
        <>
            <div style={{marginTop: 40, marginLeft: 40, marginBottom: 25}}><h2>PUNTO 2 : Devuelve un listado que muestre
                solamente los clientes que no han realizado
                ningún pedido.</h2></div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>codigo_cliente</th>
                    <th>nombre_cliente</th>
                    <th>nombre_contacto</th>
                    <th>apellido_contacto</th>
                    <th>telefono</th>
                    <th>fax</th>
                    <th>linea_direccion1</th>
                    <th>linea_direccion2</th>
                    <th>ciudad</th>
                    <th>region</th>
                    <th>pais</th>
                    <th>codigo_postal</th>
                    <th>codigo_empleado</th>
                    <th>limite_credito</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr>
                        <td>{item.codigo_cliente}</td>
                        <td>{item.nombre_cliente}</td>
                        <td>{item.nombre_contacto}</td>
                        <td>{item.apellido_contacto}</td>
                        <td>{item.telefono}</td>
                        <td>{item.fax}</td>
                        <td>{item.linea_direccion1}</td>
                        <td>{item.linea_direccion2}</td>
                        <td>{item.ciudad}</td>
                        <td>{item.region}</td>
                        <td>{item.pais}</td>
                        <td>{item.codigo_postal}</td>
                        <td>{item.codigo_empleado_rep_ventas}</td>
                        <td>{item.limite_credito}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
}

export default PuntoNum2;
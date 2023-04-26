import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PuntoNum3.css"
import {Toast, ToastContainer} from "react-bootstrap";

function PuntoNum4() {
    const [response, setResponse] = useState({});
    const [data, setData] = useState([]);
    const getFetch = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto4/", {
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
            <div style={{marginTop : 40, marginLeft : 40, marginBottom : 25}}><h2>PUNTO 4 : Devuelve un listado que muestre solamente los empleados que no tienen una
                oficina asociada.</h2></div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>codigo_empleado</th>
                    <th>nombre</th>
                    <th>apellido1</th>
                    <th>apellido2</th>
                    <th>extension</th>
                    <th>email</th>
                    <th>codigo_oficina</th>
                    <th>codigo_jefe</th>
                    <th>puesto</th>

                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr>
                        <td>{item.codigo_empleado}</td>
                        <td>{item.nombre}</td>
                        <td>{item.apellido1}</td>
                        <td>{item.apellido2}</td>
                        <td>{item.extension}</td>
                        <td>{item.email}</td>
                        <td>{item.codigo_oficina}</td>
                        <td>{item.codigo_jefe}</td>
                        <td>{item.puesto}</td>

                    </tr>
                ))}
                </tbody>
                {data&&
                    <ToastContainer position={"top-center"}>
                        <Toast>
                            <Toast.Header>
                                <strong className="me-auto">Punto Erroneo</strong>
                                <small>Sin registros</small>
                            </Toast.Header>
                            <Toast.Body>La consulta parece no tener registros</Toast.Body>
                        </Toast>
                    </ToastContainer>

                }
            </Table>
        </>
    );
}

export default PuntoNum4;
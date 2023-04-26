import React, {useEffect, useState} from 'react'
import {Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Puntos6al10.css";
import Table from "react-bootstrap/Table";


export default function () {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [response, setResponse] = useState({});
    const [data, setData] = useState([]);
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);
    const [data9, setData9] = useState([]);
    const [data10, setData10] = useState([]);


    const getFetch = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto6/", {
            method: 'GET',

        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData(data);
    }

    const getFetch7 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto7/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log("LOG7"+data);
        setData7(data);
    }

    const getFetch8 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto8/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData8(data);
    }

    const getFetch9 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto9/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData9(Object.values(data));
    }

    const getFetch10 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/punto10/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData10(data);
    }

    useEffect(() => {
        getFetch().catch((error) => {
            console.log(error);
        });

        getFetch7().catch((error) => {
            console.log(error);
        });

        getFetch8().catch((error) => {
            console.log(error);
        });

        getFetch9().catch((error) => {
            console.log(error);
        });

        getFetch10().catch((error) => {
            console.log(error);
        });
        return () => {

        };
    }, []);

    return (
        <>
            <div className="form-container">
                <Form.Select value={selectedOption} onChange={handleSelectChange} className="form-select">
                    <option value="">Selecciona una opción</option>
                    <option value="option1">Punto 6</option>
                    <option value="option2">Punto 7</option>
                    <option value="option3">Punto 8</option>
                    <option value="option4">Punto 9</option>
                    <option value="option5">Punto 10</option>
                </Form.Select>


            </div>
            <div className={"component-container"}>
                {selectedOption === 'option1' && <ComponenteOpcion1/>}
                {selectedOption === 'option2' && <ComponenteOpcion2/>}
                {selectedOption === 'option3' && <ComponenteOpcion3/>}
                {selectedOption === 'option4' && <ComponenteOpcion4/>}
                {selectedOption === 'option5' && <ComponenteOpcion5/>}

            </div>
        </>
    );


    function ComponenteOpcion1() {
        return (
            <>

                <div className={"component-container"}>
                    <div style={{marginTop: 40, marginLeft: 40, marginBottom: 25, textAlign: "center"}}><h2>PUNTO 6 :
                        ¿Cuántos empleados hay en la compañía?</h2></div>


                    <Table striped bordered hover size="sm">
                        <tbody>
                        <th>Empleados</th>
                        <th>{data}</th>
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }

    function ComponenteOpcion2() {
        return (
            <>
                <div className={"component-container"}>

                    <div style={{marginTop : 80, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 7 : ¿Cuántos clientes tiene cada país?</h2></div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>pais</th>
                            <th>cantidad_clientes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data7.map((item) => (
                            <tr>
                                <td>{item.pais}</td>
                                <td>{item.cantidad_clientes}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>

            </>
        )
    }

    function ComponenteOpcion3() {
       return(
           <>
               <div className={"component-container"}>
                   <div style={{marginTop : 80, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 8 : ¿Cuál fue el pago medio en 2009?</h2></div>
                   <Table striped bordered hover size="sm">
                       <tbody>
                       <th>AVG =</th>
                       <th>{data8}</th>
                       </tbody>
                   </Table>
               </div>
           </>
       )
    }

    function ComponenteOpcion4() {

        return(
            <>
                <div className={"component-container"}>
                    <div style={{marginTop : 80, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 9 : ¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma
                        descendente por el número de pedidos.</h2></div>

                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Cantidad de pedidos</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data9.map((item) => (
                            <tr>
                                <td>{item.estado}</td>
                                <td>{item.cantidad_pedidos}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </>
        )

    }

    function ComponenteOpcion5() {
        return(
            <>
                <div className={"component-container"}>
                    <div style={{marginTop : 80,marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 10 : Devuelve el nombre del cliente con mayor límite de crédito.</h2></div>                    <Table striped bordered hover size="sm">
                        <tbody>
                        <th>Cliente =</th>
                        <th>{data10}</th>
                        </tbody>
                    </Table>
                </div>
            </>
        )

    }
}


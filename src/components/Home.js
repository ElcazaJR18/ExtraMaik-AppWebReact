import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
    const [showButtons, setShowButtons] = useState(false);

    const handleClick = () => {
        setShowButtons(!showButtons);
    };
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
                <Col className="p-0" md={6}>
                    <div className="presentation-text">
                        <h1>Extraordinario</h1>
                        <p>Carlos Zaid JImenez Romero 5C DSM.</p>
                        <Button variant="primary" onClick={handleClick}>Comenzar</Button>
                        {showButtons && (
                            <Row className="m-0">
                                <Col className="p-0" md={{ span: 6, offset: 1 }}>
                                    <div className="button-container d-flex justify-content-center">
                                        <div className="col-4">
                                            <Button className="btn" variant="secondary" href={"/punto1"}>Punto 1</Button>
                                            <Button className="btn" variant="secondary" href={"/punto2"}>Punto 2</Button>
                                            <Button className="btn" variant="secondary" href={"/punto3"}>Punto 3</Button>
                                        </div>
                                        <div className="col-4">
                                            <Button className="btn" variant="secondary" href={"/punto4"}>Punto 4</Button>
                                            <Button className="btn" variant="secondary" href={"/punto5"}>Punto 5</Button>
                                            <Button className="btn" variant="secondary" href={"/puntos6-10"}>Puntos 5 al 6</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </div>
                </Col>
                <Col className="p-0" md={6}>
                    <div className="presentation-image"></div>
                </Col>
            </Row>

        </Container>
    );
};

export default Home;

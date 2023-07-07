import React, {useEffect, useState, useContext} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import { Context } from '../index';

const DevicePage = () => {
    const { basket } = useContext(Context);
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchOneDevice(id);
          setDevice(data);
        };
    
        fetchData();
      }, [id]);
    const addToBasket = () => {
        const selectedDevice = device;
        if (selectedDevice) {
            basket.addToBasket(selectedDevice);
        }
      };

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} className="pr-4">
                    <Image width={400} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4} >
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around ml-5"
                        style={{width: 400, height: 300, fontSize: 32, border: '5px solid #17A2B8', marginLeft: 20}}
                    >
                        <h2>{device.name}</h2>
                        <h3>Ціна: {device.price} грн.</h3>
                        <Button variant="outline-info" onClick={addToBasket}>Додати до кошику</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;

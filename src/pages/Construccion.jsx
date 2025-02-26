import { Typography, Box } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';


export default function Construccion() {
    return (
        <Box
            id='construccion'
            className="d-flex justify-content-center align-items-center"
            sx={{ flexGrow: 1, p: 4, backgroundColor: 'white', height: '100vh' }}
        >
            <Row className="justify-content-center align-items-center">


                <Typography
                    variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center',color: '#F48C22', marginY:5 }}>
                    Proyectos de Construccion
                </Typography>

                <Col xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginY: 5, textAlign: 'left', }}>
                        PROYECTOS DE LTE PUBLICA, FAENAS MINERAS.<br/>

                        Minera Codelco Andina<br/>

                        Minera Codelco El Teniente<br/>

                        Minera Codelco Chuquicamata<br/>

                        Minera Codelco Radomiro Tomic<br/>

                        Minera Codelco El Salvador<br/>

                        Minera Spence<br/>

                        Minera Candelaria<br/>

                        Minera Anglo American, Los Bronces, Las Tortolas
                    </Typography>
                </Col>

                <Col xs={4}>
                    <Typography variant="body1" sx={{ color: '#333', marginY: 4 }}>

                        Photo Slider
                    </Typography>
                </Col>
            </Row>
        </Box >
    );
}

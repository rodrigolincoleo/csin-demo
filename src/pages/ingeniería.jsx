import { Typography, Box, Container } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';


export default function Ingenieria() {
  return (
    <Box
    id="ingenieria"
    className="d-flex justify-content-center align-items-center"
    sx={{ flexGrow: 1, p: 4, backgroundColor: "#f4f4f4", height: "100vh" }}
  >
    <Container>
      <Typography
        variant="h3"
        gutterBottom
         className='my-5'
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#F48C22",
          width: "100%",
        }}
      >
        Proyectos de ingeniería
      </Typography>
  
      <Row className="justify-content-center align-items-center" style={{ width: "100%" }}>
        {/* Columna Izquierda - Texto */}
        <Col xs={4} className="d-flex align-items-center my-5">
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", textAlign: "left" }}>
            INGENIERIA DE DETALLES PLANTAS DE GENERACIÓN DIESEL
            <br />
            INGENIERIA DE DETALLES LTE PRIVADA MINERA DOÑA INES DE COLLAHUASI
            <br />
            INGENIERIA DE DETALLES LTE PRIVADA CODELCO ANDINA
            <br />
          </Typography>
        </Col>
  
        {/* Columna Derecha - Photo Slider */}
        <Col xs={4} className="d-flex justify-content-center align-items-center">
          <Typography variant="body1" sx={{ color: "#333", marginY: 4 }}>
            Photo Slider
          </Typography>
        </Col>
      </Row>
    </Container>
  </Box>
  

  );
}

import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function About() {
  return (
    <Box
      id='about'
      sx={{
        position: 'relative',
        minHeight: '90vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: 3,
      }}
    >
      {/* Imagen en la parte superior */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '30vh', sm: '35vh', md: '40vh' },
          backgroundImage: `url('https://www.csin.cl/wp-content/uploads/2024/03/Collahuasi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Contenido de texto */}
      <Container>
        <Row className="d-flex justify-content-center align-items-center" style={{ width: '100%', marginTop: '20px' }}>
          <Col md={12} lg={6} >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: 'bold', textAlign: 'center', color: '#F48C22' }}
            >
              Nuestro compromiso
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{ textAlign: 'justify', color: '#4f4f4f' }}
            >
              Nuestras empresas fueron fundadas en el año 2014 en base a un equipo de profesionales con amplia experiencia en
              proyectos a la Gran Minería. Dicha experiencia está basada en el desarrollo de actividades y servicios en las áreas
              de Ingenierías y Construcción de Proyectos, además de Servicios de Transporte, Arriendo de Equipos y Proyectos Mineros.
            </Typography>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
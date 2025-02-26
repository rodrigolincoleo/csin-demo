import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function About() {
  return (
    <Box
      id='about'
      sx={{
        position: 'relative',
        height: '90vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Row className="d-flex justify-content-center align-items-center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 'bold', textAlign: 'center', color: '#F48C22', marginY: 5 }}
        >
          Nuestro compromiso
        </Typography>
        <Col xs={4}>
          <Typography
            variant="body1"
            paragraph
            sx={{ textAlign: 'center', color: '#4f4f4f' }}
            xs={4}
          >
            Nuestras empresas fueron fundadas en el año 2014 en base a un equipo de profesionales con amplia experiencia en proyectos a la Gran Minería. Dicha experiencia está basada en el desarrollo de actividades y servicios en las áreas de Ingenierías y Construcción de Proyectos, además de Servicios de Transporte, Arriendo de Equipos y Proyectos Mineros.
          </Typography>
        </Col>
      </Row>
    </Box>

  );
}

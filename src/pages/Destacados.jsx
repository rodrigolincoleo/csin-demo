import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';

const clientes = [
  { nombre: 'Minera Escondida', logo: 'https://www.escondida.cl/wp-content/uploads/2021/06/logo-escondida.png' },
  { nombre: 'Minera Centinela', logo: 'https://www.antofagasta.co.uk/wp-content/uploads/2021/06/logo-centinela.png' },
  { nombre: 'Minera Lomas Bayas', logo: 'https://www.lomasbayas.cl/wp-content/uploads/2021/06/logo-lomas-bayas.png' },
  { nombre: 'Codelco', logo: 'https://www.codelco.com/wp-content/uploads/2021/06/logo-codelco.png' },
  { nombre: 'Minera Collahuasi', logo: 'https://www.collahuasi.cl/wp-content/uploads/2021/06/logo-collahuasi.png' },
  { nombre: 'SQM', logo: 'https://www.sqm.com/wp-content/uploads/2021/06/logo-sqm.png' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const ClientesCarousel = () => {
  return (
    <Box
      id='links'
      sx={{ flexGrow: 1, p: 4, backgroundColor: '#f4f4f4' }}>
      <Box

        direction="column"
        justifySelf='center'>

        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#F48C22' }}>
          Desarrollamos construcción de proyectos en las siguientes áreas
        </Typography>

        <Row className='d-flex justify-content-center align-items-center my-5'>

          <Col xs={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Nuestro mayor conocimientos se base en la gran cantidad de proyectos de ingenierías en especialidades Eléctrica (Líneas Eléctricas en MT y BT, Mallas de tierra, Flujos de Potencia, análisis de SEP, Coordinación de Protecciones, Partidas de Motores ETC), instrumentación, control, telecomunicaciones y Fibra Óptica, Radio Frecuención, Trasmisión, LTE Privada, desarrolladas por nuestros profesionales para grandes empresas mineras, tales como:
            </Typography>
          </Col>
          <Typography variant="body1" className='d-flex justify-content-center my-5' sx={{ textAlign: 'left', color: '#333' }}>

            Oficinas Minera Codelco Chuquicamata, Motorola Solutións, 500 m2 <br />
            Planta de Generación Finning, Coyhaique<br />
            Planta de Generación Finning, Aysén<br />
            Ingeniería LTE Privada, Minera Collahuasi<br />
            Construcción de Sitios LTE Privada, Minera Collahuasi, (Nokia).<br />
            Construcción Sitios 5G publica, Mineras División Codelco<br />
            Codelco Salvador<br />
            Codelco Chuquicamata<br />
            Codelco Ministro Hales<br />
            Codelco Minera El Teniente<br />
            Codelco Minera Andina<br />
            Implementación 5G Sitio Mineros.<br />
            Anglo American<br />
            Minera Candelaria<br />
            Minera Spence<br />
            Minera Michilla<br />
            Construcción de LTE Privada Minera Codelco Andina, (Huawei).<br />
          </Typography>
        </Row>
      </Box>
    </Box >

  );
};

export default ClientesCarousel;

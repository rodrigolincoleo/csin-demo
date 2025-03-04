import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
    <Box id='destacados' sx={{ flexGrow: 1, p: 4, backgroundColor: '#f4f4f4' }}>
      <Grid container justifyContent="center">
        {/* Contenido con ancho de 6 columnas */}
        <Grid item xs={12} sm={8} md={6}>
          {/* Título */}
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#F48C22' }}>
            Desarrollamos construcción de proyectos en las siguientes áreas
          </Typography>

          {/* Descripción */}
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'justify' }}>
            Nuestro mayor conocimiento se basa en la gran cantidad de proyectos de ingeniería en especialidades
            Eléctrica (Líneas Eléctricas en MT y BT, Mallas de tierra, Flujos de Potencia, análisis de SEP,
            Coordinación de Protecciones, Partidas de Motores, etc.), instrumentación, control, telecomunicaciones
            y Fibra Óptica, Radio Frecuencia, Transmisión, LTE Privada, desarrolladas por nuestros profesionales
            para grandes empresas mineras, tales como:
          </Typography>

          {/* Lista de proyectos */}
          <Typography variant="body1" sx={{ textAlign: 'left', color: '#333', mt: 2, padding: 4 }}>
            <CheckCircleOutlineIcon /> Oficinas Minera Codelco Chuquicamata, Motorola Solutions, 500 m² <br />
            <CheckCircleOutlineIcon /> Planta de Generación Finning, Coyhaique <br />
            <CheckCircleOutlineIcon /> Planta de Generación Finning, Aysén <br />
            <CheckCircleOutlineIcon /> Ingeniería LTE Privada, Minera Collahuasi <br />
            <CheckCircleOutlineIcon /> Construcción de Sitios LTE Privada, Minera Collahuasi (Nokia) <br />
            <CheckCircleOutlineIcon /> Construcción Sitios 5G pública, Mineras División Codelco <br />
            <CheckCircleOutlineIcon /> Codelco Salvador <br />
            <CheckCircleOutlineIcon /> Codelco Chuquicamata <br />
            <CheckCircleOutlineIcon /> Codelco Ministro Hales <br />
            <CheckCircleOutlineIcon /> Codelco Minera El Teniente <br />
            <CheckCircleOutlineIcon /> Codelco Minera Andina <br />
            <CheckCircleOutlineIcon /> Implementación 5G Sitios Mineros <br />
            <CheckCircleOutlineIcon /> Anglo American <br />
            <CheckCircleOutlineIcon /> Minera Candelaria <br />
            <CheckCircleOutlineIcon /> Minera Spence <br />
            <CheckCircleOutlineIcon /> Minera Michilla <br />
            <CheckCircleOutlineIcon /> Construcción de LTE Privada Minera Codelco Andina (Huawei) <br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientesCarousel;

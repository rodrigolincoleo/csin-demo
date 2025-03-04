import { Typography, Box, Grid } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

const clientes = [
    { nombre: 'Minera Escondida', logo: 'https://cdnimg.bnamericas.com/YQfEOGUJclRIDHAQrmDhtJxhBVMTQorEWbdVKJvYSNrZLFqGmVOdrxgXgAwtRyiT.jpg' },
    { nombre: 'Minera Centinela', logo: 'https://www.controlsim.cl/wp-content/uploads/2017/01/centinela-logo-400x400.jpg' },
    { nombre: 'Minera Lomas Bayas', logo: 'https://acenor.cl/wp-content/uploads/2021/01/lomasbayas.jpg' },
    { nombre: 'Codelco', logo: 'https://www.codelco.com/prontus_codelco/site/artic/20220408/imag/foto_0000000120220408100923/logo.svg' },
    { nombre: 'Minera Collahuasi', logo: 'https://cdn.brandfetch.io/idwidZpqOu/w/400/h/400/theme/dark/icon.jpeg?c=1bx1743081563491id64Mup7acAlh35NKZ&t=1736417386558' },
    { nombre: 'SQM', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Sociedad_Qu%C3%ADmica_y_Minera_logo.svg/177px-Sociedad_Qu%C3%ADmica_y_Minera_logo.svg.png?20190501220220' },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: 1000,
};

export default function Desarrollo() {
    return (
        <Box
            id='desarrollo'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '100vh',
                width: '100vw',
                backgroundColor: 'white',
            }}
        >
            <Container>
                <Grid container justifyContent="center">
                    {/* Ancho de 6 columnas en pantallas medianas y grandes */}
                    <Grid item xs={12} sm={8} md={6}>
                        {/* Título principal */}
                        <Typography
                            variant="h3"
                            gutterBottom
                            sx={{ fontWeight: 'bold', color: '#F48C22' }}
                        >
                            Desarrollamos Ingenierías
                        </Typography>

                        {/* Descripción */}
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ textAlign: 'justify' }}
                        >
                            Nuestro mayor conocimiento se basa en la gran cantidad de proyectos de ingeniería en especialidades
                            Eléctrica (Líneas Eléctricas en MT y BT, Mallas de tierra, Flujos de Potencia, análisis de SEP,
                            Coordinación de Protecciones, Partidas de Motores, etc.), instrumentación, control, telecomunicaciones
                            y Fibra Óptica, Radio Frecuencia, Transmisión, LTE Privada, desarrolladas por nuestros profesionales
                            para grandes empresas mineras, tales como:
                        </Typography>

                        {/* Carrusel */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '900px',
                                mt: 3
                            }}
                        >

                        </Box>
                    </Grid>
                    <Slider {...settings} style={{ width: '100%' }}>
                        {clientes.map((cliente, index) => (
                            <Box
                                key={index}
                                sx={{
                                    height: '40vh',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 2,
                                        textAlign: 'center',
                                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 2
                                    }}
                                >
                                    <img
                                        src={cliente.logo}
                                        alt={cliente.nombre}
                                        style={{ maxWidth: '200px', marginBottom: '10px' }}
                                    />
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: 'bold', color: '#333' }}
                                    >
                                        {cliente.nombre}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Grid>
            </Container>
        </Box>
    );
}

import { Typography, Box } from '@mui/material';
import React from 'react';


export default function Links() {
    return (
        <Box
            id='links'
            sx={{ flexGrow: 1, p: 4, backgroundColor: '#f4f4f4' }}>
            <Box

                direction="column"
                justifySelf='center'>

                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#F48C22' }}>
                    Desarrollamos construcción de proyectos en las siguientes áreas
                </Typography>



                <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Nuestro mayor conocimientos se base en la gran cantidad de proyectos de ingenierías en especialidades Eléctrica (Líneas Eléctricas en MT y BT, Mallas de tierra, Flujos de Potencia, análisis de SEP, Coordinación de Protecciones, Partidas de Motores ETC), instrumentación, control, telecomunicaciones y Fibra Óptica, Radio Frecuención, Trasmisión, LTE Privada, desarrolladas por nuestros profesionales para grandes empresas mineras, tales como:
                </Typography>

                <Typography variant="body1" sx={{ textAlign: 'justify', color: '#333' }}>

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
            </Box>
        </Box >
    );
}

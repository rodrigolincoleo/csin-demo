import { Typography, Box } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';


export default function Actual() {
    return (
        <Box
            id='actual'
            sx={{ flexGrow: 1, p: 4, backgroundColor: '#f4f4f4' }}
            xs={6}
        >
            <Row className="justify-content-center">
                <Col
                    xs={6}
                >

                    <Typography
                        variant="h6" gutterBottom sx={{ textAlign: 'justify' }}>
                        Nuestra mayor fortaleza es la construcción en proyectos de telecomunicaciones y de desarrollo Minero de las especialidades Obras Civiles, Eléctricas, instrumentación, control y Fibra Óptica, prestando actualmente servicios a empresas del rubro de las telecomunicaciones y minería, nuestra experiencia nos hace destacar en el mercado.
                    </Typography>


                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginY: 4, textAlign: 'center' }}>
                    <img
                src={"https://www.csin.cl/wp-content/uploads/2024/03/Torre.jpg"}
                style={{
                  width: "30%",
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
              />
                    </Typography>

                    <Typography variant="h6" sx={{ color: '#333', marginY: 4, textAlign: 'justify' }}>
                    En la actualidad, está presente en todo el país, ejecutando proyectos diversos en tamaño y especialidad, de norte a sur, con oficinas en Santiago. Nuestra procesos están cimentados fundamentalmente en estándares Mineros, mantenido siempre un apego con la seguridad y calidad en los trabajos realizados, por tal motivo nos hemos destacado por nuestro trabajo seguro, de calidad y efectividad en todos nuestros procesos.
                    </Typography>
                </Col>
            </Row>
        </Box >
    );
}

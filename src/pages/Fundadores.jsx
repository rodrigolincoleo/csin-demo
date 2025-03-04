import { Typography, Box, Avatar } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const founders = [
  {
    title: 'SOCIO FUNDADOR',
    name: 'CRISTIAN RODRIGO GUTIÉRREZ GONZÁLEZ',
    role: 'GERENTE GENERAL',
    email: 'cgutierrez@csin.cl',
    phone: '+56 9 48102100',
    photo: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
  },
  {
    title: 'SOCIA FUNDADORA',
    name: 'PAULA ALEJANDRA POLANCO SANTIBAÑEZ',
    role: 'GERENTE DE FINANZAS',
    email: 'ppolanco@csin.cl',
    phone: '+56 9 73872719',
    photo: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png'
  }
];

export default function Fundadores() {
  return (
    <Box
      id="fundadores"
      className="d-flex justify-content-center align-items-center"
      sx={{ flexGrow: 1, p: 4, backgroundColor: "#ffffff", height: "100vh" }}
    >

      <Box sx={{ flexGrow: 1, p: 4, display: 'flex', justifyContent: "center" }}>
        < Row spacing={4} justifyContent="center">
          {founders.map((founder, index) => (
            <Col display="flex" justifyContent="center" item xs={12} sm={6} key={index}>
              <Avatar
                src={founder.photo}
                alt={founder.name}
                sx={{ width: 120, height: 120, margin: 'auto', mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold">{founder.title}</Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>{founder.name}</Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mt: 1 }}>{founder.role}</Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'primary.main' }}>{founder.email}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{founder.phone}</Typography>

            </Col>
          ))}
        </Row>
      </Box>
    </Box>


  );
}

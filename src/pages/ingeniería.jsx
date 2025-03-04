import React from 'react';
import { Grid, Box, Typography, Avatar, Container } from '@mui/material';

const projects = [
  { title: 'Ingeniería de detalles plantas de generación diésel', photo: '/images/Faenas.jpg' },
  { title: 'Ingeniería de detalles LTE Privada Minera Doña Inés de Collahuasi', photo: '/images/andina.jpg' },
  { title: 'Ingeniería de detalles LTE Privada Codelco Andina', photo: '/images/el_teniente.jpg' },
];

const Ingenieria = () => {
  return (
    <Box
      id='ingenieria'
      sx={{
        flexGrow: 1,
        p: 4,
        width: "100%",
        height: "100vh",
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ color: "#F48C22", mb: 3 }}>
              Proyectos de Ingeniería
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    src={project.photo}
                    alt={project.title}
                    sx={{ width: '100%', height: 150, borderRadius: 2, mb: 2 }}
                    variant="square"
                  />
                  <Typography variant="h6" textAlign="center">
                    {project.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ingenieria;

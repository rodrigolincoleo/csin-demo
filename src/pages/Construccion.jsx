import React from 'react';
import { Grid, Box, Typography, Avatar, Container } from '@mui/material';

const projects = [
    { title: 'Proyectos de LTE pública Faenas Mineras.', photo: 'https://media.istockphoto.com/id/1482828400/photo/5g-repeater-tower.jpg?s=1024x1024&w=is&k=20&c=fyiTPTon66J8pKpGO-3nHxrInR3BvcFpgp1BUltl2eA=' },
    { title: 'Minera Codelco Andina', photo: 'https://media.istockphoto.com/id/1299904059/photo/an-engineer-is-working-on-height-using-a-safety-helmet-and-equipment-fixing-an-antenna.jpg?s=1024x1024&w=is&k=20&c=lx1b4pW2ikT4RTsJNRVFxXj4SjfM80SJJtIvcBaWK8o=' },
    { title: 'Minera Codelco El Teniente', photo: 'https://media.istockphoto.com/id/1264152460/photo/engineers-working-on-5g-antenna.jpg?s=1024x1024&w=is&k=20&c=SGJeJReq8Ft_QscUmBbinPUEKrBJ-KVul_qZb4HMkZg=' },
    { title: 'Minera Codelco Chuquicamata', photo: 'https://media.istockphoto.com/id/836184206/photo/working-at-height.jpg?s=1024x1024&w=is&k=20&c=uc2g44U8GL0JdqLwcs6sAUCj9Ort8yEbZWKbg4ubNWY=' },
    { title: 'Minera Codelco Radomiro Tomic', photo: 'https://media.istockphoto.com/id/1780480159/photo/mobile-5g-installation-on-high-mast.jpg?s=1024x1024&w=is&k=20&c=WW25WH1uTdkrFEg4XV0Rjjq-llzdwlgqCjCVJXbRLm4=' },
    { title: 'Minera Codelco El Salvador', photo: 'https://media.istockphoto.com/id/2168976379/photo/low-angle-view-of-man-working-on-communication-tower-against-sky.jpg?s=1024x1024&w=is&k=20&c=RCrPV0ziLnwu2VEWzWLTlMB-vnJ3iWZfQGePrJdYXlY=' },
    { title: 'Minera Spence', photo: 'https://media.istockphoto.com/id/909432046/photo/worker-climbing-on-high-cellular-network-tower.jpg?s=1024x1024&w=is&k=20&c=BjNAgbLTw96Qkg7za7i1-Bp76UfmvHLnY9BxcJ862fs=' },
    { title: 'Minera Candelaria', photo: 'https://media.istockphoto.com/id/185249353/photo/oil-rig-worker.jpg?s=1024x1024&w=is&k=20&c=39reNtfd1PK95AWxRxNLgf4GSU2JZ7FCQg97mKtrMUo=' },
    { title: 'Minera Anglo American, Los Bronces, Las Tortolas', photo: 'https://media.istockphoto.com/id/1213293177/photo/female-engineer-working-on-the-field-near-a-telecommunications-tower.jpg?s=1024x1024&w=is&k=20&c=BhwjJjl_7MuJ9na9M0SOS3ZG50_r8_kZiWu8RnAHFag=' }
];

const ProjectsGrid = () => {
    return (
        <Container maxWidth="md" id='construccion'> 
            <Box sx={{ flexGrow: 1, p: 4 }}>
                <Typography variant="h3" fontWeight="bold" textAlign="center" mb={3} sx={{color:"#F48C22"}}>
                    Proyectos de Construcción
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={6} sm={4} md={4} key={index}>
                            <Avatar
                                src={project.photo}
                                alt={project.title}
                                sx={{ width: '100%', height: 150, borderRadius: 2, mb: 2 }}
                                variant="square"
                            />
                            <Typography variant="h6"  textAlign="center">
                                {project.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default ProjectsGrid;

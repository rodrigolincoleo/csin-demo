import React, { useEffect, useState, Suspense } from 'react';
import { Fab, Box } from '@mui/material';
import PhotoGallery from './GaleríaFotos';
import Contact from './Contact';
import Destacados from './Destacados';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Desarrollo from './Desarrollo';
import Actual from './Actualidad';
import Ingenieria from './ingeniería';
import Construccion from './Construccion';
import Fundadores from './fundadores';
const HeroSection = React.lazy(() => import('./HeroSection'));
const About = React.lazy(() => import('./About'));
export default function Home() {
  const [showButton, setShowButton] = useState(false);

    const [navBg, setNavBg] = useState('');
  useEffect(() => {
    // Mostrar el botón cuando el usuario haya desplazado más de 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setNavBg('white'); // Cambia a blanco cuando se sale del HeroSection
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      
      <HeroSection setNavbarBg={setNavBg}/>
      <About/>
      <Ingenieria/>
      <Construccion />
      <Actual/>
      <Desarrollo />
      <Destacados />
      <Contact />
      <Fundadores/>

      {/* Botón flotante para volver arriba */}
      {showButton && (
        <Box sx={{ position: 'fixed', bottom: 20, right: 20 }}>
          <Fab
            color="primary"
            onClick={scrollToTop}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      )}
    </Suspense>
  );
}

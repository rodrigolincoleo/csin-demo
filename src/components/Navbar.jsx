import { AppBar, Toolbar, Typography, Button, FormControl, Select, MenuItem, Box, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

function Navbar({ navBg }) {
  const [aNavBg, setANavBg] = useState('transparent'); // Inicializa con 'transparent'
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        // setANavBg(window.scrollY > window.innerHeight * 0.9 ? 'white' : 'transparent');
        setANavBg('white');
      });
    };

    // Ejecutar el efecto una vez al cargar la página para corregir el fondo
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonProps = {
    component: Link,
    smooth: true,
    duration: 1000,
    sx: {
      fontSize: '1rem',
      textTransform: 'none',
      mx: 1,
      color: 'rgba(92, 92, 92, 1)',
    },
  };

  const menuItemStyles = {
    backgroundColor: '',
    '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.3)' },
    '&:focus': { backgroundColor: 'rgba(128, 128, 128, 0.3)' },
    '&.Mui-selected': { backgroundColor: 'rgba(128, 128, 128, 0.3) !important' },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'white',
        transition: 'background 0.3s ease-in-out',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo y Título */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://ik.imagekit.io/k244xcphl/Captura%20de%20pantalla%202025-03-03%20151046.png?updatedAt=1741025781395"
            alt="Logo Patagonia Verde"
            sx={{ width: 200, height: 60, mr: 1 }}
          />

        </Box>

        {/* Menú Desktop / Mobile */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon sx={{ color: aNavBg === 'white' ? 'black' : 'white' }} />
            </IconButton>

            {/* Drawer para móviles */}
            <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
              <List>
                {['caracteristicas', 'flora', 'actividades', 'about', 'masterplan', 'fotos', 'video', 'ubicacion', 'contact'].map((section) => (
                  <ListItem key={section} disablePadding>
                    <ListItemButton component={Link} to={section} smooth duration={1000} onClick={() => setMobileOpen(false)}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button {...buttonProps} to="about">Nosotros</Button>
            <FormControl variant="standard" sx={{ width: 'auto', mr: 2 }}>
              <Select
                displayEmpty
                width="auto"
                sx={{
                  backgroundColor: 'transparent',
                  borderBottom: 'none',
                  '&:hover': { backgroundColor: 'transparent' },
                  '&.Mui-focused': { borderBottom: 'none' },
                  '&::before': { borderBottom: 'none' },
                  '&::after': { borderBottom: 'none' },
                  minWidth: 'auto',
                  width: 'auto',
                  paddingRight: 0, 
                }}
              >
                <MenuItem sx={menuItemStyles}><Button {...buttonProps} to="ingenieria">Ingeniería</Button></MenuItem>
                <MenuItem sx={menuItemStyles}><Button {...buttonProps} to="construccion">Construcción</Button></MenuItem>
                <MenuItem sx={{ ...menuItemStyles, display: 'none' }}><Button {...buttonProps} to="construccion">Proyectos</Button></MenuItem>
              </Select>
            </FormControl>


            <Button {...buttonProps} to="actual">Actualidad</Button>
            <Button {...buttonProps} to="desarrollo">Desarrollo</Button>
            <Button {...buttonProps} to="destacados">Destacados</Button>
            <Button {...buttonProps} to="contact">Contacto</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Navbar);

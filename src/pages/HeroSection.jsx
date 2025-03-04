import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Col } from 'react-bootstrap';

export default function HeroSection({ setNavbarBg }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setNavbarBg(slides[newIndex].image);
        }
    };

    // Contenidos del carrusel
    const slides = [
        {
            image: 'https://media.istockphoto.com/id/932473254/es/foto/trabajo-en-altura.jpg?s=1024x1024&w=is&k=20&c=-EsoDHeeOff_nv5QuJNjEbM0M_oQJ0aCBegB7OurPAU=',
            title: "Lorem Ipsum",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices nisi vehicula fames porta, taciti pharetra aenean. Mauris maximus nostra ex ligula imperdiet eu diam. Orci mi ultricies ultricies ultricies; justo etiam etiam."
        },
        {
            image: 'https://media.istockphoto.com/id/1305914926/es/foto/vista-de-drones-de-un-m%C3%A1stil-de-telecomunicaciones-en-un-lugar-rural.jpg?s=2048x2048&w=is&k=20&c=CsvNoORDJJPw2ltiyglCDaDKk-W8XKMr_WKMfjecJZY=',
            title: "Lorem Ipsum",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fermentum malesuada maecenas semper hac dolor condimentum est tempor finibus. Faucibus nascetur dictumst ultrices accumsan venenatis. Taciti elit ornare vel imperdiet lacinia."
        },
        {
            image: 'https://media.istockphoto.com/id/904225648/es/foto/torre-celular-equipos-para-transmisi%C3%B3n-de-se%C3%B1al-de-celular-y-m%C3%B3vil.jpg?s=2048x2048&w=is&k=20&c=S6oEv76FoOL6upQSSiB7OnoUMwBhlZhccx40m8F_0P4=',
            title: "Lorem Ipsum",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit."
        }
    ];

    return (
        <Box
            id="home"
            sx={{
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <Slider {...settings} style={{ width: '100%', height: '100%' }}>
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                            display: 'flex',
                            alignContent: 'center',
                            justifyItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100vh',
                                borderRadius: 2,
                                textAlign: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignContent: 'center',
                                justifyContent: 'center',
                            }}
                        >
                             <Box sx={{ width: '33.33%', maxWidth: '400px', margin: 'auto' }}>
                            <Typography
                                
                                sx={{ fontWeight: 'bold', mb: 2 }}
                            >
                                {slide.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ whiteSpace: 'pre-line', 
                                    textAlign: 'center' ,
                                }}
                            >
                                {slide.text}
                            </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import AwesomeReveal from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
    const scrollRef = useRef(null);
    const [sectionRef, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
    
    let animationFrameId = null;
    const scrollDuration = 5000;
    const scrollStep = 10;
    
    const scrollToBottom = () => {
      const targetY = document.body.scrollHeight - window.innerHeight;
    
      const startTime = performance.now();
      const animation = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / scrollDuration, 1);
    
        const deltaY = targetY - window.scrollY;
        const distance = deltaY * progress;
        window.scrollBy(0, distance);
    
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animation);
        }
      };
    
      animationFrameId = requestAnimationFrame(animation);
    };
    
    const handleUserInteraction = () => {
      cancelAnimationFrame(animationFrameId);
    };
    
    const cleanupListeners = () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('mousedown', handleUserInteraction);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleUserInteraction);
      window.addEventListener('mousemove', handleUserInteraction);
      window.addEventListener('mousedown', handleUserInteraction);
    
      return cleanupListeners;
    }, []);
    
    useEffect(() => {
      return cleanupListeners;
    }, []);
  return (
    <section
      className="bg-black text-white py-16 mb-0 min-h-screen flex items-center"
      ref={scrollRef}
    >
      <Container maxWidth="xl">
        <div className="text-center" ref={sectionRef}>
          <AwesomeReveal cascade damping={0.2} direction="top" visible={inView}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className="animated-text"
              sx={{
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '1.2',
                fontSize: { xs: '2.5rem', md: '3.35rem' }, 
                textShadow: '4px 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              🛍️ Buy and Sell Second-Hand Products 🛒
            </Typography>
          </AwesomeReveal>
          <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
            <Typography
              variant="h2"
              paragraph
              sx={{
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                fontWeight: 500,
                letterSpacing: '0.03em',
                color: 'rgba(255, 255, 255, 0.9)',
                mt: 3,
              }}
            >
              Discover great deals on{' '}
              <span
                style={{
                  background: 'linear-gradient(45deg, #FF80B5, #9089FC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                🧡 Pre-Loved Items 💚
              </span>
              . Secure transactions and reliable deliveries. 🚚
            </Typography>
          </AwesomeReveal>
          <AwesomeReveal damping={0.2} direction="bottom" visible={inView}>
            <div className="flex justify-center mt-9">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#"
                onClick={scrollToBottom}
                sx={{ borderRadius: '999px',  fontSize: { xs: '1.25rem', md: '1.5rem' } }}
              >
                Get Started 🚀
              </Button>
            </div>
          </AwesomeReveal>
          <AwesomeReveal delay={500} damping={0.2} direction="bottom" visible={inView}>
            <div className="mt-8 text-center">
              <img
                src="https://media1.giphy.com/media/zJ5udfK9zBcyJDD7xz/giphy.gif?cid=ecf05e47iax25q6fryq6mbf9gs6499bculr1f0tl1ydz71fe&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="Landing Page GIF"
                className="mx-auto shadow-lg transform transition-transform duration-200 cursor-pointer border border-gray-100 rounded-lg max-w-full"
                style={{ maxWidth: '80%', maxHeight: '400px' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                  e.currentTarget.style.boxShadow = '8px 12px 16px rgba(200, 200, 255, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '4px 8px 12px rgba(100, 2, 105, 0.2)';
                }}
              />
            </div>
          </AwesomeReveal>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;







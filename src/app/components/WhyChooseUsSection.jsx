'use client'
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import AwesomeReveal from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-16 bg-gray-100" ref={sectionRef}>
      <Container maxWidth="lg">
        <div className="text-center">
          <AwesomeReveal cascade damping={0.2} direction="top" visible={inView}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontSize: '2.75rem',
              }}
            >
              😍 Why Choose Us
            </Typography>
          </AwesomeReveal>
          <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(0, 0, 0, 0.7)',
                fontSize: '1.5rem',
                marginBottom: '4rem',
                fontWeight: 500,
              }}
            >
              Explore the reasons to love our platform
            </Typography>
          </AwesomeReveal>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4} className="text-center">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                <span className="text-6xl block mb-4" role="img" aria-label="🌟">
                  🌟
                </span>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.5rem',
                  }}
                >
                  Unique Selection
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.8)',
                    fontSize: '1.25rem',
                  }}
                >
                  Discover a diverse range of one-of-a-kind items you won't find anywhere else.
                </Typography>
              </AwesomeReveal>
            </Grid>
            <Grid item xs={12} md={4} className="text-center">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                <span className="text-6xl block mb-4" role="img" aria-label="🛡️">
                  🛡️
                </span>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.5rem',
                  }}
                >
                  Secure Transactions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.8)',
                    fontSize: '1.25rem',
                  }}
                >
                  Shop and sell with confidence, knowing that your transactions are safe and protected.
                </Typography>
              </AwesomeReveal>
            </Grid>
            <Grid item xs={12} md={4} className="text-center">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                <span className="text-6xl block mb-4" role="img" aria-label="🚀">
                  🚀
                </span>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.5rem',
                  }}
                >
                  Fast and Easy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(0, 0, 0, 0.8)',
                    fontSize: '1.25rem',
                  }}
                >
                  Experience a seamless process from browsing to purchasing, all in just a few clicks.
                </Typography>
              </AwesomeReveal>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

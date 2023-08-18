'use client'
import React from 'react';
import { Container, Typography,useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useInView } from 'react-intersection-observer';
import AwesomeReveal from 'react-awesome-reveal';

const HowItWorks = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <section className="bg-gradient-to-t from-gray-800 to-gray-900 text-white py-10 mb-0 min-h-screen flex items-center" ref={sectionRef}>
      <Container maxWidth="lg">
        <div className="text-center mt-4">
          <AwesomeReveal cascade damping={0.2} direction="top" visible={inView}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontSize: isSmallScreen ? '2.5rem' : '3.35rem',
                paddingBottom: '2rem',
              }}
            >
              🤨Discover How It Works
            </Typography>
          </AwesomeReveal>
          <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: isSmallScreen ? '2rem' : '2.25rem',
                marginBottom: '2rem',
                fontWeight: 500,
              }}
            >
              🚀 Ready to dive in? Let &apos s unveil the process:
            </Typography>
          </AwesomeReveal>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
            <div className="text-center animate-fadeInUp delay-1s">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                {/* Step 1 */}
                <div className="rounded-full bg-white p-5 inline-block shadow-md mb-2">
                  <span className="text-6xl block mb-4" role="img" aria-label="🛍️">
                    🛍️
                  </span>
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mt: 0,
                    color: '#FF80B5',
                    fontSize: isSmallScreen ? '1.25rem' : '1.5rem',
                  }}
                >
                  🛍️ Browse Listings
                </Typography>
              </AwesomeReveal>
            </div>
            <ArrowForwardIcon
              sx={{
                fontSize: '3rem',
                color: '#FF80B5',
              }}
            />
            <div className="text-center animate-fadeInUp delay-2s">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                {/* Step 2 */}
                <div className="rounded-full bg-white p-5 inline-block shadow-md mb-2">
                  <span className="text-6xl block mb-4" role="img" aria-label="🔍">
                    🔍
                  </span>
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mt: 0,
                    color: '#FF80B5',
                    fontSize: isSmallScreen ? '1.25rem' : '1.5rem',
                  }}
                >
                  🔍 Explore Selections
                </Typography>
              </AwesomeReveal>
            </div>
            <ArrowForwardIcon
              sx={{
                fontSize: '3rem',
                color: '#FF80B5',
              }}
            />
            <div className="text-center animate-fadeInUp delay-3s">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                {/* Step 3 */}
                <div className="rounded-full bg-white p-5 inline-block shadow-md mb-2">
                  <span className="text-6xl block mb-4" role="img" aria-label="💳">
                    💳
                  </span>
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mt: 0,
                    color: '#FF80B5',
                    fontSize: isSmallScreen ? '1.25rem' : '1.5rem',
                  }}
                >
                  💳 Secure Transactions
                </Typography>
              </AwesomeReveal>
            </div>
            <ArrowForwardIcon
              sx={{
                fontSize: '3rem',
                color: '#FF80B5',
              }}
            />
            <div className="text-center animate-fadeInUp delay-4s">
              <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
                {/* Step 4 */}
                <div className="rounded-full bg-white p-5 inline-block shadow-md mb-2">
                  <span className="text-6xl block mb-4" role="img" aria-label="🎁">
                    🎁
                  </span>
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mt: 0,
                    color: '#FF80B5',
                    fontSize: isSmallScreen ? '1.25rem' : '1.5rem',
                  }}
                >
                  🎁 Enjoy Your Purchase
                </Typography>
              </AwesomeReveal>
            </div>
          </div>
          <AwesomeReveal cascade damping={0.2} direction="bottom" visible={inView}>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: isSmallScreen ? '1.25rem' : '1.25rem',
                marginTop: '2rem',
                fontWeight: 500,
              }}
            >
              Dive into the world of hassle-free transactions where you can discover unique items with a click 🌟. Our platform guarantees secure payments and delightful experiences 🌈. Start your journey today and unlock the joy of second-hand treasures! 🪙
            </Typography>
          </AwesomeReveal>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;


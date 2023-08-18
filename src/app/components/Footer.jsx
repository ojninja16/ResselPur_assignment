'use client'
import React from 'react';
import { Container, Typography, Link, Grid, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-700 to-black text-white py-10">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Follow us on social media for updates and exciting deals.
            </Typography>
            <div className="mt-4">
              <IconButton href="#" target="_blank" rel="noopener" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="primary">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="#" target="_blank" rel="noopener" color="primary">
                <GitHubIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Have any questions? Feel free to reach out to our support team.
            </Typography>
            <Link href="mailto:support@example.com" className="mt-2" color="primary">
              support@example.com
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          © 2023 Secondify. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

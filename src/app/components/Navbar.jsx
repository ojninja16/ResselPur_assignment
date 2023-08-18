'use client'
import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Container,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  IconButton,
  Toolbar,
  useMediaQuery,
  Slide,
  useScrollTrigger,
  Link as MuiLink,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll';

const navigationItems = [
  { name: 'Product', href: 'product' },
  { name: 'Features', href: 'features' },
  { name: 'Marketplace', href: 'marketplace' },
  { name: 'Company', href: 'company' },
];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.9)', 
            boxShadow: 'none',
            borderBottom: 'none',
            padding: '0',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                padding: isSmallScreen ? '0.3rem 0' : '.8rem 0',
                background: 'linear-gradient(45deg, #C545EC, #FF80B5)',
                display: 'flex',
                alignItems: 'center',
                paddingInline: '1rem',
                borderRadius: '100px 100px 100px 100px',
              }}
            >
              <Link to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                <MuiLink
                  variant="h6"
              component="div"
              sx={{
                fontFamily: 'Montserrat, sans-serif,cursive',
                fontWeight: 800,
                fontSize: { xs: '2.8rem', sm: '4rem' },
                color: 'white',
                textShadow: '8px 5px 4px rgba(0, 0, 0, 1)',
                transform: 'rotate(-3deg)',
                letterSpacing: '0.06em',
                  }}
                >
                  Secondify
                </MuiLink>
              </Link>
              {isSmallScreen ? (
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawerHandler}
                  sx={{ display: { sm: 'none' }, color: 'white', marginRight: '1rem' }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <div sx={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                      <Button
                        color="inherit"
                        sx={{
                          fontFamily: 'Montserrat, sans-serif',
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontWeight: 600,
                          '&:hover': {
                            color: 'black',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={toggleDrawerHandler}
  sx={{
    '& .MuiDrawer-paper': {
      width: '250px',
      backgroundColor: 'rgba(255, 128, 181, 0.7)', 
      backdropFilter: 'blur(8px)', 
    },
  }}
>
  <List sx={{ paddingTop: '2rem' }}>
    {isSmallScreen &&
      navigationItems.map((item) => (
        <ListItem
          button
          key={item.name}
          onClick={toggleDrawerHandler}
          sx={{
            justifyContent: 'center',
            marginBottom: '1.5rem',
            '&:last-child': {
              marginBottom: '0', 
            },
          }}
        >
          <ListItemText
            primary={item.name}
            sx={{
              color: 'white',
              fontSize: '2rem',
              letterSpacing: '0.05em',
              fontWeight: 800,
            }}
          />
        </ListItem>
      ))}
  </List>
</Drawer>

    </div>
  );
};

export default NavBar;


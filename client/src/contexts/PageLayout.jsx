//PageLayout.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navbar from '../components/NavBar';


const Footer = () => (
  <Grid item xs={12} sx={{py: 3, mt: 'auto', backgroundColor: '#f8f8f8'}}>
    <Container maxWidth="sm">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date ().getFullYear ()} My first FERN App!
      </Typography>
    </Container>
  </Grid>
);

const PageLayout = ({children, routes}) => (
  <Grid container direction="column" minHeight="100vh">
    <Grid item xs={12}>
      <Navbar routes={routes} />
    </Grid>
    <Grid item xs={12} py={4}>
      <Container component="main">
        {children}
      </Container>
    </Grid>
    <Footer />
  </Grid>
);

export default PageLayout;

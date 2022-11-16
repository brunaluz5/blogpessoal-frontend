import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { FacebookRounded } from '@mui/icons-material';
import { Instagram, LinkedIn } from '@material-ui/icons';
import GitHub from '@mui/icons-material/GitHub'
import './Footer.css';

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className='box1'>
              <Typography  align="center" gutterBottom className='textos'>
                Conecte-se comigo em {' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" className='box1'>

              <a href="https://www.facebook.com/brubs05" target="_blank">
                <FacebookRounded className='redes'/>
              </a>
              <a href="https://www.instagram.com/brunaluz5" target="_blank">
                <Instagram className='redes' />
              </a>
              <a href="https://www.github.com/brunaluz5" target="_blank">
                <GitHub className='redes' />
              </a>
              <a
                href="https://www.linkedin.com/in/bluz/"
                target="_blank"
              >
                <LinkedIn className='redes' />
              </a>
            </Box>
            <Box className='box2'>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom className='textos'>
                © 2022 Copyright
              </Typography>
            </Box>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
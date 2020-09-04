import React from 'react';

import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Simulador Bolsa UNNE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Footer = () => {

    return (
      <Box pt={4}>
        <Copyright />
      </Box>
    );
};

export default Footer;
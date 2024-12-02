import React from 'react';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <footer mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '16px', xs: '14px' }, mt: '20px', textAlign: 'center', pb: '20px' }}>
        &copy; {new Date().getFullYear()} PowerProgress. All rights reserved.
      </Typography>
  </footer>
);

export default Footer;

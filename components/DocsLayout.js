import React from 'react';
import { Box } from '@chakra-ui/core';

import Navbar from './Navbar';

const DocsLayout = ({ children }) => (
  <>
    <Navbar />
    <Box maxW="650px" mx="auto" px={8} w="100%" wordBreak="break-all">
      {children}
    </Box>
  </>
);

export default DocsLayout;

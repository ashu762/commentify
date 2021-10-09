import React from 'react';
import { Heading, Box, Text, Button, Icon } from '@chakra-ui/core';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      p={8}
      height="100%"
    >
      <Heading size="md">Get comments on your site instantly</Heading>
      <Text>Start toady and grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;

import React from 'react';
import { Heading, Flex, Text, Button, Icon } from '@chakra-ui/core';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      p={8}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="lg" mb={2}>
        You haven`t added any sites
      </Heading>
      <Text mb={4}>Welcome. Let`s get started</Text>
      <AddSiteModal>Add Your First Site</AddSiteModal>
    </Flex>
  </>
);

export default EmptyState;

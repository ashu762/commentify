import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
  Icon
} from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="white"
        py={4}
        px={8}
        alignItems="center"
      >
        <Stack spacing={4} isInline align="center">
          <Icon name="logo" color="black" size="24px" align="center" />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex alignItems="center">
          <Link>Account</Link>
          <Avatar size="sm" ml={4} src={auth?.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.50" height="calc(100vh - 64px)">
        <Flex
          flexDirection="column"
          maxWidth={800}
          width="100%"
          ml="auto"
          mr="auto"
          p={8}
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;

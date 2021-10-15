import React from 'react';
import NextLink from 'next/link';
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
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="white"
        py={4}
        px={8}
        width="full"
        maxWidth="1250px"
        alignItems="center"
      >
        <Stack spacing={4} isInline align="center">
          <NextLink href="/" passHref>
            <Icon name="logo" color="black" size="24px" align="center" mr={6} />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link mr={6}>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {auth?.user && (
            <Button variant="ghost" onClick={() => auth.signout()}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" ml={4} src={auth?.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.100" height="calc(100vh - 64px)">
        <Flex
          flexDirection="column"
          maxWidth="1150px"
          width="100%"
          ml="auto"
          mr="auto"
          p={8}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;

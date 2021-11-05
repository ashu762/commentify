import { useState } from 'react';
import { Avatar, Heading, Box, Button, Flex, Text } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import Page from '@/components/Page';
import DashboardShell from '@/components/DashboardShell';

const Account = () => {
  const { user, signout } = useAuth();
  return (
    <DashboardShell>
      <Flex
        direction="column"
        maxW="600px"
        align={['left', 'center']}
        margin="0 auto"
      >
        <Flex direction="column" align={['left', 'center']} ml={4}>
          <Avatar
            w={['3rem', '6rem']}
            h={['3rem', '6rem']}
            mb={4}
            src={user?.photoUrl}
          />
          <Heading letterSpacing="-1px">{user?.name}</Heading>
          <Text>{user?.email}</Text>
        </Flex>

        <Flex justify="flex-end">
          <Button variant="ghost" ml={4} onClick={() => signout()}>
            Log Out
          </Button>
        </Flex>
      </Flex>
    </DashboardShell>
  );
};

const AccountPage = () => (
  <Page name="Account" path="/account">
    <Account />
  </Page>
);

export default AccountPage;

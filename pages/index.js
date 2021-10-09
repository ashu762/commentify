import Head from 'next/head';
import { Heading, Text, Button, Code, Icon, Flex } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Commentify</title>
      </Head>

      <Icon name="logo" color="black" size="36px" />

      {auth.user ? (
        <Button as="a" href="/dashboard" mt={4}>
          View Dashboard
        </Button>
      ) : (
        <Button mt={4} onClick={(e) => auth.signInWithGithub()} size="sm">
          Sign In
        </Button>
      )}
    </Flex>
  );
}

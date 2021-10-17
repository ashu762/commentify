import Head from 'next/head';
import {
  Heading,
  Text,
  Button,
  Code,
  Icon,
  Flex,
  Stack
} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(document.cookie && document.cookie.includes('commentify-auth')){
                   window.location.href='/sites'
              }`
          }}
        />
        <title>Commentify</title>
      </Head>

      <Icon name="logo" color="black" size="36px" />

      {auth.user ? (
        <Button
          as="a"
          href="/sites"
          mt={4}
          size="md"
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <Stack>
          <Button
            mt={4}
            onClick={(e) => auth.signInWithGithub()}
            size="md"
            leftIcon="github"
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign In With GitHub
          </Button>
          <Button
            mt={4}
            onClick={(e) => auth.signInWithGoogle()}
            size="md"
            leftIcon="google"
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="medium"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign In With Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
}

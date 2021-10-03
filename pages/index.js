import Head from 'next/head';
import { Heading, Text, Button, Code } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="container">
      <Head>
        <title>Commentify</title>
      </Head>
      <main>
        <Heading>Commentify</Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signInWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}

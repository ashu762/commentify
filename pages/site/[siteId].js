import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/core';

import { getAllFeedback, getAllSites } from 'lib/db-admin';
import { createFeedback } from '@/lib/db';
import Feedback from '@/components/Feedback';
import { useAuth } from '@/lib/auth';
import DashboardShell from '@/components/DashboardShell';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  let { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites?.map((site) => ({
    params: {
      siteId: site.id.toString()
    }
  }));

  return {
    paths,
    fallback: true
  };
}

function SiteFeedback({ initialFeedback }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const auth = useAuth();
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputRef.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    };
    inputRef.current.value = '';
    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  return (
    <DashboardShell>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
      >
        <Box as="form" onSubmit={onSubmit}>
          <FormControl id="email" my={8}>
            <FormLabel>Comment</FormLabel>
            <Input type="comment" ref={inputRef} />
            <Button fontWeight="medium" type="submit" mt={2}>
              Add Comment
            </Button>
          </FormControl>
        </Box>

        {allFeedback.map((feedback) => {
          return <Feedback key={feedback.id} {...feedback} />;
        })}
      </Box>
    </DashboardShell>
  );
}

export default SiteFeedback;

import React from 'react';
import { Box, Heading, Text, Divider, Icon, Flex, Code } from '@chakra-ui/core';
import { format, parseISO } from 'date-fns';

const Feedback = ({ author, text, createdAt }) => {
  const date = format(parseISO(createdAt), 'ppPP');
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align="center">
        <Heading size="sm" as="h3" mb={0} fontWeight="medium">
          {author || 'No Name'}
        </Heading>
      </Flex>
      <Text color="gray.500" mb={4} fontSize="xs">
        {date}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider borderColor="gray.200" my={6} />
    </Box>
  );
};

export default Feedback;

import { Flex, Link } from '@chakra-ui/core';

export default function FeedbackLink({ paths }) {
  const linkColor = {
    light: 'gray.900',
    dark: 'gray.100'
  };

  return (
    <Flex
      align={['flex-start', 'center']}
      justifyContent="space-between"
      mb={8}
      width="full"
      mt={1}
      direction={['column', 'row']}
    >
      <Link
        color={linkColor.light}
        fontWeight="bold"
        fontSize="sm"
        href={`/site/${paths.join('/')}`}
        target="_blank"
      >
        Leave a comment →
      </Link>
      <Link fontSize="xs" color="gray.500" href="/" target="_blank">
        Powered by Fast Feedback (Alpha)
      </Link>
    </Flex>
  );
}

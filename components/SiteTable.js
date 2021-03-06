import React from 'react';
import { Box, Link } from '@chakra-ui/core';
import { Table, Tr, Th, Td } from './Table';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <Box as="tr" key={site?.url}>
            <Td>
              <NextLink href="/site/[siteId]" as={`/site/${site.id}`} passHref>
                <Link color="blue.500" fontWeight="medium">
                  {site?.name}
                </Link>
              </NextLink>
            </Td>
            <Td>{site?.url}</Td>
            <Td>
              <NextLink
                href="/feedback/[siteId]"
                as={`/feedback/${site.id}`}
                passHref
              >
                <Link color="blue.500" fontWeight="medium">
                  View Feedback
                </Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;

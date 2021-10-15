import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/core';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from '@chakra-ui/core';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import fetcher from 'utils/fetcher';

function AddSiteModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();
  const initialRef = useRef();
  const toast = useToast();
  const { handleSubmit, register } = useForm();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth?.user?.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    };

    const { id } = createSite(newSite);
    toast({
      title: 'Success',
      description: "We've added your site",
      status: 'success',
      duration: 4000,
      isClosable: true
    });

    mutate(
      ['/api/sites', auth?.user?.token],
      async (data) => {
        return { sites: [...data?.sites, { id, ...newSite }] };
      },
      false
    );

    onClose();
  };

  return (
    <>
      <Button
        id="add-site-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                autoComplete="off"
                placeholder="My Site"
                ref={register({
                  required: true
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                name="url"
                autoComplete="off"
                placeholder="https://website.com"
                ref={register({
                  required: true
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button variantColor="teal" fontWeight="medium" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSiteModal;

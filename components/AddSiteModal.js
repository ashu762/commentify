import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/core';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/core';
import { createSite } from '@/lib/db';

function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const { handleSubmit, register } = useForm();
  const onCreateSite = (values) => createSite(values);

  return (
    <>
      <Button
        variant="solid"
        size="md"
        maxW="200px"
        fontWeight="medium"
        onClick={onOpen}
      >
        Add your first Site
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
                name="site"
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

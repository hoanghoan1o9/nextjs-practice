import { useState, useRef } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ROUTES } from '@constants/router';
import { USERS } from '@constants/users';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Heading,
  Text,
  Input,
} from '@chakra-ui/react';

import { IS_LOGIN, setItem } from '@helpers/localStorage';

const Login: NextPage = () => {
  const [message, setMessage] = useState('');

  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const isLogin = false;

  const handleLogin = () => {
    const userNameInput = userNameRef?.current?.value.trim().toLowerCase();
    const passwordInput = passwordRef?.current?.value.trim().toLowerCase();

    if (userNameInput === USERS.NAME && passwordInput === USERS.PASSWORD) {
      setItem(IS_LOGIN, true);
      router.push(ROUTES.HOME_PAGE);
    } else {
      setMessage('Wrong password or user name');
    }
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Shady Rhymes </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Username: admin | Password: admin
          </Text>
        </Stack>
        <Box rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack>
            <FormControl id="email">
              <FormLabel>User name</FormLabel>
              <Input
                variant="outline"
                ref={userNameRef}
                type="email"
                placeholder="User name"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                variant="outline"
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </FormControl>
            <FormLabel display={isLogin ? 'nome' : 'block'} color="red">
              {message}
            </FormLabel>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                mt="20px"
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;

import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ROUTES } from '@constants/router';
import { USERS } from '@constants/users';

// import { Input } from '@components/common/Input';

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
  const [userNameInput, setUsernameInput] = useState('');
  const [passwordInput, setpasswordInput] = useState('');
  const [message, setmessage] = useState('');

  const router = useRouter();
  const isLogin = false;

  const handleLogin = () => {
    if (userNameInput === USERS.NAME && passwordInput === USERS.PASSWORD) {
      setItem(IS_LOGIN, true);
      router.push(ROUTES.HOME_PAGE);
    } else {
      setmessage('Wrong password or user name');
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
                type="email"
                placeholder="User name"
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Passeword"
                onChange={(e) => setpasswordInput(e.target.value)}
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

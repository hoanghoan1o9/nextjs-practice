// Libraries
import React, { Component, ErrorInfo } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

// Constants
import { APP_ERRORS } from '@constants/errors';
import { APP_MESSAGES } from '@constants/messages';

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <Box
          minH='100vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
          px='10px'>
          <Flex
            flexDir='column'
            justifyContent='center'
            alignItems='center'>
            <h2>{APP_ERRORS.DEFAULT_ERROR_APIS}</h2><br/>
            <NextLink href='/'><Link color='primary' >{APP_MESSAGES.BACK_TO_HOME}</Link></NextLink>
          </Flex>
        </Box>
      );
    }

   return this.props.children;
  }
}

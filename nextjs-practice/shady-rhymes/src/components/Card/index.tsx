// Libraries
import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Text } from '@components/common/Text';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

// Styles
import styles from './Card.module.css';

interface CardProps {
  href: APP_IMAGE_URLS;
  title: string;
  description: string;
}

const CardItem = ({ href, title, description }: CardProps) => {
  return (
    <Box className={styles['card-container']}>
      <Image src={href} alt={title} width={60} height={60} />
      <Text value={title} w="144px" pl="20px" my="10px" />
      <Text value={description} w="385px" px="20px" mt="10px" mb="20px" />
      <Link href="/">
        <ChakraLink pl="20px" color="#f79489">
          {' '}
          more info
        </ChakraLink>
      </Link>
    </Box>
  );
};

export { CardItem };

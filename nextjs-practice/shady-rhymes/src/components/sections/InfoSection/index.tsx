// Libs
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';

// Components
import Logo from '@components/common/Logo';

// Constants
import { APP_IMAGE_URLS } from '@constants/images';

interface FeatureProps {
  text: string;
  color?: string;
  fontWeight?: string;
  lineHeight?: string;
  icon?: React.ReactNode;
}

const Feature = ({
  text,
  fontWeight = '400',
  lineHeight = '36px',
  icon,
  color = '#564e4ee',
}: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex align={'center'} justify={'space-between'} width={'100%'}>
        <Text
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          fontSize={'default'}
          color={color}
          flex={1}
        >
          {text}
        </Text>
        <Box>{icon}</Box>
      </Flex>
    </Stack>
  );
};

export const InforSection = () => {
  return (
    <Container maxW={'9xl'} py={12} mt="62px">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading
            color={'#564e4e'}
            fontSize={'large'}
            fontWeight={500}
            lineHeight={'72px'}
          >
            Visualize your ideas with us
          </Heading>
          <Text color={'#564e4Ee'} lineHeight={'36px'} fontSize={'default'}>
            We are ready to help you build and also realize the room design that
            you dream of, with our experts and also the best category
            recommendations from us
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              text={'Modern'}
              icon={
                <Logo
                  width={16}
                  height={2}
                  alt={'Minus icon'}
                  url={APP_IMAGE_URLS.MINUS_ICON}
                  blurDataURL={APP_IMAGE_URLS.MINUS_ICON}
                />
              }
            />
            <Feature
              fontWeight={'300'}
              text="Modern design is a term in the design world that refers to a house
              with a clean design, simple color choices, the use of materials
              including metal, glass, and steel, and is usually accompanied by
              clean lines."
            />
            <Feature
              icon={
                <Logo
                  width={16}
                  height={16}
                  alt={'Plus icon'}
                  url={APP_IMAGE_URLS.PLUS_ICON}
                  blurDataURL={APP_IMAGE_URLS.PLUS_ICON}
                />
              }
              text={'Contemporary'}
            />
            <Feature
              icon={
                <Logo
                  width={16}
                  height={16}
                  alt={'Plus icon'}
                  url={APP_IMAGE_URLS.PLUS_ICON}
                  blurDataURL={APP_IMAGE_URLS.PLUS_ICON}
                />
              }
              text={'Minimalis'}
            />
            <Feature
              icon={
                <Logo
                  width={16}
                  height={16}
                  alt={'Plus icon'}
                  url={APP_IMAGE_URLS.PLUS_ICON}
                  blurDataURL={APP_IMAGE_URLS.PLUS_ICON}
                />
              }
              text={'Industrial'}
            />
            <Feature text={'See more catagory'} color="#f79489" />
          </Stack>
        </Stack>
        <Flex>
          <Logo
            alt={'Room'}
            width={900}
            height={600}
            url={APP_IMAGE_URLS.INFO_IMAGE}
            blurDataURL={APP_IMAGE_URLS.INFO_IMAGE}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const DishItem = ({ item }) => {
    return (
        <Flex
            mt="3"
            mb="3"
            pb="3"
            borderBottom="1px solid transparent"
            borderColor="gray.200"
            _dark={{ borderColor: 'gray.800' }}
        >
            <Box
                position="relative"
                width="130px"
                height="90px"
                borderRadius="6px"
                overflow="hidden"
                mr="3"
            >
                <Box
                    style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                    position="absolute"
                    bgSize="contain"
                    bgPos="center"
                    inset="0"
                ></Box>
                <Box
                    style={{ backgroundImage: `url(${item.image_url})` }}
                    position="absolute"
                    bgSize="contain"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    inset="0"
                    zIndex="1"
                ></Box>
            </Box>
            <Flex flexDir="column">
                <Text fontSize="md" fontWeight="500">
                    {item.name}
                </Text>
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                    Quantity: {item.quantity}
                </Text>
                <Text mt="auto" fontSize="md" fontWeight="600">
                    Price: {`${new Intl.NumberFormat('vi-VN').format(item.price)} đ`}
                </Text>
            </Flex>
            <Flex ml="auto">
                <Text mt="auto" fontSize="md" fontWeight="600">
                    {`${new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)} đ`}
                </Text>
            </Flex>
        </Flex>
    );
};

export default DishItem;

import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const DishItem = () => {
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
                style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                width="130px"
                height="80px"
                borderRadius="6px"
                bgSize="contain"
                bgPos="center"
                mr="3"
            ></Box>
            <Flex flexDir="column">
                <Text fontSize="md" fontWeight="500">
                    Hamburger Salad
                </Text>
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                    Quantity: 2
                </Text>
                <Text mt="auto" fontSize="md" fontWeight="600">
                    Price: 120.000 đ
                </Text>
            </Flex>
            <Flex ml="auto">
                <Text mt="auto" fontSize="md" fontWeight="600">
                    240.000 đ
                </Text>
            </Flex>
        </Flex>
    );
};

export default DishItem;

import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const DishItem = () => {
    return (
        <Box p="3.5" borderRadius="6px" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
            <Box
                style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                width="100%"
                aspectRatio="25/18"
                bgPos="center"
                bgSize="contain"
                borderRadius="6px"
            ></Box>
            <Text fontWeight="600" fontSize="20px" mt="3">
                Hamburger Salad
            </Text>
            <Text fontSize="16px" color="#777">
                1241 Sold
            </Text>
            <Text fontSize="22px" fontWeight="700" mt="2">
                120.000 đ
            </Text>
        </Box>
    );
};

export default DishItem;

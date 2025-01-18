'use client';

import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { Box, Text } from '@chakra-ui/react';

const DishItem = () => {
    const setOpenDishView = useMenuItemsPage(state => state.setOpenDishView);

    return (
        <Box p="3.5" borderRadius="6px" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
            <Box
                width="100%"
                aspectRatio="25/18"
                overflow="hidden"
                borderRadius="6px"
                onClick={() => setOpenDishView(true)}
            >
                <Box
                    style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                    width="100%"
                    height="100%"
                    bgPos="center"
                    bgSize="contain"
                    transition="transform ease 0.5s"
                    _hover={{ transform: 'scale(1.1)' }}
                    cursor="pointer"
                ></Box>
            </Box>
            <Text
                fontWeight="600"
                fontSize="20px"
                mt="3"
                cursor="pointer"
                onClick={() => setOpenDishView(true)}
            >
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

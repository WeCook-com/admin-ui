import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { LuChartSpline } from 'react-icons/lu';

const TrendingItem = () => {
    return (
        <Box py="6" borderTop="1px solid transparent" borderColor="gray.200">
            <Flex alignItems="center" px="4" justifyContent="space-between">
                <Flex alignItems="center">
                    <Text fontSize="22px" fontWeight="600" color="#acacac" mr="8">
                        #1
                    </Text>
                    <Box
                        style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                        width="200px"
                        height="130px"
                        borderRadius="6px"
                        bgSize="contain"
                        bgPos="center"
                        mr="6"
                    ></Box>
                    <Flex flexDir="column" justifyContent="center" alignItems="flex-start">
                        <Text fontSize="22px" fontWeight="600">
                            Hamburger Salad
                        </Text>
                        <HStack fontSize="18px" fontWeight="600">
                            12.000 đ <Box color="green.500">Hamburgers</Box>
                        </HStack>
                    </Flex>
                </Flex>
                <Flex alignItems="center">
                    <Icon color="green.500" fontSize="56px" mr="6">
                        <LuChartSpline />
                    </Icon>
                    <Box>
                        <Text fontSize="3xl" fontWeight="bold">
                            18
                        </Text>
                        <Text>Sales (15%)</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TrendingItem;

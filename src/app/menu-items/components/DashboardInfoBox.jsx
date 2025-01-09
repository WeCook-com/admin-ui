import { Box, Center, Flex, Text } from '@chakra-ui/react';

const DashboardInfoBox = ({ title, value, Icon }) => {
    return (
        <Flex
            bg="white"
            borderRadius="12px"
            px="3"
            py="4"
            alignItems="center"
            border="1px solid transparent"
            borderColor="gray.200"
            flex="1"
        >
            <Center bg="blue.100" color="blue.500" h="52px" w="52px" borderRadius="8px">
                <Icon size="24px" />
            </Center>
            <Box ml="2.5" flex="1">
                <Text fontSize="16px">{title}</Text>
                <Box fontSize="20px" fontWeight="bold" display="flex" alignItems="flex-end">
                    <Box>{value}</Box>
                    {/* <Box fontSize="14px" mb="1">
                            .000.000
                        </Box>
                        <Box ml="2">đ</Box> */}
                </Box>
            </Box>
        </Flex>
    );
};

export default DashboardInfoBox;

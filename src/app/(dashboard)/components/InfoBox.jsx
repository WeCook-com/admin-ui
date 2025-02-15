import { Skeleton } from '@/components/ui/skeleton';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

const InfoBox = ({ Icon, title, value }) => {
    return (
        <Flex
            bg="white"
            borderRadius="12px"
            px="5"
            py="6"
            alignItems="center"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        >
            <Center bg="blue.100" color="blue.500" h="60px" w="60px" borderRadius="8px">
                <Icon size="24px" />
            </Center>
            <Box ml="3" flex="1">
                <Text>{title}</Text>
                <Box fontSize="26px" fontWeight="bold" display="flex" alignItems="flex-end">
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

export const SkeletonInfoBox = () => {
    return (
        <Flex
            bg="white"
            borderRadius="12px"
            px="5"
            py="6"
            alignItems="center"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        >
            <Skeleton h="60px" w="60px" borderRadius="8px"></Skeleton>

            <Box ml="3" flex="1">
                <Skeleton h="24px" w="full"></Skeleton>
                <Skeleton h="32px" w="full" mt="1.5"></Skeleton>
            </Box>
        </Flex>
    );
};

export default InfoBox;

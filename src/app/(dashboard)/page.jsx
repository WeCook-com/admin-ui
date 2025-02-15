import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { LuRefreshCw } from 'react-icons/lu';
import ChartBoxContainer from './data-containers/ChartBoxContainer';
import InfoBoxContainer from './data-containers/InfoBoxContainer';
import NewOrdersContainer from './data-containers/NewOrdersContainer';

const DashboardPage = () => {
    return (
        <Box>
            <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="26px">
                    Dashboard
                </Text>
                <Flex alignItems="center">
                    <Text textStyle="sm" mr="2">
                        Activities during the day (7/12/2024 03:59 PM)
                    </Text>
                    <IconButton
                        size="xs"
                        width="30px"
                        height="30px"
                        variant="surface"
                        bg="white"
                        _hover={{ bg: 'gray.100' }}
                    >
                        <LuRefreshCw />
                    </IconButton>
                </Flex>
            </Flex>
            <InfoBoxContainer />
            <ChartBoxContainer />
            <NewOrdersContainer />
        </Box>
    );
};

export default DashboardPage;

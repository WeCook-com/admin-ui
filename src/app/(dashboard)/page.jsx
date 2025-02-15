import { Box, Flex, Text } from '@chakra-ui/react';
import ChartBoxContainer from './data-containers/ChartBoxContainer';
import InfoBoxContainer from './data-containers/InfoBoxContainer';
import NewOrdersContainer from './data-containers/NewOrdersContainer';
import RefreshBtn from './components/RefreshBtn';

const DashboardPage = () => {
    return (
        <Box>
            <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="26px">
                    Dashboard
                </Text>
                <RefreshBtn />
            </Flex>
            <InfoBoxContainer />
            <ChartBoxContainer />
            <NewOrdersContainer />
        </Box>
    );
};

export default DashboardPage;

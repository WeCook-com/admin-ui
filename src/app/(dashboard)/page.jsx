import { Box, Flex, Text } from '@chakra-ui/react';
import RefreshBtn from './components/RefreshBtn';
import dynamic from 'next/dynamic';

const ChartBoxContainer = dynamic(() => import('./data-containers/ChartBoxContainer'));
const InfoBoxContainer = dynamic(() => import('./data-containers/InfoBoxContainer'));
const NewOrdersContainer = dynamic(() => import('./data-containers/NewOrdersContainer'));

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

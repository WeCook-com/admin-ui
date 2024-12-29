import { Box, Flex, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import { LuCircleDollarSign, LuRefreshCw, LuTruck, LuUsersRound } from 'react-icons/lu';
import { PiPackage } from 'react-icons/pi';
import ChartBox from './components/ChartBox';
import InfoBox from './components/InfoBox';
import NewOrdersBox from './components/NewOrdersBox';

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
                    <IconButton size="xs" width="30px" height="30px" variant="surface">
                        <LuRefreshCw />
                    </IconButton>
                </Flex>
            </Flex>
            <SimpleGrid columns={4} gap="18px" mt="7">
                <InfoBox Icon={LuCircleDollarSign} title="Total Revenue" value="13,000 đ" />
                <InfoBox Icon={PiPackage} title="Total Orders" value="11.000" />
                <InfoBox Icon={LuUsersRound} title="Total Client" value="59" />
                <InfoBox Icon={LuTruck} title="Inventory Status" value="Low Stock" />
            </SimpleGrid>
            <SimpleGrid columns={2} gap="18px" mt="22px">
                <ChartBox title="Total Revenue" chartType="area" />
                <ChartBox title="Total Orders" chartType="bar" />
            </SimpleGrid>
            <Box mt="22px">
                <NewOrdersBox />
            </Box>
        </Box>
    );
};

export default DashboardPage;

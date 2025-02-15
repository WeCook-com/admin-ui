'use client';

import { Alert, SimpleGrid } from '@chakra-ui/react';
import ChartBox, { SkeletonChartBox } from '../components/ChartBox';
import dashboardApi from '@/apis/dashboardApi';

const ChartBoxContainer = () => {
    const { error, isLoading, data } = dashboardApi.getChartData();
    const chartData = data?.data;

    return (
        <>
            <SimpleGrid columns={2} gap="18px" mt="22px">
                {isLoading ? (
                    [1, 2].map(a => <SkeletonChartBox key={a} />)
                ) : (
                    <>
                        <ChartBox
                            title="Total Revenue"
                            chartType="area"
                            data={chartData.total_revenue}
                        />
                        <ChartBox
                            title="Total Orders"
                            chartType="bar"
                            data={chartData.total_orders}
                        />
                    </>
                )}
            </SimpleGrid>
            {error && (
                <Alert.Root status="error">
                    <Alert.Indicator />
                    <Alert.Title>There was an error processing your request</Alert.Title>
                </Alert.Root>
            )}
        </>
    );
};

export default ChartBoxContainer;

'use client';

import { Alert, Box } from '@chakra-ui/react';
import NewOrdersBox, { SkeletonNewOrdersBox } from '../components/NewOrdersBox';
import dashboardApi from '@/apis/dashboardApi';

const NewOrdersContainer = () => {
    const { data, isLoading, isValidating, error } = dashboardApi.getNewestOrders();

    return (
        <Box mt="22px">
            {isLoading || isValidating ? (
                <SkeletonNewOrdersBox />
            ) : (
                <NewOrdersBox data={data.data} />
            )}
            {error && (
                <Alert.Root status="error">
                    <Alert.Indicator />
                    <Alert.Title>There was an error processing your request</Alert.Title>
                </Alert.Root>
            )}
        </Box>
    );
};

export default NewOrdersContainer;

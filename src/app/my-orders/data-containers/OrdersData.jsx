'use client';

import orderApi from '@/apis/orderApi';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

const SelectActions = dynamic(() => import('../components/SelectActions'), {
    loading: () => <Skeleton width="400px" height="40px" mt="3"></Skeleton>,
    ssr: false,
});
const FilterOptions = dynamic(() => import('../components/FilterOptions'), {
    loading: () => <Skeleton width="100%" height="48px" mt="2"></Skeleton>,
    ssr: false,
});
const TableData = dynamic(() => import('../components/TableData'), {
    loading: () => <Skeleton width="100%" height="60vh" mt="3"></Skeleton>,
    ssr: false,
});
const Pagination = dynamic(() => import('../components/Pagination'), { ssr: false });

const OrdersData = () => {
    const { data, isLoading, isValidating, error } = orderApi.getOrdersList();

    console.log({ data, isLoading, isValidating, error });

    return (
        <>
            {isLoading || isValidating ? (
                <>
                    <Skeleton width="400px" height="40px" mt="3"></Skeleton>
                    <Skeleton width="100%" height="48px" mt="2"></Skeleton>
                    <Skeleton width="100%" height="60vh" mt="3"></Skeleton>
                </>
            ) : (
                <>
                    <SelectActions />
                    <FilterOptions />
                    <TableData data={data.data} />
                    <Pagination />
                </>
            )}
            {error && (
                <Alert.Root status="error">
                    <Alert.Indicator />
                    <Alert.Title>There was an error processing your request</Alert.Title>
                </Alert.Root>
            )}
        </>
    );
};

export default OrdersData;

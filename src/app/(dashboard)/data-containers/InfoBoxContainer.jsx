'use client';

import dashboardApi from '@/apis/dashboardApi';
import { Alert, SimpleGrid } from '@chakra-ui/react';
import { BiDish } from 'react-icons/bi';
import { LuCircleDollarSign, LuUsersRound } from 'react-icons/lu';
import { PiPackage } from 'react-icons/pi';
import InfoBox, { SkeletonInfoBox } from '../components/InfoBox';

const InfoBoxContainer = () => {
    const { data, error, isLoading, isValidating } = dashboardApi.getOverview();

    return (
        <>
            <SimpleGrid columns={4} gap="18px" mt="7">
                {isLoading || isValidating ? (
                    [1, 2, 3, 4].map(a => <SkeletonInfoBox key={a} />)
                ) : (
                    <>
                        <InfoBox
                            Icon={LuCircleDollarSign}
                            title="Total Revenue"
                            value={data.data.total_revenue}
                        />
                        <InfoBox
                            Icon={PiPackage}
                            title="Total Orders"
                            value={data.data.total_orders}
                        />
                        <InfoBox
                            Icon={LuUsersRound}
                            title="Total Client"
                            value={data.data.total_orders}
                        />
                        <InfoBox
                            Icon={BiDish}
                            title="Total Items Sold"
                            value={data.data.total_menu_items_sold}
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

export default InfoBoxContainer;

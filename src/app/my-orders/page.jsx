import { Box, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Modals = dynamic(() => import('./modals/Modals'));
const OrdersData = dynamic(() => import('./data-containers/OrdersData'));

const MyOrdersPage = () => {
    return (
        <Box>
            <Text fontWeight="bold" fontSize="26px">
                My Orders
            </Text>

            <OrdersData />

            <Modals />
        </Box>
    );
};

export default MyOrdersPage;

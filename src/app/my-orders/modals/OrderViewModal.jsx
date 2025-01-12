'use client';

import { DataListItem, DataListRoot } from '@/components/ui/data-list';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from '@/components/ui/dialog';
import useMyOrdersPage from '@/stores/useMyOrdersPage';
import { Badge, Box, Stack } from '@chakra-ui/react';
import DishItem from './DishItem';

const OrderViewModal = () => {
    const isOpenOrderView = useMyOrdersPage(state => state.isOpenOrderView);
    const setOpenOrderView = useMyOrdersPage(state => state.setOpenOrderView);

    return (
        <DialogRoot
            lazyMount
            open={isOpenOrderView}
            onOpenChange={e => setOpenOrderView(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Order DH12331 Details</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="3">
                        <DataListRoot orientation="horizontal">
                            <DataListItem
                                label="Status"
                                value={
                                    <Badge variant="surface" size="md" colorPalette="green">
                                        Completed
                                    </Badge>
                                }
                            />
                            <DataListItem label="Order ID" value="DH1231" />
                            <DataListItem label="Date" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="Customer Name" value="Khanh Hung" />
                            <DataListItem label="Phone" value="x" />
                            <DataListItem label="Email" value="khanhhung@gmail.com" />
                            <DataListItem label="Type" value="In Restaurant" />
                            <DataListItem label="Payment Type" value="Online Payment" />
                            <DataListItem label="Amount" value="1.211.000 đ" />
                            <DataListItem label="Dishes:" value="3 dishes" />
                        </DataListRoot>
                    </Stack>
                    <Box mt="5">
                        <DishItem />
                        <DishItem />
                        <DishItem />
                    </Box>
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default OrderViewModal;

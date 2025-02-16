'use client';

import orderApi from '@/apis/orderApi';
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
import { formatDate, getOrderStatusColor } from '@/utils';
import { Badge, Box, Center, Spinner, Stack, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const DishItem = dynamic(() => import('./DishItem'), { ssr: false });

const OrderViewModal = () => {
    const orderId = useMyOrdersPage(state => state.orderId);
    const isOpenOrderView = useMyOrdersPage(state => state.isOpenOrderView);
    const setOpenOrderView = useMyOrdersPage(state => state.setOpenOrderView);

    const { data, isLoading } = orderApi.getOrderDetails(orderId);
    const order = data?.data?.order;
    const order_items = data?.data?.items || [];

    console.log({ data, isLoading });

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
                    <DialogTitle>Order {order?.id ? `DH${order.id}` : ''} Details</DialogTitle>
                </DialogHeader>
                <DialogBody position="relative">
                    <Stack gap="3">
                        <DataListRoot orientation="horizontal">
                            <DataListItem
                                label="Status"
                                value={
                                    <Badge
                                        variant="subtle"
                                        size="md"
                                        textTransform="capitalize"
                                        colorPalette={getOrderStatusColor(order?.status)}
                                    >
                                        {order?.status ? order.status : 'Default'}
                                    </Badge>
                                }
                            />
                            <DataListItem label="Order ID" value={`DH${order?.id || 'xxx'}`} />
                            <DataListItem
                                label="Date"
                                value={order?.created_at ? formatDate(order?.created_at) : 'xxx'}
                            />
                            <DataListItem
                                label="Customer Name"
                                value={`${order?.customer_name || 'xxx'}`}
                            />
                            <DataListItem
                                label="Phone"
                                value={order?.phone ? order.phone : 'xxx'}
                            />
                            <DataListItem
                                label="Email"
                                value={order?.email ? order.email : 'xxx'}
                            />
                            <DataListItem
                                label="Type"
                                value={
                                    order?.formatted_order_type ? order.formatted_order_type : 'xxx'
                                }
                            />
                            <DataListItem
                                label="Payment Type"
                                value={
                                    order?.payment_type ? (
                                        order?.payment_type === 'pending' ? (
                                            <Badge colorPalette="yellow" size="md">
                                                Pending
                                            </Badge>
                                        ) : (
                                            <Text textTransform="capitalize">
                                                {order?.payment_type}
                                            </Text>
                                        )
                                    ) : (
                                        <span>xxx</span>
                                    )
                                }
                            />
                            <DataListItem
                                label="Amount"
                                value={
                                    order?.total_price
                                        ? `${new Intl.NumberFormat('vi-VN').format(
                                              order.total_price
                                          )} đ`
                                        : 'xxx'
                                }
                            />
                            <DataListItem
                                label="Dishes:"
                                value={
                                    order_items
                                        ? `${order_items.length} dish${
                                              order_items.length > 1 ? 'es' : ''
                                          }`
                                        : 'xxx'
                                }
                            />
                        </DataListRoot>
                    </Stack>
                    {order_items.length > 0 && (
                        <Box mt="5">
                            {order_items.map(item => (
                                <DishItem key={item.id} item={item} />
                            ))}
                        </Box>
                    )}

                    {isLoading && (
                        <Box pos="absolute" inset="0" bg="bg/80">
                            <Center h="full">
                                <Spinner color="blue.500" />
                            </Center>
                        </Box>
                    )}
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default OrderViewModal;

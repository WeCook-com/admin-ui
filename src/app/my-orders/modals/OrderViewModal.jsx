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
import {
    Badge,
    Box,
    Button,
    DialogActionTrigger,
    DialogFooter,
    Flex,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';

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
                    <DialogTitle>Order Details</DialogTitle>
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
                            <DataListItem label="Type" value="In Restaurant" />
                            <DataListItem label="Payment Type" value="Online Payment" />
                            <DataListItem label="Amount" value="1.211.000 đ" />
                            <DataListItem label="Dishes:" value="" />
                        </DataListRoot>
                    </Stack>
                    <Flex
                        mt="3"
                        mb="3"
                        pb="3"
                        borderBottom="1px solid transparent"
                        borderColor="gray.200"
                    >
                        <Box
                            style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                            width="130px"
                            height="80px"
                            borderRadius="6px"
                            bgSize="contain"
                            bgPos="center"
                            mr="3"
                        ></Box>
                        <Flex flexDir="column">
                            <Text fontSize="md" fontWeight="500">
                                Hamburger Salad
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                Quantity: 2
                            </Text>
                            <Text mt="auto" fontSize="md" fontWeight="600">
                                Price: 120.000 đ
                            </Text>
                        </Flex>
                        <Flex ml="auto">
                            <Text mt="auto" fontSize="md" fontWeight="600">
                                240.000 đ
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mt="3"
                        mb="3"
                        pb="3"
                        borderBottom="1px solid transparent"
                        borderColor="gray.200"
                    >
                        <Box
                            style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                            width="130px"
                            height="80px"
                            borderRadius="6px"
                            bgSize="contain"
                            bgPos="center"
                            mr="3"
                        ></Box>
                        <Flex flexDir="column">
                            <Text fontSize="md" fontWeight="500">
                                Hamburger Salad
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                Quantity: 2
                            </Text>
                            <Text mt="auto" fontSize="md" fontWeight="600">
                                Price: 120.000 đ
                            </Text>
                        </Flex>
                        <Flex ml="auto">
                            <Text mt="auto" fontSize="md" fontWeight="600">
                                240.000 đ
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mt="3"
                        mb="3"
                        pb="3"
                        borderBottom="1px solid transparent"
                        borderColor="gray.200"
                    >
                        <Box
                            style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                            width="130px"
                            height="80px"
                            borderRadius="6px"
                            bgSize="contain"
                            bgPos="center"
                            mr="3"
                        ></Box>
                        <Flex flexDir="column">
                            <Text fontSize="md" fontWeight="500">
                                Hamburger Salad
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                Quantity: 2
                            </Text>
                            <Text mt="auto" fontSize="md" fontWeight="600">
                                Price: 120.000 đ
                            </Text>
                        </Flex>
                        <Flex ml="auto">
                            <Text mt="auto" fontSize="md" fontWeight="600">
                                240.000 đ
                            </Text>
                        </Flex>
                    </Flex>
                    <Textarea placeholder="Add a note" mt="4" />
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Close</Button>
                    </DialogActionTrigger>
                    <Button colorPalette="blue" variant="surface">
                        Save
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default OrderViewModal;

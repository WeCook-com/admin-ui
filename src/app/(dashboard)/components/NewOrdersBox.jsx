import routes from '@/config/routes';
import { Badge, Box, Button, FormatNumber, Skeleton, Table, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HStack, IconButton } from '@chakra-ui/react';
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';
import { formatDate } from '@/utils';

const items = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
    { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
];

const NewOrdersBox = ({ data }) => {
    console.log(data);

    return (
        <Box
            bg="white"
            borderRadius="12px"
            px="5"
            py="6"
            alignItems="center"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        >
            <Text textStyle="2xl" fontWeight="bold">
                New Orders
            </Text>
            <Box mt="6">
                <Table.Root size="md" variant="line">
                    <Table.Header>
                        <Table.Row fontSize="16px">
                            <Table.ColumnHeader color="#aba5a3">Order ID</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Customer Name</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Date</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Type</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Payment Type</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Amount</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Status</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3" textAlign="end">
                                Action
                            </Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map(item => (
                            <Table.Row key={item.id} fontSize="16px">
                                <Table.Cell>#{item.id}</Table.Cell>
                                <Table.Cell>{item.customer_name}</Table.Cell>
                                <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
                                <Table.Cell>{item.formatted_order_type}</Table.Cell>
                                <Table.Cell textTransform="capitalize">
                                    {item.payment_type === 'pending' ? (
                                        <Badge colorPalette="yellow" size="md">
                                            Pending
                                        </Badge>
                                    ) : (
                                        <span>{item.payment_type}</span>
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    {`${new Intl.NumberFormat('vi-VN').format(item.total_price)} đ`}
                                </Table.Cell>
                                <Table.Cell>
                                    <Badge
                                        colorPalette="green"
                                        size="md"
                                        textTransform="capitalize"
                                    >
                                        {item.status}
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell textAlign="end">
                                    <HStack gap="1" justifyContent="flex-end">
                                        <Link href={routes.myOrders}>
                                            <IconButton variant="ghost">
                                                <LuEye />
                                            </IconButton>
                                        </Link>
                                        <Link href={routes.myOrders}>
                                            <IconButton variant="ghost">
                                                <LuPencil />
                                            </IconButton>
                                        </Link>
                                        <Link href={routes.myOrders}>
                                            <IconButton variant="ghost" colorPalette="red">
                                                <LuTrash2 />
                                            </IconButton>
                                        </Link>
                                    </HStack>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
            <Box mt="4" display="flex" alignItems="center" justifyContent="center" w="100%">
                <Link href={routes.myOrders}>
                    <Button variant="ghost" fontWeight="700" fontSize="16px" color="blue.500">
                        See All
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export const SkeletonNewOrdersBox = () => {
    return (
        <Box
            bg="white"
            borderRadius="12px"
            px="5"
            py="6"
            alignItems="center"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        >
            <Skeleton height="30px"></Skeleton>
            <Skeleton mt="4" height="350px"></Skeleton>
        </Box>
    );
};

export default NewOrdersBox;

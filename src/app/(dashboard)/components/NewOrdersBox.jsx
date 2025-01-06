import routes from '@/config/routes';
import { Box, Button, Table, Text } from '@chakra-ui/react';
import Link from 'next/link';

const items = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
    { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
];

const NewOrdersBox = () => {
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
                            <Table.ColumnHeader color="#aba5a3" textAlign="end">
                                Status
                            </Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map(item => (
                            <Table.Row key={item.id} fontSize="16px">
                                <Table.Cell>#00001</Table.Cell>
                                <Table.Cell>Khanh Hung</Table.Cell>
                                <Table.Cell>25/02/2024 - 10:30 AM</Table.Cell>
                                <Table.Cell>In Restaurant</Table.Cell>
                                <Table.Cell>Online</Table.Cell>
                                <Table.Cell>10.000 đ</Table.Cell>
                                <Table.Cell textAlign="end">
                                    <Box
                                        fontSize="13px"
                                        fontWeight="600"
                                        bg="green.500"
                                        py="1"
                                        px="2"
                                        borderRadius="6px"
                                        w="fit-content"
                                        ml="auto"
                                        color="white"
                                    >
                                        Completed
                                    </Box>
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

export default NewOrdersBox;

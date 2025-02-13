import DashboardInfoBox from '@/components/reusable/DashboardInfoBox';
import { Badge, Box, HStack, Table, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { LuCircleDollarSign } from 'react-icons/lu';
import FilterOptions from './components/FilterOptions';
import TransactionActions from './components/TransactionActions';

const TransactionViewModal = dynamic(() => import('./modals/TransactionViewModal'));

const items = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
    { id: 6, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 7, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 8, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 9, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 10, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 11, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 12, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 13, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 14, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 15, name: 'Headphones', category: 'Accessories', price: 199.99 },
];

const Transactions = () => {
    return (
        <>
            <Text fontWeight="bold" fontSize="26px">
                Transactions
            </Text>
            <Box
                bg="white"
                border="1px solid transparent"
                borderColor="gray.200"
                borderRadius="6px"
                mt="3"
                py="5"
                px="5"
            >
                <FilterOptions />
                <Text fontSize="22px" fontWeight="600" mb="3">
                    Dashboard
                </Text>
                <HStack gap="4">
                    <DashboardInfoBox
                        Icon={LuCircleDollarSign}
                        title="Total Transactions"
                        value="120"
                    />
                    <DashboardInfoBox
                        Icon={LuCircleDollarSign}
                        title="Total Revenue"
                        value="320.000.000 đ"
                    />
                    <DashboardInfoBox
                        Icon={LuCircleDollarSign}
                        title="Average Transaction Value"
                        value="320.000.000 đ"
                    />
                </HStack>
                <Text fontSize="22px" fontWeight="600" mb="3" mt="5">
                    Transactions List
                </Text>

                <Table.Root
                    size="md"
                    variant="line"
                    mt="3"
                    borderColor="gray.200"
                    borderWidth="1px"
                    borderStyle="solid"
                >
                    <Table.Header>
                        <Table.Row fontSize="16px">
                            <Table.ColumnHeader color="#aba5a3">Transaction ID</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Date & Time</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Payment Method</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Payment Source</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Amount</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Status</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3" textAlign="end">
                                Action
                            </Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map(item => (
                            <Table.Row key={item.id} fontSize="16px">
                                <Table.Cell>#00001</Table.Cell>
                                <Table.Cell>25/02/2024 - 10:30 AM</Table.Cell>
                                <Table.Cell>Online Payment</Table.Cell>
                                <Table.Cell>Paid In Restaurant</Table.Cell>
                                <Table.Cell>10.000 đ</Table.Cell>
                                <Table.Cell>
                                    <Badge size="md" variant="subtle" colorPalette="green">
                                        Paid
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell textAlign="end">
                                    <TransactionActions />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>

            <TransactionViewModal />
        </>
    );
};

export default Transactions;

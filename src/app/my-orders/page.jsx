import { InputGroup } from '@/components/ui/input-group';
import { Box, Flex, IconButton, Input, Table, Text } from '@chakra-ui/react';
import { LuRefreshCw, LuSearch } from 'react-icons/lu';
import FilterOptions from './components/FilterOptions';
import Pagination from './components/Pagination';

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

const MyOrdersPage = () => {
    return (
        <Box>
            <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="26px">
                    My Orders
                </Text>
                <Flex alignItems="center">
                    <IconButton
                        size="xs"
                        width="30px"
                        height="30px"
                        variant="surface"
                        bg="white"
                        _hover={{ bg: 'gray.100' }}
                    >
                        <LuRefreshCw />
                    </IconButton>
                </Flex>
            </Flex>
            <InputGroup
                mt="3"
                width="25%"
                minWidth="350px"
                startElement={<LuSearch size={18} />}
                bg="white"
            >
                <Input
                    style={{ paddingLeft: '38px !important' }}
                    placeholder="Search order by Order ID or Phone Number..."
                    size="md"
                />
            </InputGroup>
            <FilterOptions />
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
            <Pagination />
        </Box>
    );
};

export default MyOrdersPage;

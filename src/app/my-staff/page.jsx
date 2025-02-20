import { Badge, Box, HStack, IconButton, Table, Text } from '@chakra-ui/react';
import React from 'react';
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';
import Actions from './components/Actions';

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

const MyStaffPage = () => {
    return (
        <>
            <Text fontWeight="bold" fontSize="26px">
                My Staff
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
                <Actions />
                <Table.Root
                    size="md"
                    variant="line"
                    mt="5"
                    borderColor="gray.200"
                    borderWidth="1px"
                    borderStyle="solid"
                >
                    <Table.Header>
                        <Table.Row fontSize="16px">
                            <Table.ColumnHeader color="#aba5a3">Staff ID</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Name</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Role</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Last Shift</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3">Status</Table.ColumnHeader>
                            <Table.ColumnHeader color="#aba5a3" textAlign="end">
                                Action
                            </Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items.map(item => (
                            <Table.Row key={item.id} fontSize="16px">
                                <Table.Cell>Khanh Hung</Table.Cell>
                                <Table.Cell>Price</Table.Cell>
                                <Table.Cell>25/02/2024 - 10:30 AM</Table.Cell>
                                <Table.Cell>25/02/2024 - 10:30 AM</Table.Cell>
                                <Table.Cell>
                                    <Badge size="md" variant="subtle" colorPalette="green">
                                        Active
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell textAlign="end">
                                    <HStack gap="1" justifyContent="flex-end">
                                        <IconButton variant="ghost">
                                            <LuEye />
                                        </IconButton>
                                        <IconButton variant="ghost">
                                            <LuPencil />
                                        </IconButton>
                                        <IconButton variant="ghost" colorPalette="red">
                                            <LuTrash2 />
                                        </IconButton>
                                    </HStack>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
        </>
    );
};

export default MyStaffPage;

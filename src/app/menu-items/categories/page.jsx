import { Button, Flex, HStack, IconButton, Table, Text } from '@chakra-ui/react';
import { LuPencil, LuPlus, LuTrash2 } from 'react-icons/lu';

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

const CategoriesPage = () => {
    return (
        <>
            <Flex justifyContent="space-between">
                <Text fontSize="22px" fontWeight="600" mb="3">
                    All Categories
                </Text>
                <Button variant="subtle" colorPalette="blue">
                    <LuPlus /> Add new Category
                </Button>
            </Flex>
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
                        <Table.ColumnHeader color="#aba5a3">No.</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">Category Name</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">Date Created</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">Items Included</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3" textAlign="end">
                            Action
                        </Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.map(item => (
                        <Table.Row key={item.id} fontSize="16px">
                            <Table.Cell>No.1</Table.Cell>
                            <Table.Cell>Hamburgers</Table.Cell>
                            <Table.Cell>25/02/2024 - 10:30 AM</Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell textAlign="end">
                                <HStack gap="1" justifyContent="flex-end">
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
        </>
    );
};

export default CategoriesPage;

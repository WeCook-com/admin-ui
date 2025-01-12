import { Badge, Table } from '@chakra-ui/react';
import OrderActions from './OrderActions';

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

const TableData = () => {
    return (
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
                        <Table.Cell>Khanh Hung</Table.Cell>
                        <Table.Cell>25/02/2024 - 10:30 AM</Table.Cell>
                        <Table.Cell>In Restaurant</Table.Cell>
                        <Table.Cell>Online</Table.Cell>
                        <Table.Cell>10.000 đ</Table.Cell>
                        <Table.Cell>
                            <Badge variant="surface" size="lg" colorPalette="green">
                                Completed
                            </Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <OrderActions />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default TableData;

import { Box, HStack, Table, Text } from '@chakra-ui/react';
import { BiDish } from 'react-icons/bi';
import { LuCircleDollarSign, LuList } from 'react-icons/lu';
import DashboardInfoBox from './components/DashboardInfoBox';
import TrendingItem from './components/TrendingItem';

const items = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
    { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
];

const MenuItemsPage = () => {
    return (
        <>
            <Text fontSize="22px" fontWeight="600" mb="3">
                Dashboard
            </Text>
            <HStack gap="4">
                <DashboardInfoBox Icon={LuList} title="Total Categories" value="10" />
                <DashboardInfoBox Icon={BiDish} title="Total Dishes" value="68" />
                <DashboardInfoBox
                    Icon={LuCircleDollarSign}
                    title="Top-Selling Category"
                    value="Hamburgers"
                />
                <DashboardInfoBox Icon={BiDish} title="Top-Selling Product" value="abc" />
            </HStack>
            <Text fontSize="22px" fontWeight="600" mt="5" mb="3">
                Trending Categories
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
                        <Table.ColumnHeader color="#aba5a3">Ranking</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">Category</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">Items Sold</Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">
                            Sales Contribution %
                        </Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">
                            Total Menu Items Included
                        </Table.ColumnHeader>
                        <Table.ColumnHeader color="#aba5a3">Sales Revenue</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.map(item => (
                        <Table.Row key={item.id} fontSize="16px">
                            <Table.Cell>#{item.id}</Table.Cell>
                            <Table.Cell>Hamburgers</Table.Cell>
                            <Table.Cell>124</Table.Cell>
                            <Table.Cell>20%</Table.Cell>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>10.123.531 đ</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            <Text fontSize="22px" fontWeight="600" mt="7" mb="3">
                Trending Items
            </Text>
            <Box>
                <TrendingItem />
                <TrendingItem />
                <TrendingItem />
                <TrendingItem />
                <TrendingItem />
            </Box>
        </>
    );
};

export default MenuItemsPage;

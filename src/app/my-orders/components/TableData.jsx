import { Badge, Table } from '@chakra-ui/react';
import { formatDate, getOrderStatusColor } from '@/utils';
import dynamic from 'next/dynamic';

const MyOrderActions = dynamic(() => import('./MyOrderActions'));

const TableData = ({ data }) => {
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
                                colorPalette={getOrderStatusColor(item.status)}
                                size="md"
                                textTransform="capitalize"
                            >
                                {item.status}
                            </Badge>
                        </Table.Cell>
                        <Table.Cell textAlign="end">
                            <MyOrderActions orderId={item.id} />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
};

export default TableData;

export const getOrderStatusColor = status => {
    switch (status?.toLowerCase()) {
        case 'pending':
            return 'yellow';
        case 'preparing':
            return 'blue';
        case 'completed':
            return 'green';
        case 'canceled':
            return 'red';
        default:
            return 'gray';
    }
};

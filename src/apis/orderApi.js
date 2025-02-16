import useSWR from 'swr';

const orderApi = {
    getOrdersList() {
        const url = '/orders/list';
        return useSWR(url);
    },
    getOrderDetails(orderId) {
        const url = `/orders/${orderId}/details`;
        return useSWR(url);
    },
};

export default orderApi;

import useSWR from 'swr';

const dashboardApi = {
    getOverview() {
        const url = '/dashboard/overview';
        return useSWR(url);
    },
    getChartData() {
        const url = '/dashboard/chart-data';
        return useSWR(url);
    },
    getNewestOrders() {
        const url = '/dashboard/newest-orders';
        return useSWR(url);
    },
};

export default dashboardApi;

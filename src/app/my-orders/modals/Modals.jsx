'use client';

import useMyOrdersPage from '@/stores/useMyOrdersPage';
import dynamic from 'next/dynamic';

const OrderViewModal = dynamic(() => import('./OrderViewModal'), { ssr: false });
const OrderEditDetailsModal = dynamic(() => import('./OrderEditDetailsModal'), {
    ssr: false,
});
const OrderEditStatusModal = dynamic(() => import('./OrderEditStatusModal'), { ssr: false });
const OrderDeleteModal = dynamic(() => import('./OrderDeleteModal'), { ssr: false });

const Modals = () => {
    const isOpenOrderView = useMyOrdersPage(state => state.isOpenOrderView);
    const isOpenOrderEditDetails = useMyOrdersPage(state => state.isOpenOrderEditDetails);
    const isOpenOrderEditStatus = useMyOrdersPage(state => state.isOpenOrderEditStatus);
    const isOpenOrderDelete = useMyOrdersPage(state => state.isOpenOrderDelete);

    return (
        <>
            {isOpenOrderView && <OrderViewModal />}
            {isOpenOrderEditDetails && <OrderEditDetailsModal />}
            {isOpenOrderEditStatus && <OrderEditStatusModal />}
            {isOpenOrderDelete && <OrderDeleteModal />}
        </>
    );
};

export default Modals;

import { create } from 'zustand';

const useMyOrdersPage = create(set => ({
    orderId: null,
    isOpenOrderView: false,
    isOpenOrderEditDetails: false,
    isOpenOrderEditStatus: false,
    isOpenOrderDelete: false,

    setOpenOrderView(bool, orderId) {
        set(state => ({
            isOpenOrderView: bool,
            orderId,
        }));
    },
    setOpenOrderEditDetails(bool, orderId) {
        set(state => ({
            isOpenOrderEditDetails: bool,
            orderId,
        }));
    },
    setOpenOrderEditStatus(bool, orderId) {
        set(state => ({
            isOpenOrderEditStatus: bool,
            orderId,
        }));
    },
    setOpenOrderDelete(bool, orderId) {
        set(state => ({
            isOpenOrderDelete: bool,
            orderId,
        }));
    },
}));

export default useMyOrdersPage;

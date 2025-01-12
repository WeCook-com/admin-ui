import { create } from 'zustand';

const useMyOrdersPage = create(set => ({
    isOpenOrderView: false,
    isOpenOrderEditDetails: false,
    isOpenOrderEditStatus: false,
    isOpenOrderDelete: false,

    setOpenOrderView(bool) {
        set(state => ({
            isOpenOrderView: bool,
        }));
    },
    setOpenOrderEditDetails(bool) {
        set(state => ({
            isOpenOrderEditDetails: bool,
        }));
    },
    setOpenOrderEditStatus(bool) {
        set(state => ({
            isOpenOrderEditStatus: bool,
        }));
    },
    setOpenOrderDelete(bool) {
        set(state => ({
            isOpenOrderDelete: bool,
        }));
    },
}));

export default useMyOrdersPage;

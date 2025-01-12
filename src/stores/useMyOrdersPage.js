import { create } from 'zustand';

const useMyOrdersPage = create(set => ({
    isOpenOrderView: false,

    setOpenOrderView(bool) {
        set(state => ({
            isOpenOrderView: bool,
        }));
    },
}));

export default useMyOrdersPage;

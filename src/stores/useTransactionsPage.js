import { create } from 'zustand';

const useTransactionsPage = create(set => ({
    isOpenTransactionView: false,

    setOpenTransactionView(bool) {
        set(state => ({
            isOpenTransactionView: bool,
        }));
    },
}));

export default useTransactionsPage;

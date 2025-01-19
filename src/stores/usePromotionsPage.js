import { create } from 'zustand';

const usePromotionsPage = create(set => ({
    isOpenPromotionAdd: false,
    isOpenPromotionView: false,
    isOpenPromotionEdit: false,
    isOpenPromotionDelete: false,

    setOpenPromotionAdd(bool) {
        set(state => ({
            isOpenPromotionAdd: bool,
        }));
    },
    setOpenPromotionView(bool) {
        set(state => ({
            isOpenPromotionView: bool,
        }));
    },
    setOpenPromotionEdit(bool) {
        set(state => ({
            isOpenPromotionEdit: bool,
        }));
    },
    setOpenPromotionDelete(bool) {
        set(state => ({
            isOpenPromotionDelete: bool,
        }));
    },
}));

export default usePromotionsPage;

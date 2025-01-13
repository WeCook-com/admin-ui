import { create } from 'zustand';

const useMenuItemsPage = create(set => ({
    isOpenCategoryAdd: false,
    isOpenCategoryEdit: false,
    isOpenCategoryDelete: false,

    setOpenCategoryAdd(bool) {
        set(state => ({
            isOpenCategoryAdd: bool,
        }));
    },
    setOpenCategoryEdit(bool) {
        set(state => ({
            isOpenCategoryEdit: bool,
        }));
    },
    setOpenCategoryDelete(bool) {
        set(state => ({
            isOpenCategoryDelete: bool,
        }));
    },
}));

export default useMenuItemsPage;

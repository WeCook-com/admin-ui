import { create } from 'zustand';

const useMenuItemsPage = create(set => ({
    isOpenCategoryAdd: false,
    isOpenCategoryEdit: false,
    isOpenCategoryDelete: false,

    isOpenDishAdd: false,
    isOpenDishView: false,
    isOpenDishEdit: false,
    isOpenDishDelete: false,

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

    setOpenDishAdd(bool) {
        set(state => ({
            isOpenDishAdd: bool,
        }));
    },
    setOpenDishView(bool) {
        set(state => ({
            isOpenDishView: bool,
        }));
    },
    setOpenDishEdit(bool) {
        set(state => ({
            isOpenDishEdit: bool,
        }));
    },
    setOpenDishDelete(bool) {
        set(state => ({
            isOpenDishDelete: bool,
        }));
    },
}));

export default useMenuItemsPage;

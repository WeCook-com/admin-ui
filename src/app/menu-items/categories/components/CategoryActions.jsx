'use client';

import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { HStack, IconButton } from '@chakra-ui/react';
import { LuPencil, LuTrash2 } from 'react-icons/lu';

const CategoryActions = () => {
    const setOpenCategoryDelete = useMenuItemsPage(state => state.setOpenCategoryDelete);
    const setOpenCategoryEdit = useMenuItemsPage(state => state.setOpenCategoryEdit);

    return (
        <HStack gap="1" justifyContent="flex-end">
            <IconButton variant="ghost" onClick={() => setOpenCategoryEdit(true)}>
                <LuPencil />
            </IconButton>
            <IconButton
                variant="ghost"
                colorPalette="red"
                onClick={() => setOpenCategoryDelete(true)}
            >
                <LuTrash2 />
            </IconButton>
        </HStack>
    );
};

export default CategoryActions;

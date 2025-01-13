'use client';

import { Button } from '@/components/ui/button';
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import React from 'react';
import { LuPlus } from 'react-icons/lu';

const AddCategoryBtn = () => {
    const setOpenCategoryAdd = useMenuItemsPage(state => state.setOpenCategoryAdd);

    return (
        <Button variant="subtle" colorPalette="blue" onClick={() => setOpenCategoryAdd(true)}>
            <LuPlus /> Add new Category
        </Button>
    );
};

export default AddCategoryBtn;

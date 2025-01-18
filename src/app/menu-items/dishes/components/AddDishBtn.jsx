'use client';

import { Button } from '@/components/ui/button';
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { LuPlus } from 'react-icons/lu';

const AddDishBtn = () => {
    const setOpenDishAdd = useMenuItemsPage(state => state.setOpenDishAdd);

    return (
        <Button variant="subtle" colorPalette="blue" onClick={() => setOpenDishAdd(true)}>
            <LuPlus /> Add new Item
        </Button>
    );
};

export default AddDishBtn;

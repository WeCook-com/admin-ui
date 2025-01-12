'use client';

import useMyOrdersPage from '@/stores/useMyOrdersPage';
import { HStack, IconButton } from '@chakra-ui/react';
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';

const OrderActions = () => {
    const setOpenOrderView = useMyOrdersPage(state => state.setOpenOrderView);

    return (
        <HStack gap="1" justifyContent="flex-end">
            <IconButton variant="ghost" onClick={() => setOpenOrderView(true)}>
                <LuEye />
            </IconButton>
            <IconButton variant="ghost">
                <LuPencil />
            </IconButton>
            <IconButton variant="ghost" colorPalette="red">
                <LuTrash2 />
            </IconButton>
        </HStack>
    );
};

export default OrderActions;

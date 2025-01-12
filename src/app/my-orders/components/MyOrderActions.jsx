'use client';

import useMyOrdersPage from '@/stores/useMyOrdersPage';
import { HStack, IconButton } from '@chakra-ui/react';
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';

const MyOrderActions = () => {
    const setOpenOrderView = useMyOrdersPage(state => state.setOpenOrderView);
    const setOpenOrderEditDetails = useMyOrdersPage(state => state.setOpenOrderEditDetails);
    const setOpenOrderEditStatus = useMyOrdersPage(state => state.setOpenOrderEditStatus);
    const setOpenOrderDelete = useMyOrdersPage(state => state.setOpenOrderDelete);

    return (
        <HStack gap="1" justifyContent="flex-end">
            <IconButton variant="ghost" onClick={() => setOpenOrderView(true)}>
                <LuEye />
            </IconButton>
            <MenuRoot>
                <MenuTrigger asChild>
                    <IconButton variant="ghost">
                        <LuPencil />
                    </IconButton>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value="edit-status" onClick={() => setOpenOrderEditStatus(true)}>
                        Edit Status
                    </MenuItem>
                    <MenuItem value="edit-details" onClick={() => setOpenOrderEditDetails(true)}>
                        Edit Details
                    </MenuItem>
                </MenuContent>
            </MenuRoot>
            <IconButton variant="ghost" colorPalette="red" onClick={() => setOpenOrderDelete(true)}>
                <LuTrash2 />
            </IconButton>
        </HStack>
    );
};

export default MyOrderActions;

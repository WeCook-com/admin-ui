'use client';

import usePromotionsPage from '@/stores/usePromotionsPage';
import { HStack, IconButton } from '@chakra-ui/react';
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';

const PromotionActions = () => {
    const setOpenPromotionDelete = usePromotionsPage(state => state.setOpenPromotionDelete);
    const setOpenPromotionEdit = usePromotionsPage(state => state.setOpenPromotionEdit);
    const setOpenPromotionView = usePromotionsPage(state => state.setOpenPromotionView);

    return (
        <HStack gap="1" justifyContent="flex-end">
            <IconButton variant="ghost" onClick={() => setOpenPromotionView(true)}>
                <LuEye />
            </IconButton>
            <IconButton variant="ghost" onClick={() => setOpenPromotionEdit(true)}>
                <LuPencil />
            </IconButton>
            <IconButton
                variant="ghost"
                colorPalette="red"
                onClick={() => setOpenPromotionDelete(true)}
            >
                <LuTrash2 />
            </IconButton>
        </HStack>
    );
};

export default PromotionActions;

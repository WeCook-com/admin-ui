'use client';

import { DataListItem, DataListRoot } from '@/components/ui/data-list';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from '@/components/ui/dialog';
import usePromotionsPage from '@/stores/usePromotionsPage';
import { Badge, Box, Stack } from '@chakra-ui/react';

const PromotionViewModal = () => {
    const isOpenPromotionView = usePromotionsPage(state => state.isOpenPromotionView);
    const setOpenPromotionView = usePromotionsPage(state => state.setOpenPromotionView);

    return (
        <DialogRoot
            lazyMount
            open={isOpenPromotionView}
            onOpenChange={e => setOpenPromotionView(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Promotion Details</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="3">
                        <DataListRoot orientation="horizontal">
                            <DataListItem
                                label="Status"
                                value={
                                    <Badge variant="surface" size="md" colorPalette="green">
                                        Completed
                                    </Badge>
                                }
                            />
                            <DataListItem label="Promotion ID" value="2342341" />
                            <DataListItem label="Name" value="abc" />
                            <DataListItem label="Promotion Code" value="NGHITET2025" />
                            <DataListItem label="Date Created" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="From" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="To" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="Used" value="25" />
                            <DataListItem label="Effect" value="Price" />
                        </DataListRoot>
                    </Stack>
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default PromotionViewModal;

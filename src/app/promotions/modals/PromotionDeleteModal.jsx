'use client';

import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from '@/components/ui/dialog';
import usePromotionsPage from '@/stores/usePromotionsPage';
import { Button } from '@chakra-ui/react';

const PromotionDeleteModal = () => {
    const isOpenPromotionDelete = usePromotionsPage(state => state.isOpenPromotionDelete);
    const setOpenPromotionDelete = usePromotionsPage(state => state.setOpenPromotionDelete);

    return (
        <DialogRoot
            role="alertdialog"
            open={isOpenPromotionDelete}
            onOpenChange={e => setOpenPromotionDelete(e.open)}
            lazyMount
            unmountOnExit
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <p>
                        This action cannot be undone. It will permanently delete your{' '}
                        <strong>promotion</strong> and all related data.
                    </p>
                    <p>
                        To make it temporarily unavailable, consider disabling it in the edit page
                        instead.
                    </p>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button colorPalette="red">Delete</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default PromotionDeleteModal;

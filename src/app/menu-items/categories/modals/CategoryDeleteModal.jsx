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
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { Button } from '@chakra-ui/react';

const OrderDeleteModal = () => {
    const isOpenCategoryDelete = useMenuItemsPage(state => state.isOpenCategoryDelete);
    const setOpenCategoryDelete = useMenuItemsPage(state => state.setOpenCategoryDelete);

    return (
        <DialogRoot
            role="alertdialog"
            open={isOpenCategoryDelete}
            onOpenChange={e => setOpenCategoryDelete(e.open)}
            lazyMount
            unmountOnExit
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <p>
                        This action cannot be undone. Deleting this <strong>category</strong> will
                        permanently remove it, and any dishes assigned to this category will lose
                        their category association.
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

export default OrderDeleteModal;

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
    const isOpenDishDelete = useMenuItemsPage(state => state.isOpenDishDelete);
    const setOpenDishDelete = useMenuItemsPage(state => state.setOpenDishDelete);

    return (
        <DialogRoot
            role="alertdialog"
            open={isOpenDishDelete}
            onOpenChange={e => setOpenDishDelete(e.open)}
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
                        <strong>dish item</strong> and all related data.
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

export default OrderDeleteModal;

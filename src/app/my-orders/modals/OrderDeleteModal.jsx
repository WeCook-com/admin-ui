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
import useMyOrdersPage from '@/stores/useMyOrdersPage';
import { Button } from '@chakra-ui/react';

const OrderDeleteModal = () => {
    const isOpenOrderDelete = useMyOrdersPage(state => state.isOpenOrderDelete);
    const setOpenOrderDelete = useMyOrdersPage(state => state.setOpenOrderDelete);

    return (
        <DialogRoot
            role="alertdialog"
            open={isOpenOrderDelete}
            onOpenChange={e => setOpenOrderDelete(e.open)}
            lazyMount
            unmountOnExit
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <p>
                        This action cannot be undone. This will permanently delete your{' '}
                        <strong>stored order</strong> and also{' '}
                        <strong>the transactions related</strong> from our systems.
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

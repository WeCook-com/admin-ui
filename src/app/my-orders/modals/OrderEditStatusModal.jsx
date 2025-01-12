'use client';

import { Button } from '@/components/ui/button';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogBackdrop,
    DialogFooter,
    DialogActionTrigger,
} from '@/components/ui/dialog';
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import useMyOrdersPage from '@/stores/useMyOrdersPage';
import { createListCollection, Text } from '@chakra-ui/react';
import { useRef } from 'react';

const frameworks = createListCollection({
    items: [
        { label: 'Completed', value: 'completed' },
        { label: 'Pending', value: 'pending' },
        { label: 'Canceled', value: 'canceled' },
        { label: 'In Service', value: 'in-service' },
    ],
});

const OrderEditStatusModal = () => {
    const contentRef = useRef(null);
    const isOpenOrderEditStatus = useMyOrdersPage(state => state.isOpenOrderEditStatus);
    const setOpenOrderEditStatus = useMyOrdersPage(state => state.setOpenOrderEditStatus);

    return (
        <DialogRoot
            lazyMount
            open={isOpenOrderEditStatus}
            onOpenChange={e => setOpenOrderEditStatus(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
        >
            <DialogBackdrop />

            <DialogContent ref={contentRef}>
                <DialogHeader>
                    <DialogTitle>Edit Order DH12331 Status</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <SelectRoot defaultValue="completed" collection={frameworks} size="sm">
                        <SelectLabel>Select status</SelectLabel>
                        <SelectTrigger>
                            <SelectValueText placeholder="Completed" />
                        </SelectTrigger>
                        <SelectContent portalRef={contentRef}>
                            {frameworks.items.map(item => (
                                <SelectItem item={item} key={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
                    <Text mt="2">
                        This action will change the status of <strong>transactions related</strong>{' '}
                        to this order.
                    </Text>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button colorPalette="blue" variant="surface">
                        Save
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default OrderEditStatusModal;

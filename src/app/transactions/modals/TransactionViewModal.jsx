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
import useTransactionsPage from '@/stores/useTransactionsPage';
import { Badge, Stack } from '@chakra-ui/react';

const TransactionViewModal = () => {
    const isOpenTransactionView = useTransactionsPage(state => state.isOpenTransactionView);
    const setOpenTransactionView = useTransactionsPage(state => state.setOpenTransactionView);

    return (
        <DialogRoot
            lazyMount
            open={isOpenTransactionView}
            onOpenChange={e => setOpenTransactionView(e.open)}
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
                            <DataListItem label="Transaction ID" value="2342341" />
                            <DataListItem label="Date & Time" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="Payment Method" value="Online Payment" />
                            <DataListItem label="Payment Source" value="In Restaurant" />
                            <DataListItem label="Amount" value="25.000 d" />
                            <DataListItem label="Order ID" value="DH1232" />
                        </DataListRoot>
                    </Stack>
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default TransactionViewModal;

'use client';

import { Button } from '@/components/ui/button';
import { DataListItem, DataListRoot } from '@/components/ui/data-list';
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
import { Editable, IconButton, Stack } from '@chakra-ui/react';
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu';

const OrderEditModal = () => {
    const isOpenOrderEditDetails = useMyOrdersPage(state => state.isOpenOrderEditDetails);
    const setOpenOrderEditDetails = useMyOrdersPage(state => state.setOpenOrderEditDetails);

    return (
        <DialogRoot
            lazyMount
            open={isOpenOrderEditDetails}
            onOpenChange={e => setOpenOrderEditDetails(e.open)}
            unmountOnExit
            trapFocus={false}
            scrollBehavior="inside"
            size="lg"
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Order DH12331</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="3">
                        <DataListRoot orientation="horizontal">
                            <DataListItem label="Order ID" value="DH1231" />
                            <DataListItem label="Date" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="Customer Name" value={<EditableField />} />
                            <DataListItem label="Phone" value={<EditableField />} />
                            <DataListItem label="Email" value={<EditableField />} />
                            <DataListItem label="Type" value="In Restaurant" />
                            <DataListItem label="Payment Type" value="Online Payment" />
                            <DataListItem label="Amount" value="1.211.000 đ" />
                            <DataListItem label="Dishes:" value="3 dishes" />
                        </DataListRoot>
                    </Stack>
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

const EditableField = () => {
    return (
        <Editable.Root defaultValue="Click to edit">
            <Editable.Preview />
            <Editable.Input />
            <Editable.Control>
                <Editable.EditTrigger asChild>
                    <IconButton variant="ghost" size="xs">
                        <LuPencilLine />
                    </IconButton>
                </Editable.EditTrigger>
                <Editable.CancelTrigger asChild>
                    <IconButton variant="outline" size="xs">
                        <LuX />
                    </IconButton>
                </Editable.CancelTrigger>
                <Editable.SubmitTrigger asChild>
                    <IconButton variant="outline" size="xs">
                        <LuCheck />
                    </IconButton>
                </Editable.SubmitTrigger>
            </Editable.Control>
        </Editable.Root>
    );
};

export default OrderEditModal;

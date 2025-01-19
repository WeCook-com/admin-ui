'use client';

import { Button } from '@/components/ui/button';
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
import { Field } from '@/components/ui/field';
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import usePromotionsPage from '@/stores/usePromotionsPage';
import { createListCollection, Input, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import DatePicker from 'react-datepicker';
import { LuCalendar } from 'react-icons/lu';

const frameworks = createListCollection({
    items: [
        { label: 'React.js', value: 'react' },
        { label: 'Vue.js', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' },
    ],
});

const PromotionEditModal = () => {
    const contentRef = useRef();
    const isOpenPromotionEdit = usePromotionsPage(state => state.isOpenPromotionEdit);
    const setOpenPromotionEdit = usePromotionsPage(state => state.setOpenPromotionEdit);

    return (
        <DialogRoot
            lazyMount
            open={isOpenPromotionEdit}
            onOpenChange={e => setOpenPromotionEdit(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
        >
            <DialogContent ref={contentRef}>
                <DialogHeader>
                    <DialogTitle>Edit Promotion Details</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <VStack gap="5">
                        <Field
                            label="Promotion Name"
                            required
                            helperText="This name is only visible in the admin panel to help with easier identification."
                        >
                            <Input placeholder="Enter promotion name" />
                        </Field>
                        <Field
                            label="Promotion Code"
                            required
                            helperText="This code is shared with customers for them to use promotion."
                        >
                            <Input placeholder="Enter promotion code" />
                        </Field>
                        <Field label="Active Period" required className="promotion-add-modal">
                            <Text mr="2.5">From</Text>
                            <DatePicker showIcon selected={new Date()} icon={<LuCalendar />} />
                            <Text mx="2.5">To</Text>
                            <DatePicker showIcon selected={new Date()} icon={<LuCalendar />} />
                        </Field>
                        <Field label="Effect" required>
                            <SelectRoot multiple collection={frameworks} size="md" width="100%">
                                <SelectTrigger>
                                    <SelectValueText placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent portalRef={contentRef}>
                                    {frameworks.items.map(movie => (
                                        <SelectItem item={movie} key={movie.value}>
                                            {movie.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </SelectRoot>
                        </Field>
                    </VStack>
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

export default PromotionEditModal;

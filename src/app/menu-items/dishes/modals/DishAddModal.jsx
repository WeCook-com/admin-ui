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
import { FileUploadDropzone, FileUploadList, FileUploadRoot } from '@/components/ui/file-upload';
import { NumberInputField, NumberInputRoot } from '@/components/ui/number-input';
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { createListCollection, Input, Stack, Textarea } from '@chakra-ui/react';
import { useRef } from 'react';

const frameworks = createListCollection({
    items: [
        { label: 'React.js', value: 'react' },
        { label: 'Vue.js', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' },
    ],
});

const DishAddModal = () => {
    const contentRef = useRef(null);
    const isOpenDishAdd = useMenuItemsPage(state => state.isOpenDishAdd);
    const setOpenDishAdd = useMenuItemsPage(state => state.setOpenDishAdd);

    return (
        <DialogRoot
            lazyMount
            open={isOpenDishAdd}
            onOpenChange={e => setOpenDishAdd(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
        >
            <DialogContent ref={contentRef}>
                <DialogHeader>
                    <DialogTitle>Add New Dish</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="5">
                        <Field label="Dish Name" required>
                            <Input placeholder="Enter dish name" />
                        </Field>
                        <Field label="Description">
                            <Textarea placeholder="Enter dish description..." />
                        </Field>
                        <Field label="Price" required>
                            <NumberInputRoot
                                step={1000}
                                defaultValue="45000"
                                formatOptions={{
                                    style: 'currency',
                                    currency: 'VND',
                                    currencyDisplay: 'code',
                                    currencySign: 'accounting',
                                }}
                            >
                                <NumberInputField />
                            </NumberInputRoot>
                        </Field>
                        <Field label="Dish Image">
                            <FileUploadRoot
                                maxW="100%"
                                alignItems="stretch"
                                accept={['image/png', 'image/jpg', 'image/jpeg']}
                            >
                                <FileUploadDropzone
                                    label="Drag and drop here to upload"
                                    description=".png, .jpg, .jpeg up to 5MB"
                                />
                                <FileUploadList />
                            </FileUploadRoot>
                        </Field>
                        <Field
                            label="Select category"
                            helperText="A dish can belong to multiple categories."
                        >
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
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button colorPalette="blue" variant="surface">
                        Add
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default DishAddModal;

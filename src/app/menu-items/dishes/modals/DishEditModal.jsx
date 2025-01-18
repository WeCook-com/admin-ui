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
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from '@/components/ui/file-upload';
import { NumberInputField, NumberInputRoot } from '@/components/ui/number-input';
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import {
    Box,
    createListCollection,
    Input,
    Separator,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { HiUpload } from 'react-icons/hi';

const frameworks = createListCollection({
    items: [
        { label: 'React.js', value: 'react' },
        { label: 'Vue.js', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte' },
    ],
});

const DishEditModal = () => {
    const contentRef = useRef(null);
    const isOpenDishEdit = useMenuItemsPage(state => state.isOpenDishEdit);
    const setOpenDishEdit = useMenuItemsPage(state => state.setOpenDishEdit);

    return (
        <DialogRoot
            lazyMount
            open={isOpenDishEdit}
            onOpenChange={e => setOpenDishEdit(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
            trapFocus={false}
        >
            <DialogContent ref={contentRef}>
                <DialogHeader>
                    <DialogTitle>Edit Dish</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Switch>Disable this item</Switch>
                    <Text fontSize="14px" color="gray.600" _dark={{ color: 'gray.400' }} mt="1.5">
                        Temporarily make this item unavailable without deleting it.
                    </Text>
                    <Separator my="4" />
                    <Stack gap="4">
                        <Field label="Dish Name" required>
                            <Input placeholder="Enter dish name" name="dish-name" />
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
                            <Box
                                style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                                width="200px"
                                aspectRatio="25/18"
                                bgPos="center"
                                bgSize="contain"
                                borderRadius="6px"
                            ></Box>
                            <FileUploadRoot accept={['image/png', 'image/jpg', 'image/jpeg']}>
                                <FileUploadTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <HiUpload /> Upload new image
                                    </Button>
                                </FileUploadTrigger>
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
                    <Button variant="surface" colorPalette="blue">
                        Save
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default DishEditModal;

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
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { Input } from '@chakra-ui/react';

const CategoryAddModal = () => {
    const isOpenCategoryAdd = useMenuItemsPage(state => state.isOpenCategoryAdd);
    const setOpenCategoryAdd = useMenuItemsPage(state => state.setOpenCategoryAdd);

    return (
        <DialogRoot
            lazyMount
            open={isOpenCategoryAdd}
            onOpenChange={e => setOpenCategoryAdd(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new Category</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Field
                        label="Category Name"
                        required
                        helperText="After adding new category, you can assign dishes to this category."
                    >
                        <Input placeholder="Enter category name" />
                    </Field>
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

export default CategoryAddModal;

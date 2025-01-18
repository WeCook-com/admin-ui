'use client';

import { Button } from '@/components/ui/button';
import { DataListItem, DataListRoot } from '@/components/ui/data-list';
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from '@/components/ui/dialog';
import useMenuItemsPage from '@/stores/useMenuItemsPage';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { LuPencil, LuTrash2 } from 'react-icons/lu';

const DishViewModal = () => {
    const contentRef = useRef(null);
    const isOpenDishView = useMenuItemsPage(state => state.isOpenDishView);
    const setOpenDishView = useMenuItemsPage(state => state.setOpenDishView);
    const setOpenDishDelete = useMenuItemsPage(state => state.setOpenDishDelete);
    const setOpenDishEdit = useMenuItemsPage(state => state.setOpenDishEdit);

    return (
        <DialogRoot
            lazyMount
            open={isOpenDishView}
            onOpenChange={e => setOpenDishView(e.open)}
            unmountOnExit
            scrollBehavior="inside"
            size="lg"
            trapFocus={false}
        >
            <DialogContent ref={contentRef}>
                <DialogHeader>
                    <DialogTitle>View Dish Details</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Flex>
                        <Box
                            width="200px"
                            aspectRatio="25/18"
                            overflow="hidden"
                            onClick={() => setOpenDishView(true)}
                            borderRadius="6px"
                            mr="3"
                        >
                            <Box
                                style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                                width="100%"
                                height="100%"
                                bgPos="center"
                                bgSize="contain"
                            ></Box>
                        </Box>
                        <Box flex="1">
                            <Text fontSize="22px" fontWeight="500" mb="2.5">
                                Hamburger Salad
                            </Text>
                            <Text fontSize="22px" fontWeight="700" mb="4">
                                200.000 đ
                            </Text>
                            <Text fontSize="14px">
                                Hương vị cafe nguyên chất quyện với vị ngọt béo của sữa đặc, thơm
                                ngon và ấm nóng, đặc biệt phù hợp cho 1 ngày mùa đông se lạnh
                            </Text>
                        </Box>
                    </Flex>
                    <Stack gap="3" mt="6">
                        <DataListRoot orientation="horizontal">
                            <DataListItem label="Dish ID" value="DH1231" />
                            <DataListItem label="Date created" value="25/02/2024 - 10:30 AM" />
                            <DataListItem label="Total Sold" value="1.234" />
                            <DataListItem label="Sold in this month" value="12" />
                        </DataListRoot>
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="surface"
                        colorPalette="blue"
                        onClick={() => {
                            setOpenDishView(false);
                            setOpenDishEdit(true);
                        }}
                    >
                        <LuPencil /> Edit
                    </Button>
                    <Button
                        variant="solid"
                        colorPalette="red"
                        onClick={() => {
                            setOpenDishView(false);
                            setOpenDishDelete(true);
                        }}
                    >
                        <LuTrash2 /> Delete
                    </Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default DishViewModal;

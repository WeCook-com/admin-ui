'use client';

import { InputGroup } from '@/components/ui/input-group';
import {
    SelectContent,
    SelectItem,
    SelectItemGroup,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import { createListCollection, Button, Flex, Input } from '@chakra-ui/react';
import { LuPlus, LuSearch } from 'react-icons/lu';

const filterOptions = createListCollection({
    items: [
        { label: 'All', value: 'all' },
        { label: 'Pending', value: 'pending', group: 'By Status' },
        { label: 'Completed', value: 'completed', group: 'By Status' },
        { label: 'Canceled', value: 'canceled', group: 'By Status' },
        { label: 'In Restaurant', value: 'in-restaurant', group: 'By Type' },
        { label: 'Order Online', value: 'order-online', group: 'By Type' },
        { label: 'Takeaway', value: 'takeaway', group: 'By Type' },
        { label: 'Online', value: 'online', group: 'By Payment Type' },
        { label: 'Cash', value: 'cash', group: 'By Payment Type' },
    ],
});

const categories = filterOptions.items.reduce((acc, item) => {
    const group = acc.find(group => group.group === item.group);
    if (group) {
        group.items.push(item);
    } else {
        acc.push({ group: item.group, items: [item] });
    }
    return acc;
}, []);

const Actions = () => {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <InputGroup
                    width="25%"
                    minWidth="350px"
                    startElement={<LuSearch size={18} />}
                    bg="white"
                >
                    <Input
                        style={{ paddingLeft: '38px !important' }}
                        placeholder="Search..."
                        size="md"
                    />
                </InputGroup>
                <Button variant="subtle" colorPalette="blue">
                    <LuPlus /> Add New
                </Button>
            </Flex>
            <SelectRoot
                collection={filterOptions}
                size="sm"
                width="180px"
                defaultValue="all"
                mt="2"
            >
                <SelectTrigger>
                    <SelectValueText placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map((category, i) => (
                        <SelectItemGroup key={i} label={category.group}>
                            {category.items.map(item => (
                                <SelectItem item={item} key={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectItemGroup>
                    ))}
                </SelectContent>
            </SelectRoot>
        </>
    );
};

export default Actions;

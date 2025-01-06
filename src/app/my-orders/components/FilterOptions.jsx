'use client';

import { Box, Button, createListCollection, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { LuCalendar } from 'react-icons/lu';

import {
    SelectContent,
    SelectItem,
    SelectItemGroup,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import DatePicker from 'react-datepicker';

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

const sortOptions = createListCollection({
    items: [
        { label: 'Newest', value: 'newest' },
        { label: 'Oldest', value: 'oldest' },
        { label: 'Highest Price', value: 'highest-price' },
        { label: 'Lowest Price', value: 'lowest-price' },
    ],
});

const FilterOptions = () => {
    return (
        <Flex
            alignItems="center"
            border="1px solid"
            borderColor="gray.200"
            py="3"
            px="3"
            bg="white"
            rounded="6px"
            mt="2"
        >
            <SelectRoot collection={filterOptions} size="sm" width="180px" defaultValue="all">
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
            <Flex pl="3.5" ml="3.5" alignItems="center" position="relative">
                <Box
                    position="absolute"
                    left="0"
                    top="50%"
                    transform="translateY(-50%)"
                    h="24px"
                    w="1px"
                    bg="gray.200"
                />
                <Text mr="2.5">Sort by</Text>
                <SelectRoot
                    collection={sortOptions}
                    size="sm"
                    defaultValue="newest"
                    width="fit-content"
                    minWidth="150px"
                >
                    <SelectTrigger>
                        <SelectValueText placeholder="Newest" />
                    </SelectTrigger>
                    <SelectContent>
                        {sortOptions.items.map(movie => (
                            <SelectItem item={movie} key={movie.value}>
                                {movie.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>
            </Flex>
            <Flex pl="3.5" ml="3.5" position="relative" alignItems="center">
                <Box
                    position="absolute"
                    left="0"
                    top="50%"
                    transform="translateY(-50%)"
                    h="24px"
                    w="1px"
                    bg="gray.200"
                />
                <Text mr="2.5">From</Text>
                <DatePicker showIcon selected={new Date()} icon={<LuCalendar />} />
                <Text mx="2.5">To</Text>
                <DatePicker showIcon selected={new Date()} icon={<LuCalendar />} />
            </Flex>
            <Button colorPalette="blue" variant="surface" size="sm" height="34px" ml="3">
                Get Data
            </Button>
        </Flex>
    );
};

export default FilterOptions;

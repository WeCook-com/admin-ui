'use client';

import { InputGroup } from '@/components/ui/input-group';
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import { Box, Button, createListCollection, Flex, HStack, Input } from '@chakra-ui/react';
import { LuPlus, LuSearch } from 'react-icons/lu';

const dataRange = createListCollection({
    items: [
        { label: 'Today', value: 'today' },
        { label: 'Last 7 Days', value: 'last-7-days' },
        { label: 'Custom Range', value: 'custom-range' },
    ],
});

const FilterOptions = () => {
    return (
        <Box mb="5">
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
            </Flex>
            <HStack gap="2">
                <SelectRoot
                    collection={dataRange}
                    size="sm"
                    width="180px"
                    defaultValue="today"
                    mt="2"
                >
                    <SelectTrigger>
                        <SelectValueText placeholder="Data Range: Today" />
                    </SelectTrigger>
                    <SelectContent>
                        {dataRange.items.map(movie => (
                            <SelectItem item={movie} key={movie.value}>
                                {movie.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>
                <SelectRoot
                    collection={dataRange}
                    size="sm"
                    width="180px"
                    defaultValue="today"
                    mt="2"
                >
                    <SelectTrigger>
                        <SelectValueText placeholder="Data Range: Today" />
                    </SelectTrigger>
                    <SelectContent>
                        {dataRange.items.map(movie => (
                            <SelectItem item={movie} key={movie.value}>
                                {movie.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>
                <SelectRoot
                    collection={dataRange}
                    size="sm"
                    width="180px"
                    defaultValue="today"
                    mt="2"
                >
                    <SelectTrigger>
                        <SelectValueText placeholder="Data Range: Today" />
                    </SelectTrigger>
                    <SelectContent>
                        {dataRange.items.map(movie => (
                            <SelectItem item={movie} key={movie.value}>
                                {movie.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>
                <SelectRoot
                    collection={dataRange}
                    size="sm"
                    width="180px"
                    defaultValue="today"
                    mt="2"
                >
                    <SelectTrigger>
                        <SelectValueText placeholder="Data Range: Today" />
                    </SelectTrigger>
                    <SelectContent>
                        {dataRange.items.map(movie => (
                            <SelectItem item={movie} key={movie.value}>
                                {movie.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>
            </HStack>
        </Box>
    );
};

export default FilterOptions;

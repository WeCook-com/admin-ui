'use client';

import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';

import { Box, createListCollection, Flex, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const frameworks = createListCollection({
    items: [
        { label: 'Last 5 Days', value: 'last-5-days' },
        { label: 'Last Month', value: 'last-month' },
        { label: 'Last 6 Months', value: 'last-6-months' },
        { label: 'Last Year', value: 'last-year' },
    ],
});

const ChartData = dynamic(() => import('./ChartData'), { ssr: false });

const ChartBox = ({ title, chartType }) => {
    return (
        <Box
            px="5"
            py="5"
            bg="white"
            borderRadius="12px"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        >
            <Flex alignItems="center" justifyContent="space-between">
                <Text textStyle="2xl" fontWeight="bold">
                    {title}
                </Text>
                <SelectRoot
                    collection={frameworks}
                    size="sm"
                    defaultValue="last-5-days"
                    width="fit-content"
                    minWidth="150px"
                >
                    <SelectTrigger>
                        <SelectValueText placeholder="Last 5 Days" />
                    </SelectTrigger>
                    <SelectContent>
                        {frameworks.items.map(movie => (
                            <SelectItem item={movie} key={movie.value}>
                                {movie.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectRoot>
            </Flex>
            <Box mt="6">
                <ChartData chartType={chartType} />
            </Box>
        </Box>
    );
};

export default ChartBox;

'use client';

import { formatDate } from '@/utils';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { LuRefreshCw } from 'react-icons/lu';
import { mutate } from 'swr';

const RefreshBtn = () => {
    const [date, setDate] = useState(formatDate(new Date()));

    const onRefreshClick = () => {
        mutate(key => key.startsWith('/dashboard/'));
        setDate(formatDate(new Date()));
    };

    return (
        <Flex alignItems="center">
            <Text textStyle="sm" mr="2">
                Activities during the day ({date})
            </Text>
            <IconButton
                size="xs"
                width="30px"
                height="30px"
                variant="surface"
                bg="white"
                _hover={{ bg: 'gray.100' }}
                onClick={onRefreshClick}
            >
                <LuRefreshCw />
            </IconButton>
        </Flex>
    );
};

export default RefreshBtn;

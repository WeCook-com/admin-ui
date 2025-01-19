'use client';

import { HStack, IconButton } from '@chakra-ui/react';
import { LuEye } from 'react-icons/lu';
import useTransactionsPage from '@/stores/useTransactionsPage';

const TransactionActions = () => {
    const setOpenTransactionView = useTransactionsPage(state => state.setOpenTransactionView);

    return (
        <HStack gap="1" justifyContent="flex-end">
            <IconButton variant="ghost" onClick={() => setOpenTransactionView(true)}>
                <LuEye />
            </IconButton>
        </HStack>
    );
};

export default TransactionActions;

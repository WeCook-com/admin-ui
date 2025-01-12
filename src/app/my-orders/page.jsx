import { InputGroup } from '@/components/ui/input-group';
import { Box, Flex, IconButton, Input, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { LuRefreshCw, LuSearch } from 'react-icons/lu';
import FilterOptions from './components/FilterOptions';
import Pagination from './components/Pagination';
import TableData from './components/TableData';

const OrderViewModal = dynamic(() => import('./modals/OrderViewModal'));

const MyOrdersPage = () => {
    return (
        <Box>
            <Flex alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="26px">
                    My Orders
                </Text>
                <Flex alignItems="center">
                    <IconButton
                        size="xs"
                        width="30px"
                        height="30px"
                        variant="surface"
                        bg="white"
                        _hover={{ bg: 'gray.100' }}
                    >
                        <LuRefreshCw />
                    </IconButton>
                </Flex>
            </Flex>
            <InputGroup
                mt="3"
                width="25%"
                minWidth="350px"
                startElement={<LuSearch size={18} />}
                bg="white"
            >
                <Input
                    style={{ paddingLeft: '38px !important' }}
                    placeholder="Search order by Order ID or Phone Number..."
                    size="md"
                />
            </InputGroup>
            <FilterOptions />
            <TableData />
            <Pagination />
            <OrderViewModal />
        </Box>
    );
};

export default MyOrdersPage;

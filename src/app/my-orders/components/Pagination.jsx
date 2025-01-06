import {
    PaginationNextTrigger,
    PaginationPageText,
    PaginationPrevTrigger,
    PaginationRoot,
} from '@/components/ui/pagination';
import { Flex, HStack } from '@chakra-ui/react';

const Pagination = () => {
    return (
        <Flex alignItems="center" justifyContent="flex-end" mt="4">
            <PaginationRoot count={20} pageSize={2} defaultPage={1}>
                <HStack gap="4">
                    <PaginationPageText format="long" />
                    <PaginationPrevTrigger />
                    <PaginationPageText />
                    <PaginationNextTrigger />
                </HStack>
            </PaginationRoot>
        </Flex>
    );
};

export default Pagination;

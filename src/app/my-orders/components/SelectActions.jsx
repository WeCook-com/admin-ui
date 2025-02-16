import { InputGroup } from '@/components/ui/input-group';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { LuRefreshCw, LuSearch } from 'react-icons/lu';

const SelectActions = () => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
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
    );
};

export default SelectActions;

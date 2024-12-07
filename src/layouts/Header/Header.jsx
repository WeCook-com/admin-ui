import { InputGroup } from '@/components/ui/input-group';
import { Box, Flex, Icon, IconButton, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { LuBell, LuChevronDown, LuMoon, LuSearch } from 'react-icons/lu';
import { RiFullscreenExitLine } from 'react-icons/ri';

const Header = () => {
    return (
        <Box
            position="fixed"
            top="0"
            right="0"
            left="0"
            bg="white"
            boxShadow="0 1px 3px rgba(27, 23, 30, 0.1)"
            h="64px"
            zIndex="20"
            marginLeft="288px"
        >
            <Flex
                width="100%"
                height="100%"
                px="7"
                py="3"
                alignItems="center"
                justifyContent="space-between"
            >
                <InputGroup width="25%" minWidth="350px" startElement={<LuSearch size={18} />}>
                    <Input
                        style={{ paddingLeft: '38px !important' }}
                        pl="38px"
                        placeholder="Search..."
                        size="md"
                    />
                </InputGroup>
                <Flex alignItems="center" gap="14px" cursor="pointer">
                    <Flex
                        h="40px"
                        p="4px"
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        borderRadius="6px"
                        alignItems="center"
                    >
                        <Image
                            src="/blank_user.jpeg"
                            alt="Blank User Img"
                            width={32}
                            height={32}
                            style={{ borderRadius: '4px' }}
                        />
                        <Text mx="2">Admin Mixue</Text>
                        <Icon mr="1">
                            <LuChevronDown />
                        </Icon>
                    </Flex>
                    <IconButton size="md" w="40px" h="40px" borderRadius="6px" variant="subtle">
                        <LuBell />
                    </IconButton>
                    <IconButton size="md" w="40px" h="40px" borderRadius="6px">
                        <LuMoon />
                    </IconButton>
                    <Box
                        bg="transparent"
                        color="#000"
                        w="40px"
                        h="40px"
                        borderRadius="6px"
                        _hover={{ bg: 'gray.100' }}
                        fontSize="24px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all .2s ease"
                        cursor="pointer"
                    >
                        <RiFullscreenExitLine size={23} />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;

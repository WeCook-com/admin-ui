import { Box, Flex, Text, Icon } from '@chakra-ui/react';

const SidebarTab = ({ Icon: IconProp, iconFontSize = '24px', isActive = false, title }) => {
    return (
        <Flex
            width="100%"
            paddingLeft="4"
            paddingY="10px"
            marginBottom="6px"
            borderRightRadius="12px"
            alignItems="center"
            cursor="pointer"
            {...(isActive
                ? { bg: 'blue.100', borderLeft: '3px solid #3b82f6' }
                : {
                      _hover: { backgroundColor: 'blue.50', color: 'blue.500' },
                      transition: 'all .15s ease',
                  })}
        >
            <Box w="6" h="6" position="relative" marginRight="4">
                <Icon
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%,-50%)"
                    fontSize={iconFontSize}
                >
                    <IconProp />
                </Icon>
            </Box>
            <Text textTransform="capitalize">{title}</Text>
        </Flex>
    );
};

export default SidebarTab;

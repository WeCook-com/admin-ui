import { Box, Flex, Text, Icon } from '@chakra-ui/react';

const SidebarTab = ({
    Icon: IconProp,
    iconFontSize = '24px',
    isActive = false,
    title,
    color = 'blue',
}) => {
    return (
        <Flex
            width="100%"
            paddingLeft="4"
            paddingY="10px"
            marginBottom="6px"
            borderRightRadius="12px"
            alignItems="center"
            cursor="pointer"
            borderLeftWidth="3px"
            borderStyle="solid"
            borderColor="transparent"
            {...(isActive
                ? { bg: 'blue.100', borderColor: `${color}.500` }
                : {
                      _hover: { backgroundColor: `${color}.50`, color: `${color}.500` },
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

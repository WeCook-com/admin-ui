'use client';

import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SidebarTab = ({ Icon: IconProp, iconFontSize = '24px', title, color = 'blue', href }) => {
    const Wrapper = href ? Link : React.Fragment;
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Wrapper {...(href ? { href } : {})}>
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
                        color={isActive ? `${color}.500` : 'inherit'}
                    >
                        <IconProp.type {...IconProp.props} />
                    </Icon>
                </Box>
                <Text textTransform="capitalize">{title}</Text>
            </Flex>
        </Wrapper>
    );
};

export default SidebarTab;

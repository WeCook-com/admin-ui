import { Box, Text } from '@chakra-ui/react';
import NavigationTabs from './components/NavigationTabs';

const MenuItemsLayout = ({ children }) => {
    return (
        <Box>
            <Text fontWeight="bold" fontSize="26px">
                Menu Items
            </Text>
            <Box
                bg="white"
                border="1px solid transparent"
                borderColor="gray.200"
                borderRadius="6px"
                mt="3"
            >
                <Box borderBottom="1px solid transparent" borderColor="gray.200">
                    <NavigationTabs />
                </Box>
                {children}
            </Box>
        </Box>
    );
};

export default MenuItemsLayout;

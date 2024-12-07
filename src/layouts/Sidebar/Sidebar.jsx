import { Box } from '@chakra-ui/react';
import { BiDish } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { LuCircleDollarSign, LuSettings, LuUsersRound, LuLogOut } from 'react-icons/lu';
import { PiPackage } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import SidebarTab from './SidebarTab';

const Sidebar = () => {
    return (
        <Box
            width="288px"
            borderRight="1px solid #f2f2f2"
            position="fixed"
            top="0"
            left="0"
            bottom="0"
            bg={{ base: 'white' }}
            padding="36px 18px"
            display="flex"
            flexDir="column"
        >
            <Box textAlign="center" fontSize="3xl" fontWeight="700">
                WECOOK.COM
            </Box>
            <Box marginTop="7" paddingX="2">
                <SidebarTab Icon={RxDashboard} title="Dashboard" isActive />
                <SidebarTab Icon={PiPackage} title="My Orders" />
                <SidebarTab Icon={BiDish} title="Menu Items" />
                <SidebarTab Icon={LuUsersRound} title="My Staff" />
                <SidebarTab Icon={LuCircleDollarSign} title="Transactions" />
                <SidebarTab Icon={FiFileText} title="Reports" />
                <SidebarTab Icon={LuSettings} title="Settings" />
            </Box>
            <Box mt="auto">
                <SidebarTab Icon={LuLogOut} title="Log out" color="red" />
            </Box>
        </Box>
    );
};

export default Sidebar;

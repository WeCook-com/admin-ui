import routes from '@/config/routes';
import { Box } from '@chakra-ui/react';
import { BiDish } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { LuCircleDollarSign, LuLogOut, LuSettings, LuUsersRound, LuGift } from 'react-icons/lu';
import { PiPackage } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import SidebarTab from './SidebarTab';

const Sidebar = () => {
    return (
        <Box
            width="250px"
            boxShadow="0 1px 3px rgba(27, 23, 30, 0.1)"
            position="fixed"
            top="0"
            left="0"
            bottom="0"
            bg={{ base: 'white' }}
            padding="36px 14px"
            display="flex"
            flexDir="column"
            zIndex="30"
        >
            <Box
                style={{ backgroundImage: 'url(/logo.png)' }}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                width={208}
                height={50}
            ></Box>
            <Box marginTop="7" paddingX="1">
                <SidebarTab href={routes.dashboard} Icon={<RxDashboard />} title="Dashboard" />
                <SidebarTab href={routes.myOrders} Icon={<PiPackage />} title="My Orders" />
                <SidebarTab href={routes.menuItems} Icon={<BiDish />} title="Menu Items" />
                <SidebarTab href={routes.promotions} Icon={<LuGift />} title="Promotions" />
                <SidebarTab href={routes.myStaff} Icon={<LuUsersRound />} title="My Staff" />
                <SidebarTab
                    href={routes.transactions}
                    Icon={<LuCircleDollarSign />}
                    title="Transactions"
                />
                <SidebarTab href={routes.reports} Icon={<FiFileText />} title="Reports" />
                <SidebarTab href={routes.settings} Icon={<LuSettings />} title="Settings" />
            </Box>
            <Box mt="auto">
                <SidebarTab Icon={<LuLogOut />} title="Log out" color="red" />
            </Box>
        </Box>
    );
};

export default Sidebar;

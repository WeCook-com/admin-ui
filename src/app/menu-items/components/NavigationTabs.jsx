import routes from '@/config/routes';
import { Tabs } from '@chakra-ui/react';
import Link from 'next/link';
import { BiDish } from 'react-icons/bi';
import { LuLayoutGrid, LuList } from 'react-icons/lu';

const NavigationTabs = () => {
    return (
        <Tabs.Root defaultValue="dashboard" variant="enclosed">
            <Tabs.List>
                <Tabs.Trigger value="dashboard" asChild>
                    <Link unstyled="true" href={routes.menuItems}>
                        <LuLayoutGrid />
                        Dashboard
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="categories" asChild>
                    <Link unstyled="true" href={routes.menuCategories}>
                        <LuList />
                        Categories
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="dishes" asChild>
                    <Link unstyled="true" href={routes.menuDishes}>
                        <BiDish />
                        Dishes
                    </Link>
                </Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
};

export default NavigationTabs;

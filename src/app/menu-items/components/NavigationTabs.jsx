'use client';

import routes from '@/config/routes';
import { Tabs } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiDish } from 'react-icons/bi';
import { LuLayoutGrid, LuList } from 'react-icons/lu';

const NavigationTabs = () => {
    const pathname = usePathname();

    return (
        <Tabs.Root defaultValue={pathname} variant="enclosed">
            <Tabs.List>
                <Tabs.Trigger value={routes.menuItems} asChild>
                    <Link unstyled="true" href={routes.menuItems}>
                        <LuLayoutGrid />
                        Dashboard
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value={routes.menuCategories} asChild>
                    <Link unstyled="true" href={routes.menuCategories}>
                        <LuList />
                        Categories
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value={routes.menuDishes} asChild>
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

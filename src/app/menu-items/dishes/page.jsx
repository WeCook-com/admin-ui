import { InputGroup } from '@/components/ui/input-group';
import { Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { LuSearch } from 'react-icons/lu';
import AddDishBtn from './components/AddDishBtn';
import CategoriesList from './components/CategoriesList';
import DishItem from './components/DishItem';

const DishAddModal = dynamic(() => import('./modals/DishAddModal'));
const DishViewModal = dynamic(() => import('./modals/DishViewModal'));
const DishEditModal = dynamic(() => import('./modals/DishEditModal'));
const DishDeleteModal = dynamic(() => import('./modals/DishDeleteModal'));

const DishesPage = () => {
    return (
        <>
            <Text fontSize="22px" fontWeight="600">
                Dishes
            </Text>
            <Flex justifyContent="space-between" mb="5">
                <InputGroup
                    mt="3"
                    width="25%"
                    minWidth="350px"
                    startElement={<LuSearch size={18} />}
                    bg="white"
                >
                    <Input
                        style={{ paddingLeft: '38px !important' }}
                        placeholder="Search dish..."
                        size="md"
                    />
                </InputGroup>
                <AddDishBtn />
            </Flex>
            <CategoriesList />
            <Grid templateColumns="repeat(4, 1fr)" gap="6" mt="6">
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
                <GridItem>
                    <DishItem />
                </GridItem>
            </Grid>

            <DishAddModal />
            <DishViewModal />
            <DishEditModal />
            <DishDeleteModal />
        </>
    );
};

export default DishesPage;

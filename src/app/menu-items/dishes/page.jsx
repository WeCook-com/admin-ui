import { Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import CategoriesList from './components/CategoriesList';
import DishItem from './components/DishItem';
import { LuPlus } from 'react-icons/lu';

const DishesPage = () => {
    return (
        <>
            <Flex justifyContent="space-between" mb="5">
                <Text fontSize="22px" fontWeight="600">
                    Menu Items
                </Text>
                <Button variant="subtle" colorPalette="blue">
                    <LuPlus /> Add new Item
                </Button>
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
        </>
    );
};

export default DishesPage;

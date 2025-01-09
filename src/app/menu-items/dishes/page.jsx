import { Button, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import CategoriesList from './components/CategoriesList';
import DishItem from './components/DishItem';
import { LuPlus, LuSearch } from 'react-icons/lu';
import { InputGroup } from '@/components/ui/input-group';

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

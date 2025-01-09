'use client';

import { Flex, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const categories = [
    'Món Ăn Vặt',
    'Topping',
    'Đồ uống',
    'Nước ép trái cây',
    'Kem',
    'Bánh Ngọt',
    'Trà Sữa',
    'Sữa chua',
    'Happy Meal',
];

const CategoriesList = () => {
    const scrollRef = useRef(null);
    const categoryRefs = useRef([]); // Array of refs for each category button
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Initialize with the default active category
    let isDragging = false;
    let startX, scrollLeft;

    const handleMouseDown = e => {
        isDragging = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseMove = e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
    };

    const handleCategoryClick = (category, index) => {
        setSelectedCategory(category);

        // Scroll the clicked category into view
        categoryRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center', // Center the clicked item horizontally
        });
    };

    return (
        <Flex
            alignItems="center"
            flex={1}
            overflowX="scroll"
            className="no-scrollbar"
            gap="2"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseUp={handleMouseUpOrLeave}
        >
            {categories.map((category, i) => (
                <Button
                    key={i}
                    ref={el => (categoryRefs.current[i] = el)} // Assign each button to the refs array
                    onClick={() => handleCategoryClick(category, i)}
                    colorPalette={category === selectedCategory ? 'blue' : 'gray'}
                    variant="subtle"
                >
                    {category}
                </Button>
            ))}
        </Flex>
    );
};

export default CategoriesList;

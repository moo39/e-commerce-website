import React from 'react';
import Slider from '../../Components/Home/Slider';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import Discount from '../../Components/Home/Discount';
import BrandFeatured from '../../Components/Brand/BrandFeatured';

const HomePage = () => {
    return (
        <div className='font' >
            <Slider />
            <HomeCategory />
            <CardProductContainer title="الاكثر مبيعا " btntitle="المزيد" pathText="/products"/>
            <Discount />
            <CardProductContainer title=" احدث الازياء " btntitle="المزيد"  pathText="/products"/>
            <BrandFeatured title=" اشهر الماركات " btntitle="المزيد"/>
        </div>
    );
};

export default HomePage;
import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import ProductDetailes from '../../Components/Products/ProductDetailes';
import RateContainer from '../../Components/Rate/RateContainer';
import CardProductContainer from '../../Components/Products/CardProductContainer';

const ProductDetailesPage = () => {
    return (
        <div>
            <CategoryHeader />
            <Container>
                <ProductDetailes />
                <RateContainer />
                <CardProductContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    );
};

export default ProductDetailesPage;
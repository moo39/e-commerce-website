import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductGallry from './ProductGallry';
import ProductContentText from './ProductContentText';

const ProductDetailes = () => {
    return (
        <div>
            <Row className='py-3'>
                <Col lg="4" >
                    <ProductGallry />
                </Col>
                <Col lg="8" >
                    <ProductContentText />
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetailes;
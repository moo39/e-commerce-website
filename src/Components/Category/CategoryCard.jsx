import React from 'react';
import { Col } from 'react-bootstrap';

const CategoryCard = ({ background, img, title }) => {
    return (
        <Col xs="6" sm="6" md="4" lg="2" className='my-4 d-flex justify-content-around'>
            <div className='allCard mb-3'>
                <div className='category-card' style={{ backgroundColor: `${background}` }}></div>{""}
                <img alt='zcv' src={img} className='category-card-img' />
                <p className='category-card-text my-2'>{title}</p>
            </div>
        </Col>
    );
};

export default CategoryCard;
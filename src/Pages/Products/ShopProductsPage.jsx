import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import SearchCountResult from '../../Components/Utility/SearchCountResult';
import { Col, Container, Row } from 'react-bootstrap';
import SideFilter from '../../Components/Utility/SideFilter';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import Pagination from '../../Components/Utility/Pagination';

const ShopProductsPage = () => {
    return (
        <Container>
        <CategoryHeader />
            <SearchCountResult title="400 نتجية بحث" />
            <Row className='d-flex flex-row'>
                <Col sm="3" xs="3" md="2" className='d-flex'>
                    <SideFilter />
                </Col>
                <Col sm="9" xs="9" md="10">
                    <CardProductContainer title="" btntitle=""/>
                </Col>
            </Row>
                <Pagination />
        </Container>
    );
};

export default ShopProductsPage;
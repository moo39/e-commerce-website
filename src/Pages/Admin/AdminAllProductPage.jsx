import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllProducts from '../../Components/Admin/AdminAllProducts';
import Pagination from '../../Components/Utility/Pagination';

const AdminAllProductPage = () => {
    return (
        <Container style={{paddingRight:'0'}}>
            <Row className='py-3'>
            <Col sm="3" xs="2" md="2" >
                <AdminSideBar />
            </Col>
            <Col sm="9" xs="10" md="10">
                <AdminAllProducts />
                <Pagination />
            </Col>
            </Row>
        </Container>
    );
};

export default AdminAllProductPage;
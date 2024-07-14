import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllOreders from '../../Components/Admin/AdminAllOreders';
import Pagination from '../../Components/Utility/Pagination';
const AdminAllOrdersPage = () => {
    return (
        <Container style={{paddingRight:'0'}}>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllOreders />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    );
};
export default AdminAllOrdersPage;
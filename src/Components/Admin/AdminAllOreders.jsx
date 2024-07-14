import React from 'react';
import { Container, Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem';

const AdminAllOreders = () => {
    return (
        <Container>
        <div className='admin-content-text'>إدارة جميع الطلبات</div>
        <Row className='justify-content-between'>
            <AdminAllOrdersItem />
            <AdminAllOrdersItem />
            <AdminAllOrdersItem />
        </Row>
    </Container>
    );
};

export default AdminAllOreders;
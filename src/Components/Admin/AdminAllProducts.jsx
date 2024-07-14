import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Container, Row } from 'react-bootstrap'

const AdminAllProducts = () => {
    return (
        <Container >
            <div className='admin-content-text'>إدارة جميع المنتجات</div>
            <Row className='justify-content-center'>
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
                <AdminAllProductsCard />
            </Row>
        </Container>
    )
}

export default AdminAllProducts
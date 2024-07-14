import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserSideBar from '../../Components/User/UserSideBar';
import UserAddNewAddress from '../../Components/User/UserAddNewAddress';

const UserAddNewAddressPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="3" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="9" md="10">
                <UserAddNewAddress />
                </Col>
            </Row>
        </Container>
    );
};

export default UserAddNewAddressPage;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import laptops from '../../Images/laptops.png';

const Discount = () => {
    return (
        <Container>
            <Row className='discount-backcolor my-3 mx-2 d-flex text-center align-items-center'>
                <Col sm="6">
                    <div className='discount-title'>
                        خصم يصل حتي 30% علي اجهزه اللاب توب
                    </div>
                </Col>
                <Col sm="6">
                    <img className='dicount-img' src={laptops} alt='...'/>
                </Col>
            </Row>
        </Container>
    );
};

export default Discount;
import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/instagram.png';
import twitter from '../../Images/twitter.png';
import phone from '../../Images/phone.png';


const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
            <Container className="">
                <Row className=" d-flex justify-content-between align-items-center">
                    <Col sm="6" className="respons d-flex align-items-center ">
                        <div className="footer-shroot ">الشروط والاحكام</div>
                        <div className="footer-shroot mx-2">سياسة الخصوصية</div>
                        <div className="footer-shroot mx-2">اتصل بنا</div>
                    </Col>
                    <Col sm="6" className="social">
                        <div className=" d-flex pt-3 mx-2">
                        <p className="footer-phone">0123456789</p>
                            <img width="20px" height="20px" src={phone} alt="..." />
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={facebook} alt="..." />
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={instagram} alt="..." />
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={twitter} alt="..." />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
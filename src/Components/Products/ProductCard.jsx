import React from 'react';
import {Card , Col} from 'react-bootstrap';
import prod1 from '../../Images/item.png';
import favoff from '../../Images/fav-off.png';
import rate from '../../Images/rate.png';
import { Link } from 'react-router-dom';

const ProductCard = () => {

    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

        <Card
            className="my-2"
            style={{
                width: "100%",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
            }}>
            <Link to="/products/:id" style={{textDecoration:"none"}}>
                <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
            </Link>
            <div className="d-flex justify-content-end mx-2">
                <img
                    src={favoff}
                    alt=""
                    className="text-center"
                    style={{
                        height: "24px",
                        width: "26px",
                    }}
                />
            </div>
            <Card.Body>
                <Card.Title>
                    <div className="card-title">
                    سماعه راس ذكيه لون أسود تعمل علي جميع الاجهزه الالكترونية{" "}
                    </div>
                </Card.Title>
                <Card.Text>
                    <div className="pro-card  ">
                        <div className="d-flex">
                            <img
                                className=""
                                src={rate}
                                alt=""
                                height="16px"
                                width="16px"
                            />
                            <div className="card-rate mx-2">4.5</div>
                        </div>
                        <div className="d-flex ">
                            <div className="card-price">880</div>
                            <div className="card-currency mx-1">جنيه</div>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default ProductCard;
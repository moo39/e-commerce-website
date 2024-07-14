import React from 'react';
import {Container,Row} from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import clothe from '../../Images/clothe.png';
import cat2 from '../../Images/cat2.png';
import labtop from '../../Images/labtop.png';
import sale from '../../Images/sale.png';
import pic from '../../Images/pic.png';

const CategoryContainer = () => {
    return (
        <Container>
        <div className='admin-content-text'>كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between pb-5 py-2'>
                <CategoryCard title=" ملابس" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCard title="اجهزة التكترونية" img={labtop} background="#0034FF" />
                <CategoryCard title=" تخفيضات" img={sale} background="#F4DBA4" />
                <CategoryCard title=" ملابس" img={clothe} background="#FF6262" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    );
};

export default CategoryContainer;
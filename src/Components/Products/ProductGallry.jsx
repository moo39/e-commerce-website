import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../Images/mobile.png';
import mobile1 from '../../Images/mobile1.png';
import mobile2 from '../../Images/mobile2.png';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallry = () => {
    const images = [
        {
            original: `${mobile}`,
            //بيعرض الصور مصغره تحت الصوره الكبيره 
            // thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: `${mobile1}`,
            // thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: `${mobile2}`,
            // thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-2">
            <ImageGallery items={images} 
            defaultImage={mobile}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
            />
        </div>
    );
};

export default ProductGallry;
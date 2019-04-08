import React from 'react';
import Button from '../utils/button';

const homePromotion = (props) => {

    const promotions = [
        {
            img: '/images/featured/featured_home_3.jpg',
            lineOne: 'Up to 40% Off',
            lineTwo: 'Second Hand Guitars',
            linkTitle: 'Shop Now',
            linkTo: '/shop'
        }
    ]


    const renderPromotions = () => {
        return (
            promotions ? promotions.map((promotion, index) => {
                return (
                    <div className="home_promotion_img"
                        key={index}
                        style={{
                            background: `url(${promotion.img})`
                        }}>

                        <div className="tag title">{promotion.lineOne}</div>
                        <div className="tag low_title">{promotion.lineTwo}</div>
                        <div>
                            <Button type="default"
                                title={promotion.linkTitle}
                                linkTo={promotion.linkTo}
                                addStyles={{
                                    margin: '10px 0 0 0'
                                }}></Button>
                        </div>

                    </div>
                )
            })
                : null
        )
    }


    return (
        <div className="home_promotion">
            {renderPromotions()}
        </div>
    );
};

export default homePromotion;
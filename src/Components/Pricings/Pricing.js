import React from 'react';
import './Pricing.css';
import pricingimg1 from '../../Resources/ProfileImg/pricingimg.png';
import pricingimg2 from '../../Resources/ProfileImg/pricingimg1.png';
import pricingimg3 from '../../Resources/ProfileImg/pricingimg3.png';
import pricingimg4 from '../../Resources/ProfileImg/pricingimg2.png';

import star from '../../Resources/icons/star.svg';

const Pricing = () => {

    const pricingData = [
        {title:'modern wall decor framed painting',
        price:'199.99',image:pricingimg1},
        {title:'modern wall decor framed painting',
        price:'199.99',image:pricingimg2},
        {title:'modern wall decor framed painting',
        price:'199.99',image:pricingimg3},
        {title:'modern wall decor framed painting',
        price:'199.99',image:pricingimg4},

    ]

  return (
    <>
    <div className="container">
      <div className="pricing-contianer">
        {pricingData.map((ele,index)=>{
            return(
                <div className="pricing-post">
                <img src={ele.image} alt="" className="pricingimg" />
                <h4>{ele.title}</h4>
                <div className="pricing-value">
                <h3>$199.99</h3>
                <div className="pricig-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                </div>
            </div>
            )
        })}
       
       
      </div>
      </div>
    </>
  );
}

export default Pricing;

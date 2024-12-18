import React from 'react'
import Container from '../layer/Container'
import Slider from 'react-slick';
import ProductsItem from '../layer/ProductsItem';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
    className="w-9 h-12 bg-[#56565656] rounded-l-full items-center justify-center text-white absolute right-0 z-10 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:pl-3 hover:text-xl transition-all duration-100"
    style={{ ...style, display: "flex",}}
    onClick={onClick}
    >
      <FaAngleRight className='text-2xl text-white' />
    </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className="w-9 h-12 bg-[#56565656] rounded-r-full items-center justify-center text-white absolute left-0 z-10 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:pr-3 hover:text-xl transition-all duration-100"
        style={{ ...style, display: "flex",}}
        onClick={onClick}
        >
          <FaAngleLeft className='text-2xl text-white' />
        </div>
    );
  }
const NewProducts = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div>
            <Container className={"py-9"}>
                <h2 className='font-common font-semibold text-black text-[22px] pb-3'>New Products</h2>
                <Slider {...settings}>
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                    <ProductsItem />                    
                </Slider>
            </Container>
        </div>
    )
}

export default NewProducts
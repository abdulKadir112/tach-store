import React from 'react'
import Slider from 'react-slick';
import banner from '../assets/banner/banner.jpg'
import Img from '../layer/Img';
import Container from '../layer/Container';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function SamplePrevArrow(props) {
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
function SampleNextArrow(props) {
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


const Banner = () => {

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
          <div>
            <Img src={banner} />
          </div>
          <div>
            <Img src={banner} />
          </div>
          <div>
            <Img src={banner} />
          </div>
          <div>
            <Img src={banner} />
          </div>
          <div>
            <Img src={banner} />
          </div>
          <div>
            <Img src={banner} />
          </div>
        </Slider>
      </Container>
    </div>
  )
}

export default Banner
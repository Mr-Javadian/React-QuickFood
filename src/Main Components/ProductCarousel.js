//sadegh javadian
//https://github.com/Mr-Javadian


import Slider from 'react-slick';
import './ProductCarousel.css'

// import libraries - needs to be installed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = ({ products }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>

      {products.map((product, index) => (
        <div className='PContainer' key={index} >
          <img className='Pimg'  src={product.image} alt={product.name} />
          <h3 className='Ptitle'>{product.name}</h3>
          <p className='Pprice'>{product.price}</p>
          <a href={product.link} >
          <button  className='PButton' type="button">ثبت سفارش</button>
          </a>
        </div>
      ))}
      
    </Slider>
  );
};

export default ProductCarousel;
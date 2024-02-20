import { useEffect, useState } from 'react';
import ProductItem from './../../product-item';

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItemLoading from 'components/product-item/loading';
import ProductsLoading from 'components/products-content/list/loading';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const ProductsCarousel = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
        try {
            const response = await fetch('/api/dashboard');
            if(response.ok){
              const productData = await response.json();
              if(productData){
                  setProductInfo(productData);
              }
            }
        } catch (error) {
            console.log("Internal Server Error");
        }
    }
    fetchData();
  }, []);

  // if (!productInfo) return <div>Loading...</div>;

  return (
    <>
      {!productInfo && 
        (
          <p className='text-center'>Loading....</p>
        )
      } 

      {productInfo && 
      <div className="products-carousel">
        <Swiper 
        spaceBetween={spaceBetween} 
        loop={true} 
        centeredSlides={centeredSlides} 
        watchOverflow={true} 
        slidesPerView={slidesPerView} 
        className="swiper-wrapper">
          {productInfo.map(item => (
            <SwiperSlide key={item.p_id}>
              <ProductItem 
                pid={item.p_id} 
                title={item.title}
                price={item.price}
                key={item.p_id}
                image={item.image} 
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>}
    </>
  )
}

export default ProductsCarousel
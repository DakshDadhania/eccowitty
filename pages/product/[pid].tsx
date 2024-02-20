import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Image from 'next/image';
// types
import { ProductType } from 'types';

type ProductPageType = {
  product: ProductType;
}


const Product = ({ product }: ProductPageType) => {
  const router = useRouter();
  const [productId, setProductId] = useState();
  const [productInfo, setProductInfo] = useState();
  const handleWhatsAppRedirect = () => {
    // Here you'll need to replace the phone number with your business number
    // and encode a message that you want to prefill
    const phoneNumber = '+917204914788';
    const message = encodeURIComponent(`Hi, I would like to buy the product: ${productInfo.title}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    // Update productId when the route changes
    setProductId(router.query.pid);
  }, [router.query.pid]);

  useEffect(() => {
    // Fetch data when productId is available
    const fetchData = async () => {
      try {
        if (productId) {
          const response = await fetch(`/api/product/${productId}`);
          if (response.ok) {
            const productData = await response.json();
            if (productData) {
              setProductInfo(productData);
            }
          }
        }
      } catch (error) {
        console.log("Internal Server Error");
      }
    };

    fetchData();
  }, [productId]); // Include productId as a dependency

    
    console.log("Product info: ",productInfo)
    
    if (!productInfo) {
      return <p className='p-24 text-center'>Loading...</p>;
    }

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery image={productInfo.image} />
            
            <div className='flex flex-col'>
              <section className="product-content ">
                <div className="product-content__intro">
                  <h2 className="product__name">{productInfo.title}</h2>

                  <div className="product__prices">
                    <h4>Rs{productInfo.price}</h4>
                  </div>
                </div>
                <button 
        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center'
        onClick={handleWhatsAppRedirect}
      >
       
       <Image
                src="/images/whatsapp.svg"
                width={90}
                height={60}
                alt="WhatsApp"
              />
        Buy Now
      </button>
              </section>

              <section className="product-single__description">
                <div>
                  <p>{productInfo.description}</p>
                </div>
              </section>
            </div>
           
          </div>
          
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product

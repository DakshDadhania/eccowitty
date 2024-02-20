import Link from 'next/link';
import { ProductTypeList } from 'types';

const ProductItem = ({ image, pid, title, price }: ProductTypeList) => {

  return (
    <div className="product-item">
      <div className="product__image">
        <Link href={`/product/${pid}`}>
          <a>
            <img src={image ? image : ''} alt="product" />
          </a>
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{title}</h3>
        <div className={"product__price "} >
          <h4>Rs.{ price }</h4>
        </div>
      </div>

      
    </div>
  )
};


export default ProductItem
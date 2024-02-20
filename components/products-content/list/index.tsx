import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: ProductTypeList)  => (
            <ProductItem 
              pid={item.pid} 
              title={item.title}
              price={item.price}
              description={item.description}
              key={item.pid}
              image={item.image} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent
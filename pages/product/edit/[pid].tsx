import { useRouter } from "next/router"
import { useEffect, useState } from "react";


//have to add patch endpoint for editing privilegdes

export default function editProduct() {
    const router = useRouter();
  const [productId, setProductId] = useState();
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

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
            const data = await response.json();
            if (data) {
              setProductData({
                title: data.title,
                description: data.description,
                price: data.price,
                image: data.image
              })
            }
          }
        }
      } catch (error) {
        console.log("Internal Server Error");
      }
    };

    fetchData();
  }, [productId]); // Include productId as a dependency

  const handleChange = (e)=>{
    setProductData({
    ...productData,
    [e.target.name]: e.target.value,
    })
  }
  console.log(productData);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`/api/product/${productId}`,{
          method:'PATCH',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({productData}),
      });
      if(response.ok){
          alert('Product Edited successfully');
          router.push('/dashboard');
      }
    } catch (error) {
        alert('Internal Error');
    }
  }

    
    console.log("Product info: ",productData)
    
    if (!productData) {
      return <p>Loading...</p>;
    }


    return (
      <form className="p-24 max-w-screen-lg mx-auto">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Edit Product</h2>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={productData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
  
              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={productData.description}
                    onChange={handleChange}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the product.</p>
              </div>
  
              <div className="sm:col-span-4">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      autoComplete="price"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={productData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

             
  
              <div className="sm:col-span-4">
                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                  Image
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="image"
                      id="image"
                      autoComplete="image"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={productData.image}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    )
  }

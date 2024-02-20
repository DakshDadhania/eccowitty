import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsContent from '../components/products-content';

const Products = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
    <div className="about-us__section-content mt-10">
    <div className="about-us__content mx-auto max-w-4xl text-gray-700">
          <h1 className="text-4xl font-bold text-gray-800">Eco-Friendly Writing</h1> <br />
          <p className="mt-4 text-lg text-gray-600">Discover our sustainable seed pens and pencils</p>
        
        <div className="products-page__info my-10">
          <p className="text-gray-700">
            Our flagship products, seed pens and pencils, revolutionise the way we write by combining functionality with sustainability. These pens are crafted from eco-friendly materials like recycled paper and biodegradable capsules embedded with seeds that can be planted after use. Each pen not only offers a smooth writing experience but also leaves behind a lasting impact as it grows into a beautiful plant, symbolising the power of nurturing nature.
          </p>
        </div>
        <div className="products-page__usage my-10">
          <h2 className="text-2xl font-semibold text-gray-800">Usage</h2>
          <p className="mt-4 text-gray-700">
            Use the seed pen just like any other pen to jot down your thoughts, ideas, or to-do lists. Do not press the capsule too much or the seeds might get damaged.
          </p>
        </div>
        <div className="products-page__disposal my-10">
          <h2 className="text-2xl font-semibold text-gray-800">Disposal</h2>
          <p className="mt-4 text-gray-700">
            Here are two ways to responsibly dispose of our seed pens in India:
            <ol className="list-decimal ml-5">
              <li>
                <strong>Planting and Cartridge Disposal:</strong> After using the pen, plant it in soil or a suitable growing medium. Bury the pen casing in the soil, following proper planting guidelines, and provide appropriate care for the seeds to germinate. Dispose of the ink cartridge separately in the appropriate recycling or hazardous waste disposal facility as per local regulations.
              </li>
              <li>
                <strong>Cartridge Removal and Recycling:</strong> Alternatively, remove the ink cartridge from the pen before disposal. Dispose off the paper and cartridge in designated recycling bins or take it to a recycling centre that accepts ink cartridges.
              </li>
            </ol>
          </p>
          </div>
        </div>
        
      </div>
      <div className="container">
        
      </div>
    </section>
    <Footer />
  </Layout>
)
  
export default Products
  
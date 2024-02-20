import React from 'react';
import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';

const Aboutus = () => (
  <Layout>
    <Breadcrumb />
    <section className="about-us py-10">
      <div className="container mx-auto px-4">
        <div className="about-us__header text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Promoting Sustainability through Innovative Products</h1>
          <p className="text-lg text-gray-600">Get to know us more...</p>
        </div>

        <div className="about-us__section-content">
          <div className="about-us__content text-gray-700 leading-relaxed">
            <p>Welcome to ecowitty, the embodiment of our passion for the environment and our unwavering commitment to creating a sustainable future. As a startup founded by two college students with a shared vision, we embarked on a remarkable journey to bring about positive change. Our exploration and research led us to a profound realisation: sustainable products and services can make a significant difference in our world. This revelation ignited the spark that ignited the creation of ecowitty, a brand dedicated to delivering environmentally friendly products and services that not only minimise our impact on the planet but also empower individuals to embrace a greener lifestyle.</p>

            <p className="mt-4">We believe that sustainability should not be a luxury but a choice that is accessible to all. The goal of Ecowitty is to bridge the gap between sustainability and affordability, proving that it is possible to create a win-win situation where both the environment and consumers benefit. By making sustainable products more accessible and competitively priced, Ecowitty seeks to foster a culture of sustainability and empower individuals to make environmentally conscious decisions without financial constraints.</p>

            <p className="mt-4">Let's build a future where sustainability is not just a trend, but a way of life. Explore our range of innovative products, and let's make a difference, one step at a time.</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default Aboutus;

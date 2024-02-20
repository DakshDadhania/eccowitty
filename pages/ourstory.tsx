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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">The Journey to Ecowitty</h1>
          <p className="text-lg text-gray-600">How did it start?...</p>
        </div>

        <div className="about-us__section-content">
          <div className="about-us__content text-gray-700 leading-relaxed">
            <p>Welcome to Ecowitty, where our mission is to create equity in the environment through sustainable products. We are a start-up that was born out of the passion and dedication of two college students during their research days. Through their findings, they realised that sustainable products, when priced competitively with non-sustainable alternatives, can have a significant demand.</p>

            <p className="mt-4">Our journey began with a simple idea: to make environmentally friendly products accessible to everyone. We recognized that the demand for sustainable goods was growing rapidly, but many people were deterred by the perception that such products were expensive or lacked durability. Determined to challenge this notion, we set out to deliver high-quality, eco-friendly alternatives that are not only affordable but also built to last.</p>

            <p className="mt-4">At Ecowitty, we understand that every small step towards sustainability counts. We started by revolutionising the way we write with our seed pens, which are not only biodegradable but also contain seeds that can be planted to grow beautiful plants. This innovative concept quickly gained popularity, and it fuelled our passion to expand our product range. Building on the success of our seed pens, we introduced seed pencils as a natural progression. These pencils serve the same purpose of leaving a positive impact on the environment, while still offering the smooth writing experience you expect. We believe that even the simplest of tools can contribute to a greener future.</p>

            <p className="mt-4">The latest addition to our range has been sustainable plantable books. We envision a future where even the pages we read can have a positive impact. By utilising environmentally friendly materials and production processes, we aim to popularise books that not only inspire minds but also nurture the planet.</p>

            <p className="mt-4">Stay tuned as we embark on the exciting chapter of our journey!</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default Aboutus;

import React from 'react';
import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';

const Aboutus = () => (
  <Layout>
    <Breadcrumb />
    <section className="about-us">
      <div className="about-us__header text-center">
        <h1 className="text-4xl font-bold text-gray-800">Ecowitty: Take Equity in the Environment</h1>
        <p className="mt-4 text-lg text-gray-600">Why to choose us?...</p>
      </div>
      <section className="about-us__section-content mt-10">
        <div className="about-us__content mx-auto max-w-4xl text-gray-700">
        <p className="mb-6">Consumers should choose Ecowitty for their eco-friendly stationery needs because we understand and address the environmental impact of pens. We recognize that traditional pens often end up in landfills, taking hundreds of years to decompose. 
Our eco-friendly pens are designed to minimise environmental impact from the start. They use significantly lesser plastic than traditional pens and incorporate recycled paper. The body of our pens can be composted, and the cartridge can be recycled after use, making them a sustainable choice for conscious consumers.

By choosing ecowitty, consumers can actively participate in reducing plastic
waste, and promoting a circular economy. We believe that through our environmentally friendly alternatives, we can inspire a shift towards more
sustainable and responsible consumption habits, helping to create a greener future for our planet.

Join us in making a positive impact with every stroke, knowing that your choice of stationery can contribute to a healthier and more sustainable environment.

</p>
<h2 className="text-2xl font-semibold text-gray-800">Clientele</h2>
<p className="mt-4">
HDFC <br />
We were delighted when a manager from HDFC Bank recognized the value of our eco-friendly pens and made a conscious decision to purchase them for their entire branch. Their commitment to sustainability and promoting environmentally friendly choices resonated with our mission, and we are proud to support their efforts in creating a greener workplace. This collaboration showcases the positive impact that sustainable choices can have, not only for the environment but also for businesses that prioritise social responsibility.
 <br /> <br />
Vriksha Nursery <br />
 
We were thrilled when a nursery owner chose to partner with us and purchase our seed pens for their nursery. By offering our eco-friendly pens, the nursery demonstrates their commitment to teaching children about sustainability and the importance of nurturing nature. We are proud to contribute to their mission of fostering a love for the environment from an early age, as each pen planted becomes a tangible symbol of growth and environmental stewardship in the hands of young learners. Together, we are sowing the seeds of a greener future.
 <br /> <br />
Stationery Shops <br />

We were excited when several stationery shops recognized the value of our sustainable products and decided to stock our seed pens. By offering our eco-friendly stationery, these shops demonstrate their commitment to providing customers with environmentally conscious options. Together, we are working towards making sustainable choices more accessible and promoting a greener lifestyle within the stationery industry. We are grateful for their support in spreading the message of sustainability and empowering individuals to make a positive impact through their stationery purchases.
 
</p>
<h2 className="mt-10 text-2xl font-semibold text-gray-800">Founders</h2>
<div className="mt-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Jasmeet Singh Ghai</h3>
              <p className="mt-2">... A graduate of Manipal University, Jasmeet’s passion lies in the realm of finance and management. Currently pursuing his ACCA (Association of Chartered Certified Accountants) qualification, Jasmeet brings a strong financial & operational acumen to ecowitty. With his expertise, he ensures that the company operates with efficiency, making sustainable practices financially viable and scalable. ...</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Tanya Bhatia</h3>
              <p className="mt-2">... Also a graduate of Manipal University, Tanya is a dedicated advocate for both the environment and analytics. Pursuing her CGMA (Chartered Global Management Accountant) qualification, she combines her passion for sustainability with a solid financial background. Tanya plays a pivotal role in ensuring that Ecowitty’s initiatives align with both environmental goals and financial sustainability. ...</p>
            </div>
          </div>



Together, Jasmeet and Tanya form a dynamic duo that brings a harmonious blend of finance, management, and environmental consciousness to Ecowitty. Their shared vision and diverse expertise serve as the driving force behind the brands mission to create equity in the environment through accessible , affordable & sustainable products.



        </div>
     
    </section>
    </section>

    <Footer />
  </Layout>
);

export default Aboutus;

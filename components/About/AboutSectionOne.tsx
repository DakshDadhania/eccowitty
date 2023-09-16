import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <SectionTitle
                title="Promoting Sustainability through Innovative Products"
                paragraph="Get to know us more..."
                mb="44px"
              />
            </div>
            <p className="text-justified p-5 max-w-screen-xl mx-auto">
            At Ecowitty, we are dedicated to making a positive impact on the environment by offering a range of sustainable products. Our mission is to encourage individuals and businesses alike to adopt eco-friendly practices, making conscious choices that help preserve our planet for future generations.
            <br/><br/>
            By collaborating with Ecowitty, businesses have an opportunity to align their values with their actions. By incorporating our sustainable products into their operations, companies can demonstrate their commitment to environmental responsibility. Engaging with our plantable pens, pencils, and upcoming paper products not only helps reduce their carbon footprint but also serves as a tangible representation of their dedication to sustainability.
            <br/><br/>
            Additionally, our products offer individuals and organizations a unique way to make a positive impact. By utilizing Ecowitty's plantable products, you can contribute to reforestation efforts and foster biodiversity. As plants grow from the embedded seeds, they purify the air, provide habitats for wildlife, and restore ecosystems. Together, we can create a greener future and leave a lasting legacy of sustainable practices.
            <br/><br/>
            Join us at Ecowitty as we revolutionize the way we write, plan, and document our lives, all while making a tangible difference for our planet. Together, let's embrace sustainability and inspire others to do the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

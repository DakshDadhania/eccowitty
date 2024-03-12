import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] mt-16"
      >
        <div className="container">
          <SectionTitle
            title="Our Products"
            paragraph="Explore Our Eco-Friendly Creations"
            center
          />

          <div className="px-10 lg:px-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items max-w-screen-xl">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

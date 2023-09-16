import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <section>
      <div 
        id="home" 
        className=" bg-cover bg-fixed bg-center bg-no-repeat h-1/3 px-5 md:px-10 xl:px-24 relative z-10 overflow-hidden pt-16 2xl:pt-16 2xl:pb-16 pb-16"
        style={{ backgroundImage: "url('/images/hero/about-banner.jpg')"
      }}
      >
        <div className="z-10 absolute inset-0 bg-black opacity-40"></div>
        
        <Breadcrumb
        pageName="About Page"
        description="Introducing Ecowitty"
      />
      </div>
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </section>
  );
};

export default AboutPage;

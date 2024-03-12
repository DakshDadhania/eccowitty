import Link from "next/link";
// import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    
    <section>
      {/* <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        style={{ backgroundImage: "url('/images/hero/background.svg')",
        backgroundSize: "cover"
      }} */}
      <div 
        id="home" 
        className=" bg-cover bg-fixed bg-center bg-no-repeat min-h-screen flex flex-col xl:flex-row justify-center px-5 md:px-10 xl:px-24 content-center relative z-10 overflow-hidden pt-16 2xl:pt-16 2xl:pb-16 pb-16"
        style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')"
      }}
      >
        <div className="z-10 absolute inset-0 bg-black opacity-40"></div>
        {/* <div className="hidden xl:w-3/4 xl:block 2xl:w-1/2 ">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Spline scene="https://prod.spline.design/x5YGxuc0dGpyHs79/scene.splinecode" 
              onError={(error) => console.error('Spline Error:', error)}
              className="mx-auto"
            />
          </Suspense>
        </div> */}
      <div>
        <div className="container z-50 relative">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center flex flex-col content-center"
                data-wow-delay=".2s"
              >
                <h1 className="sm:mt-16 lg:mt-24 xl:mt-24 2xl:mt-32 mb-10 text-3xl font-light leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Embrace a Greener Future with Ecowitty<br /><span className="outline outline-offset-2 text-center font-extrabold text-9xl text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] dark:bg-gradient-to-r dark:from-[#6266F1] dark:via-white dark:to-[#0FA5E9] dark:bg-clip-text dark:text-transparent">Your Equity in Nature</span>
                </h1>
                {/* <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                DASCII is a Digital Marketing and Development Agency that provides essential services to businesses looking to grow and succeed. From creative design and content creation, to social media marketing, website development and improvement, we provide a range of services.
                </p> */}
                <div className="mt-8 flex items-center justify-center sm:space-x-4">
                  <Link
                      href="/contact" 
                      className="rounded-full text-[#6266F1] font-extrabold bg-white hover:bg-[#6266F1] hover:text-white py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out mb-10 sm:mb-0 opacity-90 hover:opacity-100"
                  >
                    CONTACT NOW
                  </Link>
                  <Link 
                    href="https://shop.ecowitty.in/" 
                    className="rounded-full text-[#6266F1] font-extrabold bg-white hover:bg-[#6266F1] hover:text-white py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out mb-10 sm:mb-0 opacity-90 hover:opacity-100"
                >
                    SHOP NOW
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    
  );
};

export default Hero;

const SingleFeature = ({ feature }) => {
  const { img, title, price } = feature;
  return (
    <div className="rounded-lg mx-auto w-full rounded-lg bg-[#6266F1] shadow-3xl shadow-slate-700 transition-shadow ease-in-out hover:shadow-none max-w-[16rem]">
      <div className="flex flex-col ">
        <img
          src={`/images/hero/${img}.jpg`}
          height="200"
          width="400"
          className="rounded-t-lg"
        />
        <div className="wow fadeInUp flex-column text-center p-8" data-wow-delay=".15s">
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p>Price: {price} Rupees</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;

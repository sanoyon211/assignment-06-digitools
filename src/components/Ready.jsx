const Ready = () => {
  return (
    <div className=" bg-gradient-to-r from-[#3218f2] to-[#8807ea] py-25 px-3 text-center   overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 ">
          Ready To Transform Your Workflow?
        </h2>
        <p className=" max-w-2xl text-violet-200 text-lg leading-relaxed mb-8 mx-auto ">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-5">
          <a
            href="#products"
            className="bg-white text-violet-700 hover:bg-violet-50 font-semibold px-6 py-4 rounded-3xl transition-all text-sm sm:text-lg no-underline hover:shadow-lg ease-in-out duration-300 hover:scale-[1.01] active:scale-[0.97]"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="border border-violet-400 text-white  font-semibold px-6 py-4 rounded-3xl transition-all text-sm sm:text-lg no-underline ease-in-out duration-300 hover:scale-[1.01] active:scale-[0.97]"
          >
            View Pricing
          </a>
        </div>
        <p className="text-violet-100 text-base">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Ready;

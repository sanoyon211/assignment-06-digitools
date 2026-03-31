import BannerImg from "../assets/products/banner.png"
import Playbtn from "../assets/products/Play.png"

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-violet-100 rounded-full blur-[120px] opacity-70 animate-pulse-slow"></div>
        <div
          className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-pink-100 rounded-full blur-[100px] opacity-50 animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 text-violet-primary text-sm font-bold animate-slide-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-secondary"></span>
              </span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.1] text-gray-900 tracking-tight">
              Supercharge Your <br />
              <span className="text-gradient">Digital Workflow</span>
            </h1>

            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-lg">
              Access premium AI tools, design assets, and productivity
              software—all in one hub. Built for modern creators who value speed
              and quality.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#products">
                <button className="btn-gradient cursor-pointer">
                  Explore Products
                </button>
              </a>

              <button className="bg-white border-2 border-violet-500 hover:border-violet-300 bg-gradient-to-r from-[#3218f2] to-[#8807ea] bg-clip-text text-transparent font-bold px-5 py-4 rounded-3xl transition-all hover:bg-violet-50 flex items-center gap-2 shadow-sm cursor-pointer hover:shadow-sm hover:shadow-violet-600">
              <img src={Playbtn} alt="" /> Watch Demo
              </button>
            </div>
          </div>

          <div className="mx-auto">
            <img src={BannerImg} alt="" className="animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

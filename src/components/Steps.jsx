import Rocket from '../assets/products/rocket.png';
import Product from '../assets/products/package.png';
import User from '../assets/products/user.png';

const Steps = () => {
  const steps = [
    {
      n: '01',
      t: 'Create Account',
      d: 'Sign up for free in seconds. No credit card required to get started.',
      i: User,
    },
    {
      n: '02',
      t: 'Choose Products',
      d: 'Browse our catalog and select the tools that fit your needs.',
      i: Product,
    },
    {
      n: '03',
      t: 'Start Creating',
      d: 'Download and start using your premium tools immediately',
      i: Rocket,
    },
  ];
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-5xl font-black mb-20 tracking-tighter">
          Get Started in <span className="text-gradient">3 Steps</span>
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 relative mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center relative bg-white border border-gray-200 rounded-xl py-15 px-10 group "
            >
              <div className="absolute top-4 right-4 size-8 rounded-full bg-gradient-to-r from-[#3218f2] to-[#8807ea] text-white text-xs font-black flex items-center justify-center shadow-lg">
                {s.n}
              </div>
              <div className="size-24 rounded-[2rem] bg-violet-50 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                <img src={s.i} alt="" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                {s.t}
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

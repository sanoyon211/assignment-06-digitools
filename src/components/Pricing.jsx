import { HiCheck } from 'react-icons/hi';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: 0,
    period: 'month',
    popular: false,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: 29,
    period: 'month',
    popular: true,
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: 99,
    period: 'month',
    popular: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tighter font-[family-name:var(--font-display)]">
            Simple,{' '}
            <span className="bg-gradient-to-r from-[#4f39f6] to-[#9514FA] bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 sm:p-10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col
                ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#4f39f6] to-[#9514FA] shadow-2xl shadow-violet-200 scale-101 z-10 text-white'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-violet-100'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-300 text-amber-700 text-xs sm:text-[14px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4 sm:mb-8">
                <h3
                  className={`text-xl sm:text-2xl font-black mb-2 font-[family-name:var(--font-display)] tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900'}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-semibold opacity-80 ${plan.popular ? 'text-violet-100' : 'text-gray-400'}`}
                >
                  {plan.subtitle}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-4 sm:mb-8">
                <span
                  className={`text-3xl sm:4xl font-black tracking-tighter font-[family-name:var(--font-display)] ${plan.popular ? 'text-white' : 'text-gray-900'}`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm font-bold uppercase opacity-60 ${plan.popular ? 'text-violet-100' : 'text-gray-400'}`}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-2 mb-6 sm:mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-[12px] sm:text-sm font-semibold ${plan.popular ? 'text-white' : 'text-gray-600'}`}
                  >
                    <HiCheck
                      className={`w-5 h-5 mt-0.5 shrink-0 ${plan.popular ? 'text-white' : 'text-[#4f39f6]'}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Gradient Button */}
              <button
                className={`w-full py-4 rounded-3xl font-black text-[12px] sm:text-sm transition-all duration-300 border-0 cursor-pointer shadow-lg
                  ${
                    plan.popular
                      ? 'bg-white text-violet-700 hover:bg-violet-50 hover:shadow-xl hover:scale-[1.02]'
                      : 'bg-gradient-to-r from-[#4f39f6] to-[#9514FA] text-white hover:opacity-95 hover:shadow-violet-200 hover:scale-[1.02]'
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

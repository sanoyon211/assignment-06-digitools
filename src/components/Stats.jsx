const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
  { value: '99%', label: 'Uptime' },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#3218f2] to-[#8807ea] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-violet-500">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-6 px-4"
            >
              <div className="text-4xl font-extrabold text-white font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-violet-200 text-sm font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

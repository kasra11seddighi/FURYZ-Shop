import React from 'react';
import { Truck, ShieldCheck, Headphones, CheckCircle } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Free Shipping',
    icon: <Truck className="w-12 h-12" />,
  },
  {
    id: 2,
    title: 'Secure Payment',
    icon: <ShieldCheck className="w-12 h-12" />,
  },
  {
    id: 3,
    title: '24/7 Support',
    icon: <Headphones className="w-12 h-12" />,
  },
  {
    id: 4,
    title: 'Quality Guarantee',
    icon: <CheckCircle className="w-12 h-12" />,
  },
];

const ValuePropositions = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-4 border-y border-white/5 mt-7">
      <div className="max-w-7xl mx-auto">
        {/* Header with Lines */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold px-8 tracking-widest uppercase">
            Why Choose Us
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col items-center text-center group transition-all duration-300 ${
                index !== features.length - 1 ? 'md:border-r border-white/10' : ''
              }`}
            >
              {/* Icon Container with Neon Glow */}
              <div className="text-[#a3ff12] mb-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(163,255,18,0.5)]">
                {feature.icon}
              </div>
              
              <h3 className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;

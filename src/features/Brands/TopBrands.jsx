import React from 'react';
import SectionTitleRow from '../../components/common/SectionTitleRow';
import { brandsData } from '../../data/brandsData';
import { useNavigate } from "react-router";


const TopBrands = ({ max = 5 }) => {
  const displayBrands = brandsData.slice(0, max);
const navigate = useNavigate();

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <SectionTitleRow
          title="FEATURED BRANDS"
          actionLabel="View All"
          onAction={() => {navigate("/brands")}}
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayBrands.map((brand) => (
            <div
             onClick={() => navigate(`/brands?brand=${brand.name}`)}
              key={brand.id}
              className="
                group relative overflow-hidden
                h-28 rounded-2xl
                border border-white/10
                bg-white/[0.03]
                transition-all duration-300
                hover:border-lime-400/40
                hover:bg-white/[0.06]
                hover:shadow-[0_0_25px_rgba(163,230,53,0.15)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 grid h-full place-items-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`
                    block object-contain
                    w-20 md:w-24
                    h-10 md:h-12
                    opacity-80
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:scale-105
                    ${brand.name === 'Nike' ? 'translate-y-[2px]' : ''}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;

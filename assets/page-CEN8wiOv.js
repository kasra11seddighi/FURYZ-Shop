import{C as e,S as t,c as n,x as r}from"./index-DqOcT0mu.js";import{t as i}from"./brandsData-BJUvaVmU.js";import{t as a}from"./products-4xHuBfEY.js";import{t as o}from"./ProductCard-CGh24Z5N.js";var s=e(t(),1),c=n();function l(){let[e,t]=(0,s.useState)(null),[n]=r(),l=n.get(`brand`),u=i[0],d=i.slice(1),f=(0,s.useMemo)(()=>e?a.filter(t=>t.brand===e):[],[e]),p=e=>{t(e),setTimeout(()=>{document.getElementById(`brand-products`)?.scrollIntoView({behavior:`smooth`})},120)};return(0,s.useEffect)(()=>{l&&t(l)},[l]),(0,c.jsxs)(`main`,{className:`min-h-screen bg-[#02040a] text-white pb-24`,children:[(0,c.jsxs)(`div`,{className:`fixed inset-0 pointer-events-none`,children:[(0,c.jsx)(`div`,{className:`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-500/10 blur-[120px] rounded-full`}),(0,c.jsx)(`div`,{className:`absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full`})]}),(0,c.jsxs)(`div`,{className:`relative max-w-7xl mx-auto px-6 pt-24`,children:[(0,c.jsxs)(`header`,{className:`mb-16 text-center`,children:[(0,c.jsxs)(`h1`,{className:`text-5xl md:text-6xl font-black tracking-tight`,children:[`Our `,(0,c.jsx)(`span`,{className:`text-lime-400`,children:`Brands`})]}),(0,c.jsx)(`p`,{className:`mt-4 text-white/60 max-w-xl mx-auto`,children:`Discover premium sports brands trusted by athletes worldwide.`})]}),(0,c.jsx)(`div`,{className:`mb-20 relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 md:p-16`,children:(0,c.jsxs)(`div`,{className:`grid md:grid-cols-2 items-center gap-12`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`inline-block px-4 py-1 rounded-full bg-lime-400 text-black text-xs font-bold mb-6`,children:`Featured Brand`}),(0,c.jsx)(`h2`,{className:`text-5xl font-black mb-4`,children:u.name}),(0,c.jsxs)(`p`,{className:`text-white/60 max-w-md mb-8`,children:[`Innovation, performance, and iconic design. Explore the latest collection from `,u.name,`.`]}),(0,c.jsx)(`button`,{onClick:()=>p(u.name),className:`\r
                bg-white text-black\r
                px-8 py-4\r
                rounded-xl\r
                font-bold\r
                hover:bg-lime-400\r
                transition\r
                `,children:`Explore Products`})]}),(0,c.jsxs)(`div`,{className:`flex justify-center relative`,children:[(0,c.jsx)(`div`,{className:`absolute w-72 h-72 bg-lime-400/20 blur-[90px] rounded-full`}),(0,c.jsx)(`img`,{src:u.logo,alt:u.name,className:`relative z-10 w-72 object-contain invert brightness-200`})]})]})}),(0,c.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`,children:d.map(e=>(0,c.jsxs)(`div`,{onClick:()=>p(e.name),className:`\r
              group cursor-pointer\r
              relative h-40 rounded-2xl\r
              border border-white/10\r
              bg-white/[0.04]\r
              flex items-center justify-center\r
              transition-all duration-300\r
              hover:border-lime-400/40\r
              hover:bg-white/[0.07]\r
              hover:scale-[1.03]\r
              `,children:[(0,c.jsx)(`img`,{src:e.logo,alt:e.name,className:`\r
                max-h-12 object-contain\r
                opacity-70\r
                group-hover:opacity-100\r
                transition\r
                `}),(0,c.jsx)(`div`,{className:`\r
              absolute inset-0\r
              opacity-0\r
              group-hover:opacity-100\r
              bg-gradient-to-br\r
              from-lime-400/10\r
              via-transparent\r
              to-transparent\r
              transition\r
              `})]},e.id))}),e&&(0,c.jsxs)(`section`,{id:`brand-products`,className:`mt-24 scroll-mt-32`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between mb-10`,children:[(0,c.jsxs)(`h2`,{className:`text-3xl font-black`,children:[e,` Products`]}),(0,c.jsx)(`button`,{onClick:()=>t(null),className:`\r
                px-4 py-2\r
                text-sm\r
                rounded-lg\r
                border border-white/10\r
                hover:border-lime-400/40\r
                hover:text-lime-400\r
                transition\r
                `,children:`Clear Filter`})]}),f.length===0?(0,c.jsx)(`p`,{className:`text-white/50`,children:`No products found for this brand.`}):(0,c.jsx)(`div`,{className:`\r
              grid\r
              grid-cols-2\r
              md:grid-cols-3\r
              lg:grid-cols-4\r
              gap-6\r
              `,children:f.map(e=>(0,c.jsx)(o,{product:e},e.id))})]})]})]})}export{l as default};
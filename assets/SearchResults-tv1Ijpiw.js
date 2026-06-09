import{c as e,x as t}from"./index-DqOcT0mu.js";import{t as n}from"./products-4xHuBfEY.js";import{t as r}from"./ProductCard-CGh24Z5N.js";var i=e();function a(){let[e]=t(),a=e.get(`q`)||``,o=n.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())||e.brand.toLowerCase().includes(a.toLowerCase()));return(0,i.jsxs)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-white min-h-screen`,children:[(0,i.jsxs)(`div`,{className:`mb-10`,children:[(0,i.jsxs)(`h2`,{className:`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight`,children:[`Results for:`,` `,(0,i.jsxs)(`span`,{className:`text-lime-400 break-words`,children:[`"`,a,`"`]})]}),(0,i.jsxs)(`p`,{className:`mt-3 text-sm sm:text-base text-white/50`,children:[o.length,` product`,o.length!==1&&`s`,` found`]})]}),o.length>0?(0,i.jsx)(`div`,{className:`\r
          grid\r
          grid-cols-1\r
          sm:grid-cols2\r
          md:grid-cols-3\r
          lg:grid-cols-4\r
          xl:grid-cols-5\r
          gap-4\r
          sm:gap-6\r
        `,children:o.map(e=>(0,i.jsx)(r,{product:e},e.id))}):(0,i.jsx)(`div`,{className:`text-center py-24`,children:(0,i.jsx)(`p`,{className:`text-white/40 text-lg sm:text-xl`,children:`No products found matching your search.`})})]})}export{a as default};
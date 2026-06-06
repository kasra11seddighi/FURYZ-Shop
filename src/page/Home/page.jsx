import Hero from "../../features/Hero/Hero";
import Categories from "../../features/Categories/Categories";
import NewArrivalsSection from "../../features/NewArrivals/NewArrivalsSection";
import FlashDealsBar from "../../features/flashDeals/components/FlashDealsBar";
import ValuePropositions from "../../features/ValuePropositions/ValuePropositions";
import { flashDealsData } from "../../data/flashDealsData";
import TopBrands from "../../features/Brands/TopBrands";
export default function Home() {
  return (
    <>
      <Hero />
      <main className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <Categories max={4}/>
          <NewArrivalsSection className="space-y-10"/>
           <FlashDealsBar data={flashDealsData} />
             <ValuePropositions />
          <TopBrands max={5}/>        
        </div>
      </main>
    </>
  );
}

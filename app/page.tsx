import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Catalogue de véhicule</h1>
          <p>Explorez et découvrez les véhicules de vos besoins.</p>
          <div className="image__overlay"></div>
          <div className="home__filters">
            <SearchBar/>
            
            <div className="home__filter-container">
              <CustomFilter/>
              <CustomFilter/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

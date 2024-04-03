import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utilities";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
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

          {!isDataEmpty ? (
            <section>
              {allCars.map((car) => (
                <CarCard car={car} key={car.id}/>
              ))}
            </section>
          ): (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">oh oh, aucun resultat</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

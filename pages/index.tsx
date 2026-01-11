import Image from "next/image";
import { HERO_BACKGROUND, FILTER_LABELS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { useState } from "react";

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={HERO_BACKGROUND}
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="p-6 flex gap-3 overflow-x-auto no-scrollbar">
        {FILTER_LABELS.map((label) => (
          <Pill
            key={label}
            label={label}
            active={activeFilter === label}
            onClick={() => setActiveFilter(label)}
          />
        ))}
      </section>

      {/* LISTING SECTION */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} data={property} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;

"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        <p className="flex mt-6 text-[32px]">
            <span className="self-start text-[18px] font-semibold">
                20$
            </span>
        </p>
    </div>
  )
}

export default CarCard
"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CarDetails, CustomButton } from ".";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group mt-3 ">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>

        <p className="flex mt-6 text-[32px]">
            <span className="self-start text-[14px] font-semibold">
                $
            </span>
            20
            <span className="self-end text-[14px] font-medium">
                /day
            </span>
        </p>

        <div className="relative w-full h-40 my-3">
            <Image src="/hero.png"alt="model de voiture" className="object-contain" fill priority/>
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="volant" />
                    <p className="text[14px] ml-4">
                        {transmission === 'a' ? 'automactique' : 'manuelle'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/tire.svg" width={20} height={20} alt="pneu" />
                    <p className="text[14px] ml-4">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.svg" width={20} height={20} alt="consommation" />
                    <p className="text[14px] ml-4">
                        {Number(city_mpg*1.5).toFixed(0)} K/G
                    </p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <CustomButton
                    title="Voir Plus"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    alternative="Icone Voir plus"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}/>
            </div>
        </div>

        <CarDetails 
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            car={car}
        />
    </div>
  )
}

export default CarCard
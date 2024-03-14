"use client"
import { SearchManufaturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image  from 'next/image'

const SearchManufaturer = ({ manufacturer, setManufacturer }: SearchManufaturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[12px]">
                    <Image
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className="ml-4"
                        alt="car logo" />
                </Combobox.Button>

                <Combobox.Input
                  className="search-manufactuerer__input"
                  placeholder='volkswagen'
                  displayValue={(manufacturer: string) =>
                    manufacturer}
                  onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufaturer
import { SearchManufaturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'

const SearchManufaturer = ({ manufacturer, setManufacturer }: SearchManufaturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className="relative w-full">
                
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufaturer
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { Category } from "@/types"
import CategoriesStore from '@/store/categoriesStore'
import { getCategories } from "@/services/categories"

export default function CategoriesList() {
  const isHome = location.href.split('/').pop() === ''
  const navigate = useNavigate()
  const { selected, setSelected } = CategoriesStore()
  const [categories, setCategories] = useState<Category[] |[]>([])

  useEffect(()=>{
    const result = getCategories()
    if(result) setCategories(result)
  }, [])

  const handleSelectedCategory = (name: string) => {
    if (name === selected) {
      setSelected(null)
    }
    else setSelected(name)
    if(isHome) navigate('/recipes/categories')
  }

  return (
    <div className="w-full justify-center items-center flex pt-8 overflow-scroll lg:overflow-auto">
      <div className="w-full justify-center items-start flex flex-row flex-wrap">
        {
          categories?.length > 0 && categories.map(({ name, id, image }) => (
            <button 
              onClick={() => handleSelectedCategory(name)}
              className="min-h-[173px] flex flex-col items-center px-[7px]" 
              key={id}
            >
              <div className={image} style={selected === id ? {opacity: '0.6'} : {opacity: '1'}} />
              <span className="max-w-[125px] text-[#5A5858] text-[22px] font-['Lato'] font-semibold leading-8 text-wrap text-center">
                {name ? name : 'Todas'}
              </span>
            </button>
          ))
        }
      </div>
    </div>
  )
}

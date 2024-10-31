/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react"
import Ingredientbutton from "./Ingredientbutton"
import Recipes from "./Recipes";
import { getIngredients } from "@/services/ingredients"
import { Recipe } from "@/types"
import recipesStore from "@/store/recipesStore"
import { getUserRecipes } from "@/services/recipes";

export default function Personalized() {
  const { recipesGlobal, setRecipes } = recipesStore()
  // todos los ingredientes
  const [allIngredients, setAllIngredients] = useState<string[] | []>([])
  // estado para búsqueda de ingredientes
  const [searchIngredient, setSearchIngredients] = useState<string>('')
  // lista para autocompletado
  const [selectedList, setSelectedList] = useState<string[] | []>([])
  // lista de ingredientes para botones de sugeridos
  const [suggestedList, setSuggestedList] = useState<string[] | []>([])
  // lista de ingredientes para busqueda
  const [ingredientsList, setIngredientsList] = useState<string[] | []>([])
  // estado para todas las recetas
  const [foundRecipes, setFoundRecipes] = useState<Recipe[] | []>([])
  const [notFound, setNotfound] = useState<boolean>(false)

  useEffect(() => {
    console.log(notFound)
  }, [notFound])
  

  useEffect(() => {
    const ingredients = getIngredients()
    if (ingredients) {
      setAllIngredients(ingredients)
      if (ingredients.length > 8) {
        const elementosAleatorios = ingredients
          .sort(() => Math.random() - 0.5)
          .slice(0, 8)
        setSuggestedList(elementosAleatorios)
      }
      else setSuggestedList(ingredients)
    }

    if (recipesGlobal?.length === 0) {
      const result = getUserRecipes()
      if (result && result.recipes) {
        setRecipes(result.recipes)
      }
    }
  }, [])

  useEffect(() => {
    const $list = document.getElementById('addIngredient')
    $list?.classList.remove('hidden')
    $list?.classList.add('flex')
    if (searchIngredient.length > 0) {
      const filteredIngredients = allIngredients.filter(ingredient => ingredient.includes(searchIngredient) || ingredient === searchIngredient)

      setSelectedList(filteredIngredients)
    }
  }, [searchIngredient])

  const nandleSearchIngredient = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchIngredients(event.target.value)
  }

  const handleItemListClick = (name: string) => {
    const $list = document.getElementById('addIngredient')
    $list?.classList.remove('flex')
    $list?.classList.add('hidden')
    if (name && name.length > 3) {
      if (ingredientsList && ingredientsList.length > 0) {
        if (ingredientsList.find(ingredient => ingredient === name)) return
      }
    }
    setIngredientsList([...ingredientsList, name])
    setSearchIngredients('')
  }

  const handleRemoveIngredient = (name: string) => {
    const filteredIngredients = ingredientsList.filter(ingredient => ingredient !== name)
    setIngredientsList(filteredIngredients)
  }

  const handleSearchButton = () => {
    if (ingredientsList?.length === 0) return
    const recipesFiltered = recipesGlobal.filter(recipe => {

      for (const ingredient of ingredientsList) {
        if (recipe.ingredients?.find(element => element.name === ingredient)) {
          return true
        }
      }
      return false
    })
    if (recipesFiltered && recipesFiltered.length > 0) {
      setFoundRecipes(recipesFiltered)
      setNotfound(false)
    }
    else setNotfound(true)
  }

  return (
    <div className="w-screen bg-[#eeeeee] px-20 py-14">
      <h1 className="text-[#595858] text-5xl font-extrabold font-['Lato'] leading-[56px]">
        Te ayudamos a cocinar
      </h1>

      <div className="w-full flex justify-between" >
        <div className="h-[394px] flex flex-col justify-between relative">
          {/* input para busqueda de ingrediente */}
          <input
            list='addIngredient'
            className="h-[50px] w-[750px] flex text-gray-400 text-base font-normal font-['Inter'] leading-normal outline-none bg-white rounded-md border border-[#dfe4ea] px-4 items-center"
            placeholder="Ingresa un ingrediente"
            onChange={nandleSearchIngredient}
            value={searchIngredient}
          />
          <ul
            id="addIngredient"
            className="hidden flex-col absolute top-[51px] left-0 overflow-auto z-10"
          >
            {
              searchIngredient.length > 0 ? (
                <li
                  onClick={() => handleItemListClick(searchIngredient)}
                  key={searchIngredient}
                  className="h-[50px] w-[720px] flex text-gray-400 text-base font-normal font-['Inter'] leading-normal outline-none bg-white rounded-md border border-[#dfe4ea] px-4 items-center"
                >
                  {searchIngredient}
                </li>
              ) : null
            }
            {
              selectedList?.map(ingredient => (
                <li
                  onClick={() => handleItemListClick(ingredient)}
                  key={ingredient}
                  className="h-[50px] w-[720px] flex text-gray-400 text-base font-normal font-['Inter'] leading-normal outline-none bg-white rounded-md border border-[#dfe4ea] px-4 items-center"
                >
                  {ingredient}
                </li>
              ))
            }
          </ul>

          <div className="w-[720px] h-[108px] rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="w-[113px] h-[69px] px-2 py-4 rounded-md border border-black justify-center items-center gap-2 flex">
              <div className="text-center text-black text-base font-normal font-['Lato'] leading-normal tracking-wide">Ingredientes<br />sugeridos</div>
            </div>
            <div
              className="h-[108px] px-5 py-4 justify-center items-start gap-2 flex flex-wrap overflow-auto scrollbar-hide"
            >
              {
                suggestedList?.map(ingredient => (
                  <Ingredientbutton
                    key={ingredient}
                    id={ingredient}
                    name={ingredient}
                    handleItemListClick={handleItemListClick}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <div className="w-[396px] h-[394px] rounded-lg flex-col justify-between items-center inline-flex bg-white py-4">
          <div className="w-full p-2  justify-center items-start gap-2 flex flex-wrap">
            {
              ingredientsList?.length > 0 && ingredientsList.map(ingredient => (
                <Ingredientbutton
                  id={ingredient}
                  name={ingredient}
                  handleRemoveIngredient={handleRemoveIngredient}
                  key={ingredient}
                />
              ))
            }
          </div>
          <button
            className="w-[184px] h-[50px] px-[18px] py-[13px] bg-[#dedddd] rounded-lg justify-center items-end gap-2.5 flex"
            onClick={handleSearchButton}
          >
            <span className="text-black text-base font-bold font-['Lato'] leading-normal tracking-wide">Buscar</span>
          </button>
        </div>
      </div>
      {
        foundRecipes?.length > 0 && !notFound &&
        <Recipes recipes={foundRecipes} />
      }
      {
        notFound && <span>No se a encontrado receta con lo pedido</span>
      }
    </div>
  )
}

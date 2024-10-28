import { useEffect, useState } from "react"
import Ingredientbutton from "./Ingredientbutton"
import { useToast } from "@/hooks/use-toast"
import { getIngredients } from "@/services/ingredients"

export default function Personalized() {
  const { toast } = useToast()

  const [selectedList, setSelectedList] = useState<string[] | []>([])
  const [suggestedList, setSuggestedList] = useState<string[] | []>([])

  useEffect(() => {
    const ingredients = getIngredients()
    if (ingredients) setSuggestedList(ingredients)
  }, [])

  const handleListClick = () => {
    const $list = document.getElementById('addIngredient')
    $list?.classList.remove('hidden')
    $list?.classList.add('flex')
  }

  const handleItemListClick = (name: string) => {
    const $list = document.getElementById('addIngredient')
    $list?.classList.remove('flex')
    $list?.classList.add('hidden')
    const ingredientFound = selectedList.find(ingredient => ingredient === name)
    if (ingredientFound) return
    const addIngredient = suggestedList.find(ingredient => ingredient === name)
    if (addIngredient) {
      setSelectedList([...selectedList, addIngredient])
      const filteredIngredients = suggestedList.filter(ingredient => ingredient !== name)
      setSuggestedList(filteredIngredients)
    }
  }

  const handleRemoveIngredient = (name: string) => {
    const addIngredient = selectedList.find(ingredient => ingredient === name)
    if (addIngredient) {
      setSuggestedList([...suggestedList, addIngredient])
      const filteredIngredients = selectedList.filter(ingredient => ingredient !== name)
      setSelectedList(filteredIngredients)
    }
  }

  const handleSearchButton = () => {
    if (selectedList?.length === 0) return
    else {
      let description = ''
      for (const ingredient of selectedList) {
        description += ` ${ingredient}`
      }
      toast({
        title: 'Ingredients',
        description
      })
    }
  }

  return (
    <div className="w-screen bg-[#eeeeee] px-20 py-14">
      <h1 className="text-[#595858] text-5xl font-extrabold font-['Lato'] leading-[56px]">
        Te ayudamos a cocinar
      </h1>

      <div className="w-full flex justify-between" >
        <div className="h-[394px] flex flex-col justify-between relative">
          <input
            list='addIngredient'
            className="h-[50px] w-[750px] flex text-gray-400 text-base font-normal font-['Inter'] leading-normal outline-none bg-white rounded-md border border-[#dfe4ea] px-4 items-center"
            placeholder="Ingresa un ingrediente"
            onClick={handleListClick}
          />
          <ul
            id="addIngredient"
            className="hidden flex-col absolute top-[51px] left-0 overflow-auto z-10"
          >
            {
              suggestedList?.map(ingredient => (
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
              selectedList?.length > 0 && selectedList.map(ingredient => (
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
    </div>
  )
}

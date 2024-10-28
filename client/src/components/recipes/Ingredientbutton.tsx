type Props = {
  id: string,
  name: string,
  handleItemListClick?: undefined | ((id: string) => void),
  handleRemoveIngredient?: undefined | ((id: string) => void)
}

export default function Ingredientbutton({ id, name, handleItemListClick, handleRemoveIngredient }: Props) {
  return (
    <button
      key={id}
      onClick={() => handleItemListClick && handleItemListClick(id)}
      className="px-3.5 py-[5px] bg-[#3758f9]/10 rounded-md border-2 border-[#3758f9]/30 justify-start items-center gap-2 flex relative"
    >
      {
        handleRemoveIngredient &&
        <button
          className="text-destructive text-sm -top-4 -right-1 hover:text-lg hover:-top-5 hover:font-semibold absolute"
          onClick={() => handleRemoveIngredient(id)}
        >
          x
        </button>
      }
      <span className="text-[#111928] text-base font-normal font-['Lato'] leading-normal tracking-wide">{name}</span>
    </button>
  )
}

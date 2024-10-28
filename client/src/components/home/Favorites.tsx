
const favorites = [
  {
    id: 1,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-1.png'
  },
  {
    id: 2,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-2.png'
  },
  {
    id: 3,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-3.png'
  },
  {
    id: 4,
    name: 'Receta',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    image: '/assets/favorite-4.png'
  }
]

export default function Favorites() {
  return (
    <div className="flex mx-auto w-screen overflow-scroll lg:overflow-auto">
      <div className="flex flex-col mx-auto overflow-scroll lg:overflow-auto">
        <span className="font-semibold text-[32px] leading-[56px] text-[#2c2c2c]">Nuestras recetas favoritas</span>
        <div className="flex">
          {
            favorites?.map(({ id, name, description, image }) => (
              <div className="h-[523px] w-[300px] flex flex-col justify-center items-center gap-2" key={id}>
                <img className="size-[260px] rounded-full" src={image} />
                <div className="w-[290px] flex flex-col items-center gap-7 px-[35px] py-[30px]">
                  <div className="flex flex-col gap-[15px]">
                    <span className="font-semibold text-[22px] leading-[32px] text-center text-[#4d4d4d]">
                      {name}
                    </span>
                    <span className="font-normal text-base text-center text-[#637381]">
                      {description}
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

import RecipeCard from "../recipes/RecipeCard"

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
    <div className="flex self-center mx-10 lg:mx-40">
      <div className="flex flex-col">
        <h3 className="hidden lg:block font-semibold text-4xl text-head_text">Nuestras recetas favoritas</h3>
        <div className="flex flex-wrap justify-evenly gap-1">
          {favorites?.map(({ id, name, description, image }) => (
            <RecipeCard key={id} title={name} description={description} image={image} />
          ))}
        </div>
      </div>
    </div>
  )
}

import Categories from "@/components/recipes/Categories";
import Banner from "./Banner";

export default function HomeMain() {

  return (
    <div className='flex flex-col gap-8'>
      <Banner />
      <Categories />
    </div>
  )
}

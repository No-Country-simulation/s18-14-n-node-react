import Banner from "./Banner";
import CategoriesList from "../recipes/CategoriesList";
import BigCard from "./BigCard";
import Favorites from "./Favorites";

export default function HomeMain() {

  return (
    <div className="flex flex-col gap-10 pb-8 bg-background">
      <Banner />
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
        <CategoriesList />
        <BigCard />
        <Favorites />
      </div>
    </div>
  )
}

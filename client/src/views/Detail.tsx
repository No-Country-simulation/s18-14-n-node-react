import { IRecetData } from "@/models/recet";
import { data as recetData } from "@/data/recet"
import { useEffect, useState } from "react";
import { BookmarkBtn, Ingredients, NutritionalData, Stars, Stats, Steps } from "@/components/detail";



function Detail() {
  const [data, setData] = useState<IRecetData>(recetData);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setData(recetData);
  }, [])

  return (
    <div className="flex flex-col pb-20 lg:pb-28">
      <div className="grid grid-cols-[minmax(100px,400px)_minmax(100px,_800px)] lg:grid-cols-[minmax(100px,600px)_minmax(100px,_800px)] gap-6">
        <div className="h-[280px] lg:h-[417px]">
          <img src={data.media} alt="media" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[800px] flex flex-col gap-5 lg:gap-10 justify-end me-6">
          <div className="w-full flex justify-between gap-6">
            <h1 className="text-2xl font-extrabold w-min grow text-head_text lg:text-6xl truncate">{data.title}</h1>
            <BookmarkBtn bookmarked={bookmarked} setBookmarked={setBookmarked} />
          </div>
          <p className="text-sm lg:text-md text-subtitle_text">{data.description}</p>
          <Stars rating={data.rating} />
          <Stats stats={data.stats}/>
        </div>
      </div>

      <section className="mt-14 mb-10 lg:mt-20 mx-[104px] flex flex-col-reverse gap-6 lg:grid lg:grid-cols-2 lg:gap-10">
        <Ingredients ingredients={data.ingredients}/>
        <NutritionalData nutritionalData={data.nutritionalData}/>
      </section>

      <section className="mx-10 lg:mx-[104px]">
        <Steps steps={data.steps}/>
      </section>
    </div>
  )
}

export default Detail;

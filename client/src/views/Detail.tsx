import { Check, media } from "@/assets";
import { BotonPrimary } from "@/components/Botones/BotonPrimary";
import { IRecetData, INutrition, IStats } from "@/models/recet";
import { data as recetData } from "@/data/recet"
import { useState } from "react";
import Stars from "@/components/commons/Stars";



function Detail() {
  const [data, setData] = useState<IRecetData>(recetData);

  return (
    <div className="flex flex-col gap-28 box-content">
      <div className="text-[#595858] grid grid-cols-[minmax(100px,600px)_1fr] gap-6 bg-[#EEEEEE]">
        <div className="h-[500px]">
          <img src={media} alt="media" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-[800px] flex flex-col items-start justify-between">
          <div>
            <div className="w-full flex justify-between mt-16 mb-6">
              <h2 className="text-5xl font-extrabold w-min grow">{data.title}</h2>
              <Stars rating={data.rating} />
            </div>
            <p className="text-xl"> {data.description} </p>
          </div>
          <Stats stats={data.stats}/>
          <BotonPrimary textBtn="Lorem ipsum" className="bg-[#9E9696] text-white" action={() => {}} />
        </div>
      </div>

      <NutritionalData nutritionalData={data.nutritionalData}/>

      <div className="mx-28">
        <Ingredients ingredients={data.ingredients}/> 
        <Steps steps={data.steps}/>
      </div>
    </div>
  )
}

export default Detail;



function NutritionalData({ nutritionalData }: { nutritionalData: INutrition[] }) {
  return (
    <div className="mt-28a bg-white rounded-[20px] p-8 text-center inline-block mx-auto">
      <h3 className="text-[#111928] text-[22px] font-semibold">Datos nutricionales</h3>
      <hr className="border-[#d9d9d9] border-[2px] my-4 mx-16"/>
      <div className="flex text-[#595858] text-xl">
        {nutritionalData.map((nutrition, i) => (
          <div key={i} className="text-center px-8">
            <h5>{nutrition.value}</h5>
            <p>{nutrition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Ingredients({ ingredients }: { ingredients: string[] }) {
  return (
    <div>
      <h3 className="text-[#595858] text-[32px] font-extrabold mb-9">Ingredientes</h3>
      <div>
        <ul className="inline-grid grid-cols-2 gap-y-3 gap-x-40">
          {ingredients.map((ingredient, i) => (
            <li key={i} className="flex gap-2.5">
              <img src={Check} width={38} height={38} alt="check" />
              <span className="text-2xl text-[#637381]">
                {ingredient}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <div className="mt-16">
      <h3 className="text-[#595858] text-[32px] font-extrabold mb-8">Preparacion</h3>
      {steps.map((step, i) => (
        <div key={i} className="mb-6 max-w-[1000px]">
          <h4 className="text-[#637381] text-3xl font-bold">Paso {i + 1}</h4>
          <p className="text-[#637381] text-xl">{step}</p>
        </div>
      ))}
    </div>
  );
}

function Stats({ stats }: { stats: IStats[]}) {
  return (
    <div className="flex">
      {stats.map((stat, index) => (
        <div key={index} className="border-e-[1px] border-black last:border-0 text-center px-5 first:ps-0 last:pe-0">
          <h5 className="text-[40px] leading-[40px]">{stat.value}</h5>
          <p className="text-xl">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}

export function Steps({ steps }: { steps: string[] }) {
  return (
    <div>
      <h3 className="text-head_text text-2xl lg:text-4xl font-extrabold mb-9">Preparación</h3>
      {steps.map((step, i) => (
        <div key={i} className="mb-6 max-w-[1000px]">
          <h4 className="text-body_text text-xl lg:text-3xl font-bold mb-2.5">Paso {i + 1}</h4>
          <p className="text-body_text text-sm lg:text-md">{step}</p>
        </div>
      ))}
    </div>
  );
}

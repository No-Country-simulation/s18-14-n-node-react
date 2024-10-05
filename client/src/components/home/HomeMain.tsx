import bearStore from '@/store/bearsStore'
import { Button } from '@/components/ui/button'

export default function HomeMain() {

  const { count, inc } = bearStore()

  return (
    <div className='flex flex-col gap-8'>
      Home Main componente
      <div className="flex flex-row items-center gap-5">
        <Button
          onClick={() => inc()}
        >
          Agregar oso
        </Button>
        <span className='text-primary border-2 rounded-md p-2'>{count}</span>
      </div>
    </div>
  )
}

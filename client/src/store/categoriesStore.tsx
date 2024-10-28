import { create } from 'zustand'

type Store = {
  selected: string | null
  setSelected: (newSelected: string | null) => void
}

const useStore = create<Store>()((set) => ({
  selected: null,
  setSelected: (newSelected) => set({ selected: newSelected }),
}))

export default useStore

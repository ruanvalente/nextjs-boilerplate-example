import { create } from 'zustand'

type State = {
  troubleticket: {
    name: string
  }
}

type Action = {
  createTroubleticket: (troubleticket: State['troubleticket']) => void
}

export const troubleticketStorage = create<State & Action>((set) => ({
  troubleticket: {
    name: '',
  },
  createTroubleticket: (payload) =>
    set((prevState) => ({
      ...prevState.troubleticket,
      troubleticket: payload,
    })),
}))

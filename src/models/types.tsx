import { create } from 'zustand'

 type TUser = {
    username: string
}
 type TUserStore = {
    user: TUser | null
    setUser: (data: TUser | null) => void
}

export const useUserStore = create<TUserStore>((set) => ({
    user: {username: 'kurmis'},
    setUser: (data) => set({ user: data }),
}))
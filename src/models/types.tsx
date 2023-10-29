import {create} from 'zustand'

// type TUser = {
//     username: string
// }
type TUserStore = {
    // user: TUser | null
    // setUser: (data: TUser | null) => void,
    isAboutInView: boolean | null,
    setIsAboutInView: (data: boolean | null) => void,
    isProjectsInView: boolean | null,
    setIsProjectsInView: (data: boolean | null) => void,
    isContactsInView: boolean | null,
    setIsContactsInView: (data: boolean | null) => void,
}

export const useUserStore = create<TUserStore>((set) => ({
    // user: {username: 'kurmis'},
    // setUser: (data) => set({user: data}),
    isAboutInView: false,
    setIsAboutInView: (data) => set({isAboutInView: data}),
    isProjectsInView: false,
    setIsProjectsInView: (data) => set({isProjectsInView: data}),
    isContactsInView: false,
    setIsContactsInView: (data) => set({isContactsInView: data})
}))
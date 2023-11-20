import {create} from 'zustand'
import {TUserStore} from "./types.tsx";


export const useUserStore = create<TUserStore>((set) => ({
    isHomeInView: false,
    setIsHomeInView: (data) => set({isHomeInView: data}),
    isAboutInView: false,
    setIsAboutInView: (data) => set({isAboutInView: data}),
    isSkillsInView: false,
    setIsSkillsInView: (data) => set({isSkillsInView: data}),
    isEducationInView: false,
    setIsEducationInView: (data) => set({isEducationInView: data}),
    isProjectsInView: false,
    setIsProjectsInView: (data) => set({isProjectsInView: data}),
    isContactsInView: false,
    setIsContactsInView: (data) => set({isContactsInView: data})
}))
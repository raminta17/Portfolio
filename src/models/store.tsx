import {create} from 'zustand'

type TUserStore = {
    isAboutInView: boolean | null,
    setIsAboutInView: (data: boolean | null) => void,
    isSkillsInView: boolean | null,
    setIsSkillsInView: (data: boolean | null) => void,
    isProjectsInView: boolean | null,
    setIsProjectsInView: (data: boolean | null) => void,
    isContactsInView: boolean | null,
    setIsContactsInView: (data: boolean | null) => void,
}

export const useUserStore = create<TUserStore>((set) => ({
    isAboutInView: false,
    setIsAboutInView: (data) => set({isAboutInView: data}),
    isSkillsInView: false,
    setIsSkillsInView: (data) => set({isSkillsInView: data}),
    isProjectsInView: false,
    setIsProjectsInView: (data) => set({isProjectsInView: data}),
    isContactsInView: false,
    setIsContactsInView: (data) => set({isContactsInView: data})
}))
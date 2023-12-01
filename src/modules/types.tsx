import React, { Dispatch, SetStateAction } from 'react'

export type TUserStore = {
	isHomeInView: boolean | null
	setIsHomeInView: (data: boolean | null) => void
	isAboutInView: boolean | null
	setIsAboutInView: (data: boolean | null) => void
	isSkillsInView: boolean | null
	setIsSkillsInView: (data: boolean | null) => void
	isEducationInView: boolean | null
	setIsEducationInView: (data: boolean | null) => void
	isProjectsInView: boolean | null
	setIsProjectsInView: (data: boolean | null) => void
	isContactsInView: boolean | null
	setIsContactsInView: (data: boolean | null) => void
}

export type TSetBoolean = {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}

export type Inputs = {
	senderEmail: string
	message: string
}

export type ProjectType = {
	title: string
	techUsed: TechType[]
	images: string[]
	projectInfo: string[]
	frontEnd: string
	backEnd: string | null
	try: TechType | null
}
export type TechType = {
	title: string
	link: string
}
export type CompProjectType = {
	project: ProjectType
}
export type ShowModalType = {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

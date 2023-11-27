import SingleProject from './SingleProject.tsx'
import { useInView } from 'react-intersection-observer'
import { useUserStore } from '../modules/store.tsx'
import { useEffect } from 'react'
import { ProjectType } from '../modules/types.tsx'
import { projects } from '../modules/data.tsx'
const Projects = () => {
	const { ref: projectsRef, inView: isProjectsInView } = useInView({
		threshold: 0.1,
	})
	const {
		setIsHomeInView,
		setIsAboutInView,
		setIsSkillsInView,
		setIsEducationInView,
		setIsProjectsInView,
		setIsContactsInView,
	} = useUserStore((state) => ({
		setIsHomeInView: state.setIsHomeInView,
		setIsProjectsInView: state.setIsProjectsInView,
		setIsSkillsInView: state.setIsSkillsInView,
		setIsEducationInView: state.setIsEducationInView,
		setIsContactsInView: state.setIsContactsInView,
		setIsAboutInView: state.setIsAboutInView,
	}))

	useEffect(() => {
		if (isProjectsInView) {
			setIsProjectsInView(true)
			setIsContactsInView(false)
			setIsAboutInView(false)
			setIsSkillsInView(false)
			setIsEducationInView(false)
			setIsHomeInView(false)
		}
	}, [isProjectsInView])

	return (
		<div id='Projects' className='projects py-5 overflow-hidden'>
			<div
				className='content mx-auto p-3 d-flex flex-column gap-5'
				ref={projectsRef}
			>
				<h2 id='firstProject' className='bottomBorder pb-3'>
					PROJECTS
				</h2>
				{projects.map((project: ProjectType, index: number) => (
					<SingleProject key={index} project={project} />
				))}
			</div>
		</div>
	)
}

export default Projects

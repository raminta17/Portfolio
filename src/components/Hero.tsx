import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useUserStore } from '../modules/store.tsx'
import { ShowModalType } from '../modules/types.tsx'

const Header = ({ setShowModal }: ShowModalType) => {
	const [showArrow, setShowArrow] = useState(true)
	const { ref: homeRef, inView: isHomeInView } = useInView({ threshold: 0.5 })
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
		if (isHomeInView) {
			setIsProjectsInView(false)
			setIsContactsInView(false)
			setIsSkillsInView(false)
			setIsEducationInView(false)
			setIsAboutInView(false)
			setIsHomeInView(true)
		}
	}, [isHomeInView])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 10) {
				setShowArrow(false)
			} else {
				setShowArrow(true)
			}
		})
	}, [])

	return (
		<div
			id='Home'
			className='parallaxBg header centered text-center flex-column gap-5'
			ref={homeRef}
		>
			<div className='d-flex justify-content-center align-items-center flex-column gap-2'>
				<div className='heading1'>Hi there, I'm Raminta</div>
				<div className='heading2'>Full Stack Developer</div>
				<div className='heading5'>Welcome to my Portfolio</div>
				<motion.div
					onClick={() => setShowModal(true)}
					className='getInTouchBtn d-flex align-items-center justify-content-center'
					whileHover={{ scale: 1.1 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					GET IN TOUCH
				</motion.div>
			</div>
			{showArrow && (
				<svg className='arrows'>
					<path className='a1' d='M0 0 L30 32 L60 0'></path>
					<path className='a2' d='M0 20 L30 52 L60 20'></path>
					<path className='a3' d='M0 40 L30 72 L60 40'></path>
				</svg>
			)}
		</div>
	)
}

export default Header

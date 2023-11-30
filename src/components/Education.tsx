import certificate from '../assets/education/TypeScriptCertificate-1.png'
import valuation from '../assets/education/TypeScriptValuation-1.png'
import { ArrowDown, PlusCircle, XLg } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { useUserStore } from '../modules/store.tsx'
import { motion } from 'framer-motion'

const Education = () => {
	const educationPdf = [certificate, valuation]
	const [showModal, setShowModal] = useState(false)
	const [imageIndex, setImageIndex] = useState(0)
	const [styleAbout, setStyleAbout] = useState({})
	const { ref, inView } = useInView({ threshold: 0.5 })
	const { ref: textRef, inView: isTextInView } = useInView({
		triggerOnce: true,
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
		if (inView) {
			setIsProjectsInView(false)
			setIsContactsInView(false)
			setIsSkillsInView(false)
			setIsEducationInView(true)
			setIsAboutInView(false)
			setIsHomeInView(false)
		}
	}, [inView])

	useEffect(() => {
		setStyleAbout({
			transform: isTextInView ? 'none' : 'translateX(200px)',
			opacity: isTextInView ? 1 : 0,
			transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
		})
	}, [isTextInView])

	const handleCloseModal = () => {
		setShowModal(false)
		setImageIndex(0)
	}
	const handleShowModal = () => {
		setShowModal(true)
	}

	function changeImageIndex(direction: string) {
		if (direction === 'left') {
			imageIndex === 0
				? setImageIndex(educationPdf.length - 1)
				: setImageIndex(imageIndex - 1)
			return
		}
		imageIndex === educationPdf.length - 1
			? setImageIndex(0)
			: setImageIndex(imageIndex + 1)
	}

	return (
		<div id='Education' className='py-5 d-flex flex-column overflow-hidden'>
			<div className='content mx-auto p-3 d-flex flex-column gap-5' ref={ref}>
				<h2 className='bottomBorder pb-3'>EDUCATION</h2>
				<div className='d-flex md-column gap-3 justify-content-between'>
					<h4>TYPESCRIPT (full stack) with CodeAcademy 1060 hours</h4>

					<div className='d-flex gap-3'>
						<b>GRADES: </b>
						<span>Theory 10</span>
						<span>Practice 10</span>
					</div>
				</div>
				<div
					className='d-flex gap-5 md-column'
					ref={textRef}
					style={styleAbout}
				>
					<div className='f1 d-flex flex-column gap-3 md-align-center'>
						<div>
							I successfully completed a six-month, full-time course at Code
							Academy to further my career journey and it has been incredibly
							fulfilling. Throughout the course, I've developed numerous
							individual front-end and full-stack applications from inception to
							completion using Javascript, React, Typescript and Node.js.
						</div>
						<div>
							One of the highlights of this course was being a part of a small,
							high-achieving group to collaborate on creating an admin page for
							our lecturer's upcoming project, scheduled for release early next
							year. This experience not only honed my teamwork and
							problem-solving skills but also allowed me to contribute to a
							real-world project with tangible impact.
						</div>
						<a href='#firstProject'>
							<motion.div
								className='getInTouchBtn text-center fw-light'
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								Final exam project
								<ArrowDown className='ps-1' />
							</motion.div>
						</a>
					</div>
					<div className='f1 projectImages'>
						<div className='mainImage'>
							<img src={educationPdf[0]} />
						</div>
						<div onClick={handleShowModal} className='plus'>
							<h2 className='m-0 d-flex align-items-center gap-2'>
								ZOOM IN <PlusCircle />
							</h2>
						</div>
					</div>
					<Modal
						className='modalProjectImages'
						show={showModal}
						style={{
							display: 'flex',
							alignItems: 'center',
							background:
								'linear-gradient(184deg, rgba(0,0,0,0.6251750700280112) 100%, rgba(82,78,94,0.9389005602240896) 100%)',
						}}
						onHide={handleCloseModal}
					>
						<div className='d-flex'>
							<div onClick={() => changeImageIndex('left')} className='arrow'>
								<i className='fa-solid fa-chevron-left'></i>
							</div>
							<div className='imageModal d-flex flex-column gap-2'>
								<img src={educationPdf[imageIndex]} />
							</div>
							<div onClick={() => changeImageIndex('right')} className='arrow'>
								<i className='fa-solid fa-chevron-right'></i>
							</div>
						</div>
						<XLg onClick={() => handleCloseModal()} className='close' />
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default Education

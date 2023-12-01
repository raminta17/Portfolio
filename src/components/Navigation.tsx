import { useEffect, useRef, useState } from 'react'
import { useUserStore } from '../modules/store.tsx'

const Navigation = () => {
	const [navClassNames, setNavClassNames] = useState('nav')
	const [fixed, setFixed] = useState('')
	const navRef = useRef<HTMLElement | null>(null)
	const {
		isHomeInView,
		isAboutInView,
		isSkillsInView,
		isEducationInView,
		isProjectsInView,
		isContactsInView,
	} = useUserStore((state) => ({
		isAboutInView: state.isAboutInView,
		isHomeInView: state.isHomeInView,
		isSkillsInView: state.isSkillsInView,
		isEducationInView: state.isEducationInView,
		isProjectsInView: state.isProjectsInView,
		isContactsInView: state.isContactsInView,
	}))

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				setFixed('fixed')
			} else {
				setFixed('')
			}
		})
	}, [])
	function handleResponsiveMenu() {
		if (navClassNames === 'nav') {
			setNavClassNames('nav responsive')
		} else {
			setNavClassNames('nav')
		}
	}

	return (
		<nav
			className={`align-items-center nav sm-column ${navClassNames}`}
			ref={navRef}
			id={fixed}
		>
			<div className='burgerMenu p-3' onClick={handleResponsiveMenu}>
				<i className='fa-solid fa-bars'></i>
			</div>
			<div
				className='navDiv text-center'
				onClick={() => setNavClassNames('nav')}
			>
				<a
					onClick={() => window.scroll({ behavior: 'smooth' })}
					className={isHomeInView ? 'largeNavText' : 'smallNavText'}
					href='#Home'
				>
					Home
				</a>
				<hr />
			</div>
			<div
				className='navDiv text-center'
				onClick={() => setNavClassNames('nav')}
			>
				<a
					className={isAboutInView ? 'largeNavText' : 'smallNavText'}
					href='#About'
				>
					About
				</a>
				<hr />
			</div>
			<div
				className='navDiv text-center'
				onClick={() => setNavClassNames('nav')}
			>
				<a
					className={isSkillsInView ? 'largeNavText' : 'smallNavText'}
					href='#Skills'
				>
					Skills
				</a>
				<hr />
			</div>
			<div
				className='navDiv text-center'
				onClick={() => setNavClassNames('nav')}
			>
				<a
					className={isEducationInView ? 'largeNavText' : 'smallNavText'}
					href='#Education'
				>
					Education
				</a>
				<hr />
			</div>
			<div
				className='navDiv text-center'
				onClick={() => setNavClassNames('nav')}
			>
				<a
					className={isProjectsInView ? 'largeNavText' : 'smallNavText'}
					href='#Projects'
				>
					Projects
				</a>
				<hr />
			</div>
			<div
				className='navDiv text-center'
				onClick={() => setNavClassNames('nav')}
			>
				<a
					className={isContactsInView ? 'largeNavText' : 'smallNavText'}
					href='#Contacts'
				>
					Contacts
				</a>
				<hr />
			</div>
		</nav>
	)
}

export default Navigation

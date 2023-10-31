import {useEffect, useRef, useState} from "react";
import {useUserStore} from "../models/store.tsx";

const Navigation = () => {

    const [fixed, setFixed] = useState('');
    const navRef = useRef<any | null>(null);
    const {isAboutInView, isSkillsInView, isProjectsInView, isContactsInView} = useUserStore(state => ({
        isAboutInView: state.isAboutInView,
        isSkillsInView: state.isSkillsInView,
        isProjectsInView : state.isProjectsInView,
        isContactsInView: state.isContactsInView
    }));
    console.log('isSkillsInView in nav',isSkillsInView)
    useEffect(() => {
        const {offsetTop} = navRef.current;
        window.addEventListener('scroll', () => {
            if (window.scrollY > offsetTop) {
                setFixed('fixed');
            } else {
                setFixed('');
            }
        });
    }, []);

    return (
        <nav className="d-flex justify-content-center align-items-center nav sm-column" ref={navRef} id={fixed}>
            <div className="navDiv text-center">
                <a className={isAboutInView ? 'largeNavText' : 'smallNavText'} href="#About">ABOUT</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a className={isSkillsInView ? 'largeNavText' : 'smallNavText'} href="#Skills">SKILLS</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a className={isProjectsInView ? 'largeNavText' : 'smallNavText'} href="#Projects">PROJECTS</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a  className={isContactsInView ? 'largeNavText' : 'smallNavText'}  href="#Contacts">CONTACTS</a>
                <hr/>
            </div>

        </nav>
    );
};

export default Navigation;
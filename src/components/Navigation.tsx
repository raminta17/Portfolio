import {useEffect, useRef, useState} from "react";
import {useUserStore} from "../models/types.tsx";

const Navigation = () => {

    const [fixed, setFixed] = useState('');
    const navRef = useRef<any | null>(null);
    const {isAboutInView, isProjectsInView, isContactsInView} = useUserStore(state => ({
        isAboutInView: state.isAboutInView,
        isProjectsInView : state.isProjectsInView,
        isContactsInView: state.isContactsInView
    }));
    // console.log('about isInView', isAboutInView)
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
                <a className={isAboutInView ? 'largeNavText' : 'smallNavText'} href="#about">About</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a className={isProjectsInView ? 'largeNavText' : 'smallNavText'} href="#projects">Projects</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a  className={isContactsInView ? 'largeNavText' : 'smallNavText'}  href="#contacts">Contacts</a>
                <hr/>
            </div>

        </nav>
    );
};

export default Navigation;
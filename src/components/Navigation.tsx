import {useEffect, useRef, useState} from "react";

const Navigation = () => {

    const [fixed, setFixed] = useState('');
    const navRef = useRef<any | null>(null);

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
                <a href="#about">About</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a href="#projects">Projects</a>
                <hr/>
            </div>
            <div className="navDiv text-center">
                <a href="#contacts">Contacts</a>
                <hr/>
            </div>

        </nav>
    );
};

export default Navigation;
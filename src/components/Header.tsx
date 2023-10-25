import React from "react";

type ShowModalType = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({setShowModal}:ShowModalType) => {

    return (
        <div className="parallaxBg header centered text-center gap-5">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Hi there, I'm Raminta</h1>
                <h2>Full Stack Developer</h2>
                <h5>Welcome to my Portfolio</h5>
                <button onClick={() => setShowModal(true)} className="getInTouchBtn d-flex align-items-center gap-2 justify-content-center">GET IN TOUCH</button>
            </div>
            </div>
    );
};

export default Header;
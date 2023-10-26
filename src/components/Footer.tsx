import {Linkedin} from "react-bootstrap-icons";
import {Github} from "react-bootstrap-icons";
import profilePhoto from "../assets/Raminta_photo_square.jpg"

const Footer = () => {
    return (
        <div id="contacts" className="parallaxBg footer p-3 d-flex flex-column ">
            <div  className="content mx-auto p-3 d-flex flex-column gap-2">
                <h3 className="bottomBorder py-3">CONTACTS</h3>
                <div>
                    <div className="d-flex gap-4">
                        <div className="sm-d-none">
                            <img className="profileImg" src={profilePhoto} alt=""/>
                        </div>
                        <div>
                            <h4>Raminta Ališauskaitė</h4>
                            <div className="d-flex gap-2 align-items-center">
                                <Linkedin className="i"/>
                                <a className="m-0">www.linkedin.com/in/raminta-alisauskaite</a>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <Github className="i"/>
                                <a className="m-0">github.com/raminta17</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;
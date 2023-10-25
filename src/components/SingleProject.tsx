import {Modal} from "react-bootstrap";
import { useState} from "react";
import {PlusCircle} from "react-bootstrap-icons";

type ProjectType = {
    project: {
        title: string,
        techUsed: TechType[],
        images: string[],
        projectInfo: string[],
        frontEnd: string,
        backEnd: string | null
    }
}
type TechType = {
    title: string,
    logo: string
}

const SingleProject = ({ project }:ProjectType)=>  {

    const [showModal, setShowModal] = useState(false);


    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
        <div className="box singleProject d-flex gap-4">
            <div className="d-flex flex-column gap-3 f1 justify-content-center">
                <div className="d-flex gap-2 align-items-center">
                    <h4 className="m-0">{project.title}</h4>
                    {project.techUsed.map((tech: TechType, index: number) => <img key={index} src={tech.logo} alt="" />)}
                </div>
                <div className="d-flex gap-5">
                    <b>CODE :</b>
                    <a href={project.frontEnd} target="_blank">Front-End</a>
                    {project.backEnd && <a href={project.backEnd} target="_blank">Back-End</a>}
                </div>
                <ul className="px-3">
                    {project.projectInfo.map((info: string, index: number) => <li key={index}>{info}</li>)}
                </ul>
            </div>
            <div className="projectImages gap-2 f1">
                <div  className="mainImage"><img src={project.images[0]} alt=""/></div>
                <div onClick={handleShowModal} className="plus"><h2 className="m-0 d-flex align-items-center gap-2">ZOOM IN <PlusCircle/></h2></div>
            </div>

            <Modal  show={showModal} style={{display: 'flex', alignItems: 'center', background: 'linear-gradient(184deg, rgba(0,0,0,0.6251750700280112) 100%, rgba(82,78,94,0.9389005602240896) 100%)'}} onHide={handleCloseModal}>
                <div className="imageModal w-100 d-flex flex-column gap-2">
                    <img src={project.images[0]} alt=""/>
                </div>
            </Modal>
        </div>
    );
};

export default SingleProject;

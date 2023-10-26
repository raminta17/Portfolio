import {Modal} from "react-bootstrap";
import {useRef, useState, useEffect} from "react";
import {PlusCircle} from "react-bootstrap-icons";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {ArrowLeftCircle} from "react-bootstrap-icons";
import {XLg} from "react-bootstrap-icons";
import {useInView} from "framer-motion"

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
    const [imageIndex, setImageIndex] = useState(0);
    const projectRef = useRef(null);
    const [style, setStyle] = useState({});
    const isInView = useInView(projectRef);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
        setStyle({
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        });
    }, [isInView])
    const handleCloseModal = () => {
        setShowModal(false);
        setImageIndex(0);
    }
    const handleShowModal = () => {
        setShowModal(true);
    }
    function changeImageIndex(direction:string) {
        if(direction === 'left') {
            imageIndex === 0 ? setImageIndex(project.images.length-1) : setImageIndex(imageIndex-1);
            return;
        }
        imageIndex === project.images.length-1 ? setImageIndex(0) : setImageIndex(imageIndex+1);
    }

    return (
        <div className="box singleProject p-4 d-flex flex-column gap-4" ref={projectRef} style={style}>
            <div className="d-flex sm-column justify-content-between gap-3 w-100">
                <h4 className="m-0">{project.title}</h4>
                <div className="d-flex gap-2">{project.techUsed.map((tech: TechType, index: number) => <img key={index} src={tech.logo} alt="" />)}</div>
            </div>
            <div className="d-flex gap-2 sm-column">
                <div className="d-flex flex-column gap-3 f1">
                    <div className="d-flex gap-5">
                        <b>CODE :</b>
                        <a href={project.frontEnd} target="_blank">Front-End</a>
                        {project.backEnd && <a href={project.backEnd} target="_blank">Back-End</a>}
                    </div>
                    <ul className="px-3">
                        {project.projectInfo.map((info: string, index: number) => <li key={index}>{info}</li>)}
                    </ul>
                </div>
                <div className="projectImages gap-2 f1 d-flex align-items-center">
                    <div className="mainImage"><img src={project.images[0]} alt=""/></div>
                    <div onClick={handleShowModal} className="plus"><h2 className="m-0 d-flex align-items-center gap-2">ZOOM IN <PlusCircle/></h2></div>
                </div>
            </div>


            <Modal  className="modalProjectImages" show={showModal} style={{display: 'flex', alignItems: 'center', background: 'linear-gradient(184deg, rgba(0,0,0,0.6251750700280112) 100%, rgba(82,78,94,0.9389005602240896) 100%)'}} onHide={handleCloseModal}>
              <div className="d-flex">
                  <div onClick={() => changeImageIndex('left')} className="arrow"><ArrowLeftCircle/></div>
                  <div className="imageModal d-flex flex-column gap-2">
                      <img src={project.images[imageIndex]} alt=""/>
                  </div>
                  <div onClick={() => changeImageIndex('right')} className="arrow"><ArrowRightCircle/></div>
              </div>
                <XLg onClick={() => handleCloseModal()} className="close"/>
            </Modal>

        </div>
    );
};

export default SingleProject;

import '../styles/mainProject.scss';
import PropTypes from 'prop-types';
import 'animate.css';

import { useState, useEffect } from 'react'

function Carrousel({ logos, title, imageSrc, description }) {

    const filteredLogos = logos.filter((logo) => {
        return logo.project.includes(title);
    });

    const logoList = filteredLogos.map((logo, index) => (
        <li key={index}>
            <img className="art__div--ul-img" src={Object.values(logo.src)[0]} alt={logo.alt} />
        </li>
    ));

    const [showImage, setShowImage] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowImage((prevShowImage) => !prevShowImage);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        if (showImage) {
            return <img className="mainProjects__art--container-img" src={imageSrc} alt="" />;
        } else {
            return (
                <div className="mainProjects__art--container">
                    <img className="mainProjects__art--container-img" src={imageSrc} alt="" />
                    <div className="mainProjects__art--container-div">
                        <h4 className="art__div--h4">Visitar Demo</h4>
                        <p className="art__div--p">{description}</p>
                        <ul className="art__div--ul">{logoList}</ul>
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div className="mainProjects__art--container">
                <img className="mainProjects__art--container-img" src={imageSrc} alt="" />
                <div className="mainProjects__art--container-div">
                    <h4 className="art__div--h4">Visitar Demo</h4>
                    <p className="art__div--p">{description}</p>
                    <ul className="art__div--ul">{logoList}</ul>
                </div>
            </div>
        );
    }
}

Carrousel.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default Carrousel;
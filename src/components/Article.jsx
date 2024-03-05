import '../styles/mainProject.scss';
import PropTypes from 'prop-types';

function Article({ demoLink, imageSrc, description, logos, codeLink, title, animar }) {
    const filteredLogos = logos.filter((logo) => {
        return logo.project.includes(title);
    });
    const logoList = filteredLogos.map((logo, index) => (

        <li key={index}>
            <img className="art__div--ul-img" src={Object.values(logo.src)[0]} alt={logo.alt} />
        </li>

    ));

    return (
        <div className={`column animate__animated ${animar ? 'animate__backInUp' : ''}`}>
            <a className="link" href={demoLink} target='_blank' rel='noreferrer' aria-label={`Visit this project: ${title}`}>
                <article className="mainProjects__art">
                    <div className="mainProjects__art--container">
                        <img className="mainProjects__art--container-img" src={imageSrc} alt="" />
                        <div className="mainProjects__art--container-div">
                            <h4 className="art__div--h4">Visitar Demo</h4>
                            <p className="art__div--p">{description}</p>
                            <ul className="art__div--ul">
                                {logoList}
                            </ul>
                        </div>
                    </div>
                </article>
            </a>
            <a className="a" href={codeLink} target='_blank' rel='noreferrer' aria-label={`Visit the code of this project: ${title}`}>
                <div className="mainProjects__art--titleGit">
                    <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                    <h4 className="mainProjects__art--titleGit-title">{title} - Ver código</h4>
                </div>
            </a>

        </div>
    );
}

Article.propTypes = {
    demoLink: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logos: PropTypes.array.isRequired,
    codeLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    animar: PropTypes.bool.isRequired,
};

export default Article;

import '../styles/mainProject.scss';


function Article({ demoLink, imageSrc, description, logos, codeLink, title }) {
    const filteredLogos = logos.filter((logo) => {
        return logo.project.includes(title);
    });

    const logoList = filteredLogos.map((logo, index) => (
        <li key={index}>
            <img className="art__div--ul-img" src={logo.src} alt={logo.alt} />
        </li>
    ));

    return (
        <a className="link" href={demoLink} target='_blank' rel='noreferrer'>
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
            <a className="a" href={codeLink} target='_blank' rel='noreferrer'>
                <div className="mainProjects__art--titleGit">
                    <i className="mainProjects__art--titleGit-git fa-brands fa-github"></i>
                    <h4 className="mainProjects__art--titleGit-title">{title} - Ver código</h4>
                </div>
            </a>
        </a>
    );
}

export default Article;

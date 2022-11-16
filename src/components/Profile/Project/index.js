import "./project.css";

function Project({ project }) {
    return (
        <div className="project-wrapper">
            <h3 className="project-heading">Projects</h3>
            <div className="project-content">
                {project.map((value, index) => (
                    <div className="project-row" key={index}>
                        <h4 key={value.name}>{value.name}</h4>
                        <div
                            className="project-description"
                            key={value.description}
                        >
                            {value.description}
                        </div>
                    </div>
                ))}
                {/* <div className="project-row">
                    <h4>Tên project</h4>
                    <div className="project-description">
                        <p>project-description</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Project;

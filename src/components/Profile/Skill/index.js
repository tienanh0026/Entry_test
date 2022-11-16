import './skill.css'
function Skill({skill}) {
    console.log(skill)
    return (
        <div className="skill-wrapper">
            <h3 className="skill-heading">Skills</h3>
            <div className="skill-content">
                {skill.map((value, index)=>(
                    <div className="skill-row" key={index}>
                         <div className='skill-name'>
                             <h4 key={value.name}>{value.name}    </h4>
                             <p>    {value.percentage}</p>
                         </div>
                    <div className="skill-percentage"style={{'--percent': value.percentage}} key={value.percentage}>
                    
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;

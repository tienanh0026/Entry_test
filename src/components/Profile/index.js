import Avatar from "../Profile/Avatar";
import ProfileLink from "../Profile/ProfileLink";
import Info from "../Profile/Info";
import Skill from "../Profile/Skill";
import Project from "../Profile/Project";
import "./profile.css";

const obj = {
    info: {
        fullname: "Nguyễn Tiến Anh",
        email: "tienanh0026@gmail.com",
        job: "Frontend Developer",
        phone: "0973745426",
        address: "Thịnh Liệt, Hoàng Mai, Hà Nội",
        education:
            "Electronic and Telecommunication, Hanoi University of Science and Technology (2018-2022)",
    },
    link: {
        github: "tienanh0026",
        twitter: "@none",
        facebook: "/none",
        instagram: "@none",
    },
    skill: [
        { name: "CSS", percentage: "40%" },
        { name: "HTML", percentage: "50%" },
        { name: "JavaScript", percentage: "60%" },
        { name: "MySQL", percentage: "30%" },
    ],
    project: [
        {
            name: "Brain Tumor Detection and  Patient Management Application ",
            description:
                "Using existed AI model to detect brain tumor from MRI images and manage patient information",
        },
        {
            name: "Web-based geographic information system ",
            description:
                "Develop an interactive administrative map WebGIS using client-side rendering",
        },
    ],
};

function Profile() {
    return (
        <div className="profile-wrapper">
            <div className="left-container">
                <div className="left-first-container profile-element">
                    <Avatar {...obj} />
                </div>
                <div className="left-second-container profile-element">
                    <ProfileLink {...obj} />
                </div>
            </div>
            <div className="right-container">
                <div className="right-first-container profile-element">
                    <Info {...obj} />
                </div>
                <div className="right-second-container ">
                    <div className="skill-container profile-element">
                        <Skill {...obj} />
                    </div>
                    <div className="project-container profile-element">
                        <Project {...obj}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

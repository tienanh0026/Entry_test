import image from "../../../images/App.jpg";
import "./Avatar.css";

function Avatar({info}) {
    return (
        <div >
            <div className="avatar-wrapper">
                <img
                    src={image}
                    className="avatar-image"
                    alt="profile-picutre"
                />
            </div>
            <div className="info-wrapper">
                <h2>{info.fullname}</h2>
                <p>{info.job}</p>
                <p>{info.address}</p>
            </div>
        </div>
    );
}

export default Avatar;

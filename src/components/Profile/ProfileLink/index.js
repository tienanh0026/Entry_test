// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profilelink.css";
function ProfileLink({link}) {
    return (
        <div className="link-wrapper">
            <div className="link-row">
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                <h4>Github</h4>
                <p>{link.github}</p>
            </div>
            <div className="link-row">
                <h4>Twitter</h4>
                <p>{link.twitter}</p>
            </div>
            <div className="link-row">
                <h4>Facebook</h4>
                <p>{link.facebook}</p>
            </div>
            <div className="link-row">
                <h4>Instagram</h4>
                <p>{link.instagram}</p>
            </div>
        </div>
    );
}

export default ProfileLink;

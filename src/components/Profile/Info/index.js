import "./info.css";

function Info({info}) {
    return (
        <div className="info-wrapper">
            <div className="info-row">
                <h3 className="info-title">Fullname</h3>
                <p className="info-content">{info.fullname}</p>
            </div>
            <div className="info-row">
                <h3 className="info-title">Email</h3>
                <p className="info-content">{info.email}</p>
            </div>
            <div className="info-row">
                <h3 className="info-title">Phone number</h3>
                <p className="info-content">{info.phone}</p>
            </div>
            <div className="info-row">
                <h3 className="info-title">Address</h3>
                <p className="info-content">{info.address}</p>
            </div>
            <div className="info-row">
                <h3 className="info-title">Education</h3>
                <p className="info-content">{info.education}</p>
            </div>
        </div>
    );
}

export default Info;

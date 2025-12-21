import './ProfilePreview.css';
import profileIconPath from '../../assets/profile.svg';
import type { UserData } from '../../models/data/user';


function ProfilePreview(props: UserData) {
    return (
        <div className="profile-preview">
            <img className="profile-preview__icon"
                src={profileIconPath}
                alt="Profile Preview Icon" />

            <div className="profile-preview__info">
                <p className="profile-preview__name">{props.name}</p>
                <p className="profile-preview__status">{props.status}</p>
            </div>

            {/* <div className="profile-preview__actions">
                <button className="profile-preview__button">
                    <img className="profile-preview__button-icon" src={SendButtonIconPath} alt="Send Icon" />
                </button>
                <button className="profile-preview__button">
                    <img className="profile-preview__button-icon" src={SendButtonIconPath} alt="Send Icon" />
                </button>
            </div> */}
        </div>)
}

export default ProfilePreview;
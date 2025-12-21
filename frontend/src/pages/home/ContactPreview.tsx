import type { UserData } from "../../models/data/user";
import profileIconPath from '../../assets/profile.svg';
import kebabIconPath from '../../assets/kebab.svg';
import "./ContactPreview.css";

function ContactPreview(props: UserData) {
    return <div className="contact-preview">
        <img className="contact-preview__icon" src={profileIconPath} alt="Contact Icon" />
        <div className="contact-preview__info">
            <h4 className="contact-preview__name">{props.name}</h4>
            <p className="contact-preview__status">{props.status}</p>
        </div>
        <div className="contact-preview__actions">
            <button className="contact-preview__other">
                <img src={kebabIconPath} alt="Delete Contact" />
            </button>
        </div>
    </div>
}

export default ContactPreview;
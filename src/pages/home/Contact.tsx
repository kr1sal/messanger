import './Contact.css';
import profileIconPath from '../../assets/profile.svg';
import deleteIconPath from '../../assets/close.svg';
import type { UserData } from '../../model/data/user';

function Contact(props: UserData) {
    return <div className="contact">
        {
            props.avatarUrl ?
                <img className="contact__icon" src={props.avatarUrl} /> :
                <img className="contact__icon" src={profileIconPath} />
        }

        <div className="contact__info">
            <h4 className="contact__name">Contact Name</h4>
            <p className="contact__status">Contact Status</p>
        </div>
        <button className="contact__delete">
            <img src={deleteIconPath} alt="Delete Contact" />
        </button>
    </div>
}

export default Contact;

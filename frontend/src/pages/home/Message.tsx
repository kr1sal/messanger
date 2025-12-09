import type { MessageData } from "../../models/data/message";
import profileIconPath from '../../assets/profile.svg';
import "./Message.css"

function Message(props: MessageData) {
    return <div className="message">
        <img className="message__icon" src={profileIconPath} alt="Contact Icon" />
        <div className="message__content">
            <p className="message__user-name">{props.userId}</p>
            <p className="message__text">{props.text}</p>
            <span className="message__time">{props.time.toTimeString()}</span>
        </div>
    </div>
}

export default Message;
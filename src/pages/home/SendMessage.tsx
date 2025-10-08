import SendButtonIconPath from "../../assets/send.svg";
import "./SendMessage.css";

function SendMessage() {
    return (
        <div className="send-message">
            <input className="send-message__input" type="text" />
            <button className="send-message__button">
                <img className="send-message__button-icon" src={SendButtonIconPath} alt="Send Icon" />
            </button>
        </div>
    )
}

export default SendMessage;
import './Page.css';

function HomePage() {
    return <div className="content">
        <div className="side-bar">
            <div className="navigation">
                <div className="groups">
                    <div className="group"></div>
                    <div className="group"></div>
                    <div className="group"></div>
                </div>
                <div className="contacts">
                    <div className="contact"></div>
                    <div className="contact"></div>
                    <div className="contact"></div>
                </div>
            </div>
            <div className="profile-preview"></div>
        </div>
        <div className="chat">
            <div className="contact-preview"></div>
            <div className="messages">
                <div className="message"></div>
                <div className="message"></div>
                <div className="message"></div>
            </div>
            <div className="send-message"></div>
        </div>
    </div>
}

export default HomePage;
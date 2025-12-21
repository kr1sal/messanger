import './Page.css';
import Contact from './Contact';
import SearchContacts from './SearchContacts';
import type { UserData } from '../../models/data/user';
import profileIconPath from '../../assets/profile.svg';
import ContactPreview from './ContactPreview';
import type { MessageData } from '../../models/data/message';
import Message from './Message';
import SendMessage from './SendMessage';
import ProfilePreview from './ProfilePreview';

function HomePage() {
    const contactsData: Array<UserData> = [
        { id: "asdliasd", name: "test name", status: "adidas", avatarUrl: "https://www.vhv.rs/dpng/d/17-174778_vladimir-putin-png-transparent-png.png" }
    ]

    const currentUserData: UserData = {
        id: "1",
        name: "Lol",
        status: "kek",
        avatarUrl: '',
    }

    const currentContactData: UserData = {
        id: "2",
        name: "Ilusha",
        status: "sosal?",
        avatarUrl: profileIconPath
    }

    const messagesData: Array<MessageData> = [
        {
            id: "69",
            userId: "1",
            date: new Date(),
            text: "Привет!",
            time: new Date(),
        },
        {
            id: "42",
            userId: "2",
            date: new Date(),
            text: "Привет!",
            time: new Date(),
        },
        {
            id: "52",
            userId: "1",
            date: new Date(),
            text: "Привет!",
            time: new Date(),
        }, {
            id: "34",
            userId: "2",
            date: new Date(),
            text: "Привет!",
            time: new Date(),
        }

    ]

    return <>
        <div className="side-bar">
            <div className="navigation">
                {/* <div className="groups">
                    <div className="group"></div>
                    <div className="group"></div>
                    <div className="group"></div>
                </div> */}
                <div className="contacts">
                    <SearchContacts />
                    {contactsData.map((contactData, index) => <Contact {...contactData} key={index} />)}
                </div>
            </div>
            <ProfilePreview {...currentUserData} />
        </div>
        <div className="chat">
            <ContactPreview {...currentContactData} />
            <div className="messages">
                {messagesData.map((messageData, index) => <Message {...messageData} key={index} />)}
            </div>
            <SendMessage />
        </div>
    </>
}

export default HomePage;
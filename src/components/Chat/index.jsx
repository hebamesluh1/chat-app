import { useEffect, useRef, useState } from 'react';

import { ChatStyle } from './style';

//firebase
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

//components
import Message from './Message';
import SendMessage from './SendMessage';
import { Section } from '../Container';
import Navbar from '../Navbar';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unSubscribe = onSnapshot(q, (querySnapShot) => {
            let text = [];
            querySnapShot.forEach((doc) => {
                text.push({ ...doc.data(), id: doc.id });
            });
            setMessages(text);
        });
        return () => unSubscribe();
    }, []);

    return (
        <Section>
            <Navbar/>
            <ChatStyle>
                {messages.map((mess) => (
                    <Message key={mess.id} text={mess}/>
                ))}
            </ChatStyle>
            {/* Send Message Components */}
            <SendMessage scroll={scroll}/>
            <span ref={scroll}></span>
        </Section>
    );
};

export default Chat;

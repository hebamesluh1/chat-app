import { useState } from 'react'
import { Form } from './style'

//firebase
import { auth, db } from '../../../Firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

// eslint-disable-next-line react/prop-types
const SendMessage = ({ scroll }) => {
    const [input, setInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input == '') {
            alert("Invalid Input Message");
            return
        }
        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            messages: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('');
        // eslint-disable-next-line react/prop-types
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder='Message' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Send</button>
        </Form>
    )
}

export default SendMessage
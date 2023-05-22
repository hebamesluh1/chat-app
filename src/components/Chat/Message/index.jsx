/* eslint-disable react/prop-types */

import { auth } from '../../../Firebase/firebase';

import { Text, Name,Wrapper } from './style';

const Message = ({ text }) => {
    const messageClass = text.uid === auth.currentUser.uid ? 'send' : 'receive';
        return (
            <Wrapper direction={messageClass}>
            <Text direction={messageClass}>
            <Name direction={messageClass}>{text.name}</Name>
            <p>{text.messages} </p>
        </Text>
            </Wrapper>
        )
}

export default Message
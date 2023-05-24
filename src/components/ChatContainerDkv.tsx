import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  EllipsisButton,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  TypingIndicator,
  VideoCallButton,
  VoiceCallButton,
} from '@chatscope/chat-ui-kit-react';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

type direction = 'incoming' | 'outgoing';
type sender = 'Joe' | 'Zoe';
interface message {
  message: string;
  sender: sender;
  sendTime: Date;
  direction: direction;
  position?: string;
  avatar: {
    src: string;
  };
}
const icon =
  'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png';

function generateRandomMessages(number: number) {
  const messagesArray = [];

  for (let i = 0; i < number; i++) {
    const message: message = {
      message: faker.lorem.sentence({ min: 1, max: 5 }),
      sender: faker.helpers.arrayElement(['Joe', 'Zoe']),
      sendTime: faker.date.recent({ days: 1, refDate: '2023-05-24T00:00:00.000Z' }),
      direction: faker.helpers.arrayElement(['incoming', 'outgoing']),
      position: 'single',
      avatar: {
        src: icon,
      },
    };
    messagesArray.push(message);
  }
  return messagesArray;
}

const messages = generateRandomMessages(10);

const ChatContainerDkv = () => {
  const [messageInputValue, setMessageInputValue] = useState('');
  return (
    <ChatContainer>
      <ConversationHeader>
        <ConversationHeader.Back />
        <Avatar src={icon} name="Zoe" />
        <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
        <ConversationHeader.Actions>
          <VoiceCallButton />
          <VideoCallButton />
          <EllipsisButton orientation="vertical" />
        </ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
        <MessageSeparator content="Martés, 23 de Mayo 2023" />
        {messages.map((msg, index) => (
          <Message
            className={msg.direction === 'incoming' ? 'bkg-gray' : 'bkg-green'}
            key={index}
            model={{
              message: `${msg.message}`,
              sender: `${msg.sender}`,
              sentTime: `${msg.sendTime}`,
              direction: `${msg.direction}`,
              position: `${msg.position}`,
            }}
          >
            <Avatar src={msg.avatar.src} name={msg.sender} />
            <Message.Footer sender={msg.sender} sentTime={`${msg.sendTime}`} />
          </Message>
        ))}
      </MessageList>
      <MessageInput
        placeholder="Type message here"
        value={messageInputValue}
        onChange={(val) => setMessageInputValue(val)}
      />
    </ChatContainer>
  );
};

export default ChatContainerDkv;

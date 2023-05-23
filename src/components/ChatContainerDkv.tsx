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
import { useState } from 'react';
const ChatContainerDkv = () => {
  const [messageInputValue, setMessageInputValue] = useState('');
  const icon =
    'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png';
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
        <MessageSeparator content="Saturday, 30 November 2019" />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'single',
          }}
        >
          <Avatar src={icon} name="Zoe" />
        </Message>
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'single',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'first',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'normal',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'normal',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'last',
          }}
        >
          <Avatar src={icon} name="Zoe" />
        </Message>
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'first',
          }}
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'normal',
          }}
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'normal',
          }}
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Patrik',
            direction: 'outgoing',
            position: 'last',
          }}
        />

        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'first',
          }}
          avatarSpacer
        />
        <Message
          model={{
            message: 'Hello my friend',
            sentTime: '15 mins ago',
            sender: 'Zoe',
            direction: 'incoming',
            position: 'last',
          }}
        >
          <Avatar src={icon} name="Zoe" />
        </Message>
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

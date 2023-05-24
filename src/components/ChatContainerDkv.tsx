import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { faker } from '@faker-js/faker';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

import styles from './styles/ChatContainerDkv.module.css';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ChatContainer>
      <ConversationHeader style={{ background: 'white' }}>
        <ConversationHeader.Back />
        <Avatar src={icon} name="Zoe" status="available" />
        <ConversationHeader.Content>
          <div
            style={{
              justifyContent: 'space-around',
              color: '#0b4c46',
              fontWeight: '400',
            }}
          >
            <span
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              61463806
            </span>
            <span style={{ textTransform: 'uppercase', paddingLeft: '12px' }}>
              Mujer, 32 años
            </span>
            <span style={{ paddingLeft: '12px' }}>Vélez-Málaga (Málaga)</span>
            <span style={{ fontStyle: 'italic', paddingLeft: '12px' }}>Conectado</span>
          </div>
        </ConversationHeader.Content>
        <ConversationHeader.Actions>
          <IconButton>
            <SettingsIcon sx={{ color: '#0b4c46' }} />
          </IconButton>
          <IconButton>
            <CallIcon sx={{ color: '#0b4c46' }} />
          </IconButton>
          <IconButton>
            <VideocamIcon sx={{ color: '#0b4c46' }} />
          </IconButton>
          <IconButton>
            <PlaylistAddIcon sx={{ color: '#0b4c46' }} />
          </IconButton>
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertIcon sx={{ color: '#0b4c46' }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>Detalles</MenuItem>
          </Menu>
        </ConversationHeader.Actions>
      </ConversationHeader>
      <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
        <MessageSeparator content="Martés, 23 de Mayo 2023" />
        {messages.map((msg, index) => (
          <Message
            className={
              msg.direction === 'incoming' ? `${styles.bkgGray}` : `${styles.bkgGreen}`
            }
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
        placeholder="Escribe a 61463806"
        value={messageInputValue}
        onChange={(val) => setMessageInputValue(val)}
        sendButton={false}
        attachButton={false}
        className={styles.msgInput}
      />
      <IconButton>
        <AttachFileIcon sx={{ color: '#0b4c46' }} />
      </IconButton>
    </ChatContainer>
  );
};

export default ChatContainerDkv;

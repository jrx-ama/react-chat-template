import { MessageList } from 'react-chat-elements';

import styles from './styles/ChatLayout.module.css';

const messages = [
  {
    position: 'left',
    type: 'text',
    text: 'Hello there',
    title: 'Joe',
    time: '3:43',
  },
  { position: 'right', type: 'text', text: 'Whats up doc', title: 'Mary', time: '2:42' },
  { position: 'left', type: 'text', text: 'Titanic🚢', title: 'Joe', time: '4:42' },
  {
    position: 'right',
    type: 'text',
    text: 'Where did the tiger go?',
    title: 'Mary',
    time: '5:42',
  },
  {
    position: 'left',
    type: 'text',
    text: 'it is in the backyard',
    title: 'Joe',
    time: '6:42',
  },
  { position: 'right', type: 'text', text: 'ah Ok 😂', title: 'Mary', time: '7:42' },
  { position: 'right', type: 'text', text: 'not reply', title: 'Mary', time: '7:45' },
];
const ChatLayout = () => {
  return (
    <div className={styles.container}>
      <MessageList className="message-list" dataSource={messages} />
    </div>
  );
};

export default ChatLayout;

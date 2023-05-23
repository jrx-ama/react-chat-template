import {
  Avatar,
  Conversation,
  ConversationList,
  Search,
  Sidebar,
} from '@chatscope/chat-ui-kit-react';
import { faker } from '@faker-js/faker';

import styles from './styles/SidebarDkv.module.css';

type Status = 'Avalaible' | 'Eager' | 'Away' | 'Dnd' | 'Invisible' | 'Unavailable';

interface Avatar {
  src: string;
  name: string;
  status: Status;
}

interface Conversation {
  name: string;
  lastSenderName: string;
  info: string;
  avatar: Avatar;
}

function generateRandomConversations(number: number) {
  const conversationsArray = [];

  for (let i = 0; i < number; i++) {
    const conversation = {
      name: faker.person.firstName(),
      lastSenderName: faker.person.firstName(),
      info: faker.lorem.slug({ min: 3, max: 6 }),
      avatar: {
        src: 'https://cdn-icons-png.flaticon.com/512/1430/1430896.png',
        name: faker.person.firstName(),
        status: faker.helpers.arrayElement([
          'Available',
          'Eager',
          'Away',
          'Dnd',
          'Invisible',
          'Unavailable',
        ]),
      },
    };
    conversationsArray.push(conversation);
  }
  return conversationsArray;
}

const conversations = generateRandomConversations(8);

const SidebarDkv = () => {
  return (
    <Sidebar position="left" className={styles.sidebarContainer}>
      <Search placeholder="Search..." />
      <ConversationList className={styles.list}>
        {conversations.map((conver) => (
          <Conversation
            key={conver.name}
            name={conver.name}
            lastSenderName={conver.lastSenderName}
            info={conver.info}
          >
            <Avatar
              className={styles.avatar}
              src={conver.avatar.src}
              name={conver.name}
              status={conver.avatar.status}
            />
          </Conversation>
        ))}
      </ConversationList>
    </Sidebar>
  );
};

export default SidebarDkv;

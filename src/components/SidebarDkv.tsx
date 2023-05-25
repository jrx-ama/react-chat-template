import {
  Avatar,
  Conversation,
  ConversationList,
  Search,
  Sidebar,
} from '@chatscope/chat-ui-kit-react';
import { faker } from '@faker-js/faker';

import styles from './styles/SidebarDkv.module.css';
import { Box, Switch, Typography } from '@mui/material';

type Status = 'avalaible' | 'eager' | 'away' | 'dnd' | 'invisible' | 'unavailable';

interface Avatar {
  src: string;
  name: string;
  status: Status;
  unreadCnt?: number;
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
      info: faker.lorem.sentence({ min: 3, max: 6 }),
      unreadCnt: Math.floor(Math.random() * 260),
      avatar: {
        src: 'https://cdn-icons-png.flaticon.com/512/1430/1430896.png',
        name: faker.person.firstName(),
        status: faker.helpers.arrayElement([
          'available',
          'eager',
          'away',
          'dnd',
          'invisible',
          'unavailable',
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
      <Search placeholder="Search..." className={styles.search} />
      <Box
        container
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography color="white">Casos</Typography>
        <Switch defaultChecked />
      </Box>
      <ConversationList className={styles.list}>
        {conversations.map((conver) => (
          <Conversation
            key={conver.name}
            name={conver.name}
            lastSenderName={conver.lastSenderName}
            info={conver.info}
            className={`conversation-left ${styles.bkgTransparent}`}
            unreadCnt={conver.unreadCnt}
          >
            <Avatar
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

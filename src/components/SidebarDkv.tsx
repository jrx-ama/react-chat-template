import {
  Avatar,
  Conversation,
  ConversationList,
  Search,
  Sidebar,
} from '@chatscope/chat-ui-kit-react';
import { faker } from '@faker-js/faker';

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
      info: faker.lorem.sentence({ min: 3, max: 6 }),
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
    <Sidebar position="left" style={{ backgroundColor: '#0b4c46' }}>
      <Search placeholder="Search..." />
      <ConversationList>
        {conversations.map((conver) => (
          <Conversation
            key={conver.name}
            name={conver.name}
            lastSenderName={conver.lastSenderName}
            info={conver.info}
            style={{ backgroundColor: '#0b4c46', color: 'white' }}
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

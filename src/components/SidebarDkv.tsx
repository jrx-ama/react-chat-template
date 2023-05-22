import { ChatList } from 'react-chat-elements';

import styles from './styles/SidebarDkv.module.css';

const chats = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
    alt: 'kursat_avatar',
    title: 'Kursat',
    subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(),
    unread: 3,
  },
];
const SidebarDkv = () => {
  return (
    <div className={styles.sidebarContainer}>
      <p>Casos</p>
      <ChatList dataSource={chats} />
    </div>
  );
};

export default SidebarDkv;

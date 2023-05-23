import { MainContainer } from '@chatscope/chat-ui-kit-react';

import ChatContainerDkv from '../components/ChatContainerDkv';
import SidebarDkv from '../components/SidebarDkv';

const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '95vh',
        marginTop: '16px',
        marginBottom: '16px',
        background: 'red',
        borderRadius: '2px',
      }}
    >
      <MainContainer responsive style={{display:'flex'}}>
        <SidebarDkv />
        <ChatContainerDkv />
      </MainContainer>
    </div>
  );
};

export default Home;

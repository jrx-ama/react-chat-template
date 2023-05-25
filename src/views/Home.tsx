import { MainContainer } from '@chatscope/chat-ui-kit-react';

import ChatContainerDkv from '../components/ChatContainerDkv';
import Header from '../components/Header';
import SidebarDkv from '../components/SidebarDkv';

const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '90vh',
        marginTop: '16px',
        marginBottom: '16px',
        background: 'red',
        borderRadius: '2px',
      }}
    >
      <Header />
      <MainContainer responsive>
        <SidebarDkv />
        <ChatContainerDkv />
      </MainContainer>
    </div>
  );
};

export default Home;

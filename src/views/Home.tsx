import ChatLayout from '../components/ChatLayout';
import LayoutContainer from '../components/LayoutContainer';
import SidebarDkv from '../components/SidebarDkv';
const Home = () => {
  return (
    <LayoutContainer>
      <SidebarDkv />
      <ChatLayout />
    </LayoutContainer>
  );
};

export default Home;

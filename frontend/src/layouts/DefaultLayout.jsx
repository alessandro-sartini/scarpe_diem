import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatBotToggle from '../components/chatBot/ChatBotToggle';

export default function DefaultLayout() {
  

  return (
    <>
      <section className="wrapper">
        <Header />
        <Outlet />
        <ChatBotToggle/>
        <Footer />
      </section>
    </>
  );
}

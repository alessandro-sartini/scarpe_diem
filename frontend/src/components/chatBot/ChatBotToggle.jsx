import { useEffect, useState, useRef } from "react";
import parse, { domToReact } from "html-react-parser";
import { IoMdSend } from "react-icons/io";
import chatBot from "/graphics/chatBot.jpeg";
import sendGif from "/graphics/send2.gif";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useLocation } from "react-router-dom";
export default function ChatBotToggle() {
  const { messages, isLoading, handleSendMessage, message, setMessage } =
    useGlobalContext();

  //! per ottenere url corrente
  const location = useLocation();
  // ! nascondi il chatbot in percorsi specifici
  const hiddenPaths = ["/cart", "/wishlist", "/checkout", "/order-completed"];
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  const end = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const scroll = () => {
    end.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scroll();
  }, [messages]);

  // ! personalizzo i link
  const options = {
    replace: (domNode) => {
      if (domNode.name === "a" && domNode.attribs) {
        return (
          <a
            href={domNode.attribs.href}
            className={domNode.attribs.class}
            target="_blank"
            rel="noopener noreferrer"
          >
            {domToReact(domNode.children)}
          </a>
        );
      }
    },
  };
  useEffect(() => {
    // console.log("Chatbot is now", isOpen ? "open" : "closed");
  }, [isOpen]);

  return (
    <>
      <div>
        <button className="bot" onClick={() => setIsOpen(!isOpen)}>
          <img src={chatBot} alt="ScarpeBot" className="chatBotBtn" />
        </button>
      </div>

      <div className={`chatBot ${isOpen ? "open" : ""}`}>
        <div className="chat-container">
          <div className="chat-header">ScarpeBot</div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {parse(msg.text, options)}
              </div>
            ))}
            <div ref={end} />
            {isLoading && <div className="message bot">Sto pensando...</div>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Chiedimi qualcosa..."
              disabled={isLoading}
            />
            <button onClick={handleSendMessage} disabled={isLoading}>
              {isLoading ? (
                <img src={sendGif} alt="Send Gif" className="send-gif" />
              ) : (
                <IoMdSend color="black" size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

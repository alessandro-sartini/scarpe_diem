import { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
export default function ChatBotToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Ciao! Come posso aiutarti?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleResponse(dataToSend) {
    try {
      const response = await fetch("http://localhost:3000/products/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Errore nella risposta del server");
      }

      const data = await response.json();
      console.log("Risposta del backend:", data); // Debug
      return data.response || "Risposta non valida dal server";
    } catch (error) {
      console.error("Errore nella richiesta al backend:", error);
      throw new Error("Non riesco a contattare il server, riprova.");
    }
  }

  const handleSendMessage = async () => {
    if (message.trim()) {
      setMessages((prev) => [...prev, { sender: "user", text: message }]);
      setMessage("");
      setIsLoading(true);
      try {
        const botResponse = await handleResponse({ prompt: message });
        setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: error.message },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
    };
    
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
    console.log("Chatbot is now", isOpen ? "open" : "closed");
  }, [isOpen]);

  return (
    <>
      <div>
        <button className="chatBotBtn" onClick={() => setIsOpen(!isOpen)}>
        <img src="/graphics/chatBot.jpeg" alt="Chatbot" />        </button>
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
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
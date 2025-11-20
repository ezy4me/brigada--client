"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import { Input } from "@/shared/ui/input/Input";
import { Card } from "@/shared/ui/card/Card";
import { Send, X, MessageCircle, SendHorizonal } from "lucide-react";
import * as styles from "./supportChat.css";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Здравствуйте! Чем могу помочь?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Спасибо за ваше сообщение. Наш специалист свяжется с вами в ближайшее время.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.chatWidget}>
          <div className={styles.chatHeader}>
            <Text className={styles.chatTitle}>Поддержка</Text>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              <X size={16} className={styles.closeButtonIcon} />
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.isUser
                    ? styles.messageWrapper.isUser
                    : styles.messageWrapper.isBot
                }
              >
                <div
                  className={
                    message.isUser
                      ? styles.messageBubble.isUser
                      : styles.messageBubble.isBot
                  }
                >
                  <Text className={styles.messageText}>
                    {message.text}
                  </Text>
                  <Text className={styles.messageTime}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className={styles.inputForm}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Введите ваше сообщение..."
              className={styles.messageInput}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className={styles.sendButton}
            >
              <SendHorizonal size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(true)}
        className={styles.chatButton}
      >
        <MessageCircle size={20} className={styles.chatButtonIcon} />
      </button>
    </>
  );
};

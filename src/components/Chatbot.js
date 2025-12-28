import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import { getGeminiResponse } from '../services/gemini';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, background 0.3s ease;
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.primary}dd;
  }
`;

const ChatWindow = styled.div`
  width: 350px;
  height: 500px;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.primary}30;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
  }
`;

const ChatHeader = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.primary}20;

  h3 {
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    flex-grow: 1;
  }

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const MessagesArea = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.body};
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary}40;
    border-radius: 3px;
  }
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.5;
  
  ${({ isUser, theme }) => isUser ? `
    align-self: flex-end;
    background: ${theme.primary}20;
    color: ${theme.text};
    border-bottom-right-radius: 2px;
  ` : `
    align-self: flex-start;
    background: ${theme.background};
    color: ${theme.textSecondary};
    border-bottom-left-radius: 2px;
    border: 1px solid ${theme.primary}10;
  `}
`;

const InputArea = styled.form`
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  gap: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.primary}20;
`;

const Input = styled.input`
  flex: 1;
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.primary}30;
  border-radius: 20px;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SendButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:disabled {
    color: ${({ theme }) => theme.textSecondary};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 4px;
  padding: 0.5rem;
  
  div {
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
  }

  div:nth-child(1) { animation-delay: -0.32s; }
  div:nth-child(2) { animation-delay: -0.16s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Hi! I'm Shashwat's AI assistant. Ask me anything about his projects, skills, or experience." }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMsg = inputText.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInputText('');
        setIsLoading(true);

        try {
            const responseText = await getGeminiResponse(userMsg);
            setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, something went wrong." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ChatContainer>
            {isOpen && (
                <ChatWindow>
                    <ChatHeader>
                        <FaRobot />
                        <h3>AI Assistant</h3>
                        <div style={{ flex: 1 }} />
                    </ChatHeader>
                    <MessagesArea>
                        {messages.map((msg, idx) => (
                            <MessageBubble key={idx} isUser={msg.role === 'user'}>
                                {msg.text}
                            </MessageBubble>
                        ))}
                        {isLoading && (
                            <MessageBubble isUser={false}>
                                <LoadingDots>
                                    <div />
                                    <div />
                                    <div />
                                </LoadingDots>
                            </MessageBubble>
                        )}
                        <div ref={messagesEndRef} />
                    </MessagesArea>
                    <InputArea onSubmit={handleSubmit}>
                        <Input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask about Shashwat..."
                        />
                        <SendButton type="submit" disabled={isLoading || !inputText.trim()}>
                            <FaPaperPlane />
                        </SendButton>
                    </InputArea>
                </ChatWindow>
            )}
            <ToggleButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Chatbot">
                {isOpen ? <FaTimes /> : <FaCommentDots />}
            </ToggleButton>
        </ChatContainer>
    );
};

export default Chatbot;

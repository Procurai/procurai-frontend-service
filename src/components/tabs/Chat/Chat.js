import React, { useState, useEffect, useRef } from 'react';
import api from '../../../services/api';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SuggestedQuestions from './SuggestedQuestions';
import QuickResponses from './QuickResponses';
import Card from '../../common/ui/Card';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [quickResponses, setQuickResponses] = useState([]);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const messagesEndRef = useRef(null);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        // Fetch chat history
        const chatHistory = await api.chat.getMessages();
        setMessages(chatHistory);

        // Fetch quick responses
        const responses = await api.chat.getQuickResponses();
        setQuickResponses(responses);

        // Fetch suggested questions based on last message
        if (chatHistory.length > 0) {
          const lastMessage = chatHistory[chatHistory.length - 1];
          const questions = await api.chat.getSuggestedQuestions(lastMessage.content);
          setSuggestedQuestions(questions);
        }
      } catch (error) {
        console.error('Error fetching chat data:', error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (content) => {
    setIsLoading(true);
    try {
      const newMessages = await api.chat.sendMessage(content);
      setMessages(prev => [...prev, ...newMessages]);
      
      // Update suggested questions based on the new bot response
      const questions = await api.chat.getSuggestedQuestions(newMessages[1].content);
      setSuggestedQuestions(questions);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">ProcurAI Assistant</h2>
        <p className="text-gray-600">Ask me anything about pumps, procurement, or technical specifications</p>
      </div>
      
      <div className="flex flex-1 space-x-4 overflow-hidden">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {/* Messages container */}
          <Card className="flex-1 p-4 overflow-y-auto mb-4">
            {isFetching ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600">Loading conversation...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-5xl mb-4">👋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to ProcurAI Assistant</h3>
                <p className="text-gray-600 max-w-md">
                  I'm here to help with all your pump procurement needs. Ask me anything about pumps, specifications, or procurement best practices.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map(message => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </Card>
          
          {/* Suggested questions */}
          <SuggestedQuestions 
            questions={suggestedQuestions} 
            onSelectQuestion={handleSendMessage} 
            isLoading={isLoading} 
          />
          
          {/* Chat input */}
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
        
        {/* Quick responses sidebar */}
        <div className="w-64 hidden md:block">
          <QuickResponses 
            responses={quickResponses} 
            onSelectResponse={handleSendMessage} 
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
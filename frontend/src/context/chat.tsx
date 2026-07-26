'use client';

import { ChatHistoryRecord } from '@/types/chat';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define the shape of our context state
type ChatContextType = {
  userChat: ChatHistoryRecord[];
  setUserChat: (msg: ChatHistoryRecord[]) => void;
};

// 2. Create context with default values
export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

// 3. Create the Provider component
export function ChatProvider({ children }: { children: ReactNode }) {
  const [userChat, setUserChat] = useState<ChatHistoryRecord[]>([]);

  return (
    <ChatContext.Provider value={{ userChat, setUserChat }}>
      {children}
    </ChatContext.Provider>
  );
}

// 4. Custom hook for easy consumption in client components
export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

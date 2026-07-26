'use client';
import { GetChatHistoryResponse } from '@/types/chat';
import AIResponse from './chat/aiResponse';
import UserRequest from './chat/userRequest';
import { useChat } from '@/context/chat';
import { useEffect } from 'react';

export default function HomeComponent() {
  const { userChat, setUserChat } = useChat();
  console.log('HelloWorld');
  const backendURL = process.env.NEXT_PUBLIC_BE_BASE_URL!;
  useEffect(() => {
    const getUserChat = async () => {
      if (userChat.length === 0) {
        const response = await fetch(`${backendURL}/get-chat`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          return <p>There is no chat history!</p>;
        }
        const getChatResponse: GetChatHistoryResponse = await response.json();
        setUserChat(getChatResponse.data);
      }
    };
    getUserChat();
  }, []);

  return (
    <div className="min-h-full w-full bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto">
      {!userChat || userChat.length === 0 ? (
        <p>Chat was empty</p>
      ) : (
        userChat.map((chat) => {
          return (
            <>
              <UserRequest key={chat._id + 'request'} chat={chat} />
              <AIResponse key={chat._id + 'response'} chat={chat} />
            </>
          );
        })
      )}
    </div>
  );
}

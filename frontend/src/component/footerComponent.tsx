'use client';

import { useChat } from '@/context/chat';
import { ApiResponse } from '@/types/api';
import { ChatHistoryRecord } from '@/types/chat';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

export default function Footer() {
  const { userChat, setUserChat } = useChat();
  const [userRequest, setUserRequest] = useState<string>('');
  const handleUserRequest = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setUserRequest(e.target.value);
  };

  const updateChat = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_BASE_URL!}/chat`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: userRequest.trim(),
        }),
      }
    );

    if (response.ok) {
      const data = (await response.json()) as ApiResponse<ChatHistoryRecord>;
      console.log('Data: ', data);
      // Safe fallback if userChat happens to be undefined/null initially
      const currentChats = userChat ?? [];

      // Pass the updated array directly
      setUserChat([...currentChats, data.data]);
      toast.success('Message sent successfully!');
    }

    setUserRequest('');
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 p-3 sm:p-4 sticky bottom-0 z-40 backdrop-blur-md bg-opacity-95">
      <div className="max-w-3xl mx-auto flex items-center gap-2">
        <div className="relative flex-1 flex items-center">
          <input
            type="text"
            value={userRequest}
            onChange={handleUserRequest}
            placeholder="Type your message here..."
            className="w-full bg-slate-900 text-slate-100 border border-emerald-900/60 rounded-full py-3 pl-5 pr-12 text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner"
          />
          <button
            type="button"
            className="absolute right-1.5 w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center transition-colors shadow-md shadow-emerald-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
            onClick={updateChat}
            disabled={!userRequest}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-[11px] text-center text-slate-500 mt-2">
        GrammarGamma may produce inaccurate information.
      </p>
    </footer>
  );
}

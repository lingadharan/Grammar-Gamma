import { ChatHistoryRecord } from '@/types/chat';
import { generateCreatedTime } from '@/utiles/utiles';

export default function AIResponse({ chat }: { chat: ChatHistoryRecord }) {
  const time: string = generateCreatedTime(chat.updatedAt);
  return (
    <div className="flex flex-col items-end max-w-[85%] sm:max-w-[70%] self-end">
      <div className="flex items-center gap-2 mb-1.5 pr-1 flex-row-reverse">
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-bold">
          🤖
        </div>
        <span className="text-xs text-slate-400 font-medium">
          GrammarGamma • {time}
        </span>
      </div>
      <div className="bg-slate-900 text-slate-100 border border-slate-800 p-4 rounded-2xl rounded-tr-xs shadow-md">
        <p className="text-sm sm:text-base leading-relaxed">{chat.response}</p>
      </div>
    </div>
  );
}

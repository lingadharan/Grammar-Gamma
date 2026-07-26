export default function UserRequest() {
  return (
    <div className="flex flex-col items-start max-w-[85%] sm:max-w-[70%] self-start">
      <div className="flex items-center gap-2 mb-1.5 pl-1">
        <div className="w-6 h-6 rounded-full bg-emerald-800 text-emerald-200 flex items-center justify-center text-xs font-semibold">
          AM
        </div>
        <span className="text-xs text-slate-400 font-medium">
          Alex • 10:42 AM
        </span>
      </div>
      <div className="bg-emerald-950/80 text-emerald-100 border border-emerald-800/60 p-4 rounded-2xl rounded-tl-xs shadow-md">
        <p className="text-sm sm:text-base leading-relaxed">
          Can you help me design a green-themed layout for my AI chatbot in
          Next.js?
        </p>
      </div>
    </div>
  );
}

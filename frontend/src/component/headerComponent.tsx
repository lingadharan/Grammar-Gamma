import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-emerald-950 text-emerald-50 border-b border-emerald-800/50 px-4 py-3 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="flex items-center gap-2">
        <Image
          src={'/grammar-gamma.svg'}
          width={75}
          height={75}
          alt="Grammar gamma logo"
        />
        <span className="font-semibold text-lg tracking-tight hidden sm:inline">
          Grammar<span className="text-emerald-400">Gamma</span>
        </span>
      </div>

      <div className="flex items-center gap-2 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50 text-xs sm:text-sm font-medium text-emerald-200 truncate max-w-[160px] sm:max-w-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="truncate">Next.js UI Layout Discussion</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex flex-col text-right">
          <span className="text-xs font-semibold text-emerald-100">
            Alex Morgan
          </span>
          <span className="text-[10px] text-emerald-400">Pro Plan</span>
        </div>
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-emerald-700 border-2 border-emerald-400 flex items-center justify-center font-semibold text-emerald-100 text-sm">
            AM
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-emerald-950 rounded-full"></span>
        </div>
      </div>
    </header>
  );
}

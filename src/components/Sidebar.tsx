import { Home, Library, Search } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
        >
          <Home />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 "
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Hard Rock
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Musicas Geek
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          My Playlist #14
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
      </nav>
    </aside>
  );
}

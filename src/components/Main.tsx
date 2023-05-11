import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="p-1 rounded-full bg-black/40">
          <ChevronLeft />
        </button>
        <button className="p-1 rounded-full bg-black/40">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do álbum"
          />
          <strong>Iowa</strong>
          <button className="w-12 h-12 grid place-items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do álbum"
          />
          <strong>Iowa</strong>
          <button className="w-12 h-12 grid place-items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do álbum"
          />
          <strong>Iowa</strong>
          <button className="w-12 h-12 grid place-items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do álbum"
          />
          <strong>Iowa</strong>
          <button className="w-12 h-12 grid place-items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do álbum"
          />
          <strong>Iowa</strong>
          <button className="w-12 h-12 grid place-items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 group hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album.jpg"
            width={104}
            height={104}
            alt="Capa do álbum"
          />
          <strong>Iowa</strong>
          <button className="w-12 h-12 grid place-items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Gustavo B. Sombra
      </h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album.jpg"
            width={120}
            height={120}
            alt="Capa do álbum"
            className="w-full"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-zinc-500 text-sm">
            Wallows, COIN, girl in red and more
          </span>
        </a>
      </div>
    </main>
  );
}

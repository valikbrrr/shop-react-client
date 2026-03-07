import { Telegram, Instagram, Github } from "@/shared/assets/icons";

export const Footer = () => {
  return (
    <div className="bg-black py-5 px-[20px]">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="flex flex-col space-y-4">
          <button className="text-white text-left text-lg hover:underline">
            Меню
          </button>
          <button className="text-white text-left text-lg hover:underline">
            Избранное
          </button>
          <button className="text-white text-left text-lg hover:underline">
            Корзина
          </button>
          <input
            type="text"
            placeholder="Поиск продуктов..."
            className="rounded-xl bg-white/10 text-white placeholder-white/60 px-4 py-2 mt-2 w-64 border border-white/20 focus:outline-none focus:border-white/40"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-white/80 text-lg mb-3">Социальные сети</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={Instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://web.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={Telegram} alt="Telegram" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/valikbrrr/shop-react-client"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={Github} alt="Github" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-white/60 text-sm text-center mt-12">
        © Copyright 2026
      </div>
    </div>
  );
};

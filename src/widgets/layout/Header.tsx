import { Bag, ArrowDown, Search, Heart, Profile } from "@/shared/assets/icons";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-[20px] py-[15px]">
      {/* Горизонтальный градиент слева направо как в Figma */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(270deg, #0E0804 0%, rgba(29, 15, 8, 0.1) 100%)",
        }}
      />

      <div className="grid grid-cols-3 items-center relative">
        <div className="Logo-group justify-self-start">
          <div className="flex gap-x-0.5 -translate-x-[2px]">
            <p className="font-semibold text-5xl text-white text-shadow-outline-2 font-inria">
              De
            </p>
            <p className="font-semibold text-5xl text-white text-shadow-outline-2 font-atma">
              Love
            </p>
            <p className="font-semibold text-5xl text-white text-shadow-outline-2 font-inria">
              ry
            </p>
          </div>
          <div className="text-2xl text-white text-shadow-outline-1">
            доставка любимой еды
          </div>
        </div>

        <div className="Menu-group flex items-center justify-self-center">
          <button className="text-4xl text-white text-shadow-outline-2 pb-3">
            Меню
          </button>
          <img src={ArrowDown} alt="arrow-bottom" className="w-8 h-8" />
        </div>

        <div className="Right-group flex gap-4 justify-self-end">
          <img src={Search} alt="search" className="w-8 h-8" />
          <img src={Heart} alt="heart" className="w-8 h-8" />
          <img src={Bag} alt="bag" className="w-8 h-8" />
          <img src={Profile} alt="profile" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

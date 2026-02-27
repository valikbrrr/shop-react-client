import { Link } from "react-router-dom";
import deliveryMan from "@/shared/assets/icons/delivery-man.png";

export const Banner = () => {
  return (
    <div className=" flex w-full mt-5 justify-center flex-row">
      <div className="flex justify-between items-center bg-[#47AA52] w-[70%] rounded-2xl p-5">
        <div className="">
          <p className="font-semibold text-white text-3xl">
            Fast delivery - delicious
            <br /> choice every time!
          </p>
          <Link className="" to={"/explorer"}>
            <p className="bg-black py-2 rounded-full w-[60%] mt-4 text-white font-medium text-xl text-center">
              Order now
            </p>
          </Link>
        </div>
        <div className="w-24 h-24">
          <img
            src={deliveryMan}
            alt="delivery-man"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
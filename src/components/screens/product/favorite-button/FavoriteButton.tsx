import type { FC } from "react";
import { useProfile } from "../../profile/useProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "@/services/user.service";
import Heart from "@/assets/icons/heart.png";
import HeartRed from "@/assets/icons/heart-red.png";

interface IFavoriteButton {
  productId: string;
}

const FavoriteButton: FC<IFavoriteButton> = ({ productId }) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["toggle favorite"],
    mutationFn: () => UserService.toggleFavorite(productId),

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["get profile"] });
    },
  });

  if (!profile) return null;

  const isExist = profile.favorites.some(
    (favorite) => favorite.id === productId
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => mutate()}
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
      >
        {isExist ? (
          <img src={HeartRed} alt="" className="w-5 h-5" />
        ) : (
          <img src={Heart} alt="" className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default FavoriteButton;

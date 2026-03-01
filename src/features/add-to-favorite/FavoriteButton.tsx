import type { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Heart from "@/shared/assets/icons/heart.png";
import HeartRed from "@/shared/assets/icons/heart-red.png";
import { useProfile, UserApi } from "@/entities/user";

interface IFavoriteButton {
  productId: string;
}

export const FavoriteButton: FC<IFavoriteButton> = ({ productId }) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["toggle favorite"],
    mutationFn: () => UserApi.toggleFavorite(productId),

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["get profile"] });
    },
  });

  if (!profile) return null;

  const isExist = profile.favorites.some(
    (favorite) => favorite.id === productId,
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
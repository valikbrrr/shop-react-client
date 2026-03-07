import HomeHeaderImage from "@/shared/assets/bg/HomeHeaderImage.png";

export const HomeHeaderBg = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={HomeHeaderImage}
        alt="Header background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

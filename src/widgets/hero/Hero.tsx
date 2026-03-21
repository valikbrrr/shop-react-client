import HomeHeaderImage from "@/shared/assets/bg/HomeHeaderImage.png";

export const Hero = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ lineHeight: 0 }}
    >
      <img
        src={HomeHeaderImage}
        alt="Header background"
        className="w-full h-full object-cover"
        style={{
          display: "block",
          maxWidth: "100%",
          height: "100%",
          objectFit: "cover",
          boxShadow: "none",
          outline: "none",
          border: "none",
          filter: "none",
          transform: "none",
          margin: 0,
          padding: 0,
          verticalAlign: "middle",
          imageRendering: "auto",
          WebkitBoxShadow: "none",
          MozBoxShadow: "none",
          WebkitFilter: "none",
        }}
      />
    </div>
  );
};

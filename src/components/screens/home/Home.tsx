import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-black text-4xl text-violet-800 font-bold m-4">
      <p>Homepage</p>
      <div className="ml-4">
        <Link to={"/auth"}>Auth</Link>
      </div>
    </div>
  );
};

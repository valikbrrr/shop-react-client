import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/screens/home/Home";
import Auth from "./components/screens/auth/Auth";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

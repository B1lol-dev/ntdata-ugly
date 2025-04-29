import { BrowserRouter, Routes, Route } from "react-router";

// pages
import { Home } from "./pages/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

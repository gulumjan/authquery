import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./LayoutSite.module.scss";

const LayoutSite = () => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSite;

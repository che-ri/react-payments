import React from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

//components
import HeaderNav from "../../components/HeaderNav";
import { ReactComponent as ArrowLeft } from "../../asset/icons/arrow-left.svg";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function ArrowLeftComponent() {
    const goHome = () => navigate("/");
    return (
      <div onClick={goHome}>
        <ArrowLeft />
      </div>
    );
  }

  return (
    <div className={styles.PageTitle}>
      {pathname === "/" && <HeaderNav text="보유카드" to="/" />}
      {pathname === "/detail" && (
        <HeaderNav
          text="카드상세"
          to="/detail"
          iconComponent={<ArrowLeftComponent />}
        />
      )}{" "}
    </div>
  );
}

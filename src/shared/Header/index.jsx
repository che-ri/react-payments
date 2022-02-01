import React from "react";
import styles from "./Header.module.css";

//components
import HeaderNav from "../../components/HeaderNav";
import { ReactComponent as ArrowLeft } from "../../asset/icons/arrow-left.svg";

export default function Header() {
  return (
    <div className={styles.PageTitle}>
      <HeaderNav text="보유카드" to="/" />
      {/* <HeaderNav text="카드상세" to="/detail" iconComponent={<ArrowLeft />} /> */}
    </div>
  );
}

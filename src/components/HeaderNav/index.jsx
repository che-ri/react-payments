import React from "react";
import styles from "./HeaderNav.module.css";
import { useNavigate } from "react-router";

export default function HeaderNav({
  text = "",
  to = "/",
  iconComponent = undefined,
}) {
  const navigate = useNavigate();
  const goPage = () => {
    navigate(to);
  };

  return (
    <div className={styles.Nav}>
      {iconComponent && (
        <div className={styles.NavLeftIcon}>{iconComponent}</div>
      )}
      <strong onClick={goPage}>{text}</strong>
    </div>
  );
}

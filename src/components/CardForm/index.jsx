import React from "react";
import styles from "../../styles/Input.module.css";

export default function CardForm({
  title = "",
  inputRightComponent = undefined,
  titleRightComponent = undefined,
  children,
}) {
  return (
    <div className={styles.InputContainer}>
      {title && (
        <div className={styles.InputTitle}>
          <span>{title}</span>
          {titleRightComponent}
        </div>
      )}
      <div className={styles.InputBox}>
        {children}
        {inputRightComponent}
      </div>
    </div>
  );
}

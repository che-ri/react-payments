import React from "react";
import styles from "../../styles/Input.module.css";

export default function StateInput({
  type = "text",
  placeholder = "",
  value = "",
  setValue,
  underline = false,
  width,
  padding = 12,
  ...props
}) {
  return (
    <div
      style={{ width, padding }}
      className={underline ? styles.InputUnderline : styles.InputBasic}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        style={{ all: "unset" }}
        {...props}
      />
    </div>
  );
}

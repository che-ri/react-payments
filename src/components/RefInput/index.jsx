import React, { forwardRef } from "react";
import styles from "../../styles/Input.module.css";

const RefInput = forwardRef(
  (
    {
      type = "text",
      placeholder = "",
      defaultValue = "",
      underline = false,
      width,
      padding = 12,
      ...props
    },
    ref
  ) => {
    return (
      <div
        style={{ width, padding }}
        className={underline ? styles.InputUnderline : styles.InputBasic}
      >
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
          style={{ all: "unset" }}
          {...props}
        />
      </div>
    );
  }
);
export default RefInput;

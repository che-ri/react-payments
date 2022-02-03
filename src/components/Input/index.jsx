import React from "react";
import styles from "./Input.module.css";

export default function Input({
  title = "",
  underline = undefined,
  type = "text",
  placeholder = "",
  valueList = [],
  refList = [],
  inputClassName = [],
  inputKeyName = "",
  inputRightComponent = undefined,
  titleRightComponent = undefined,
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
        {Array.isArray(refList) &&
          refList.length > 0 &&
          refList.map((ref, idx) => {
            return (
              <input
                key={`${inputKeyName}-${idx}`}
                className={
                  underline ? styles.InputUnderline : styles.InputBasic
                }
                type={type}
                ref={ref}
                placeholder={placeholder}
                defaultValue={valueList[idx]}
              />
            );
          })}
        {inputRightComponent}
      </div>
    </div>
  );
}

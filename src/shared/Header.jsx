import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to={"/"}>홈</Link>
      <Link to={"/detail"}>카드상세</Link>
    </div>
  );
}

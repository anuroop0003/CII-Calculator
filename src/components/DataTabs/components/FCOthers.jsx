import React, { useEffect } from "react";

export default function FCOthers() {
  useEffect(() => {
    window.scrollTo({
      top: 1650,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return <div></div>;
}

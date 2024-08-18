import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const leng = useSelector((state) => state.emaz.products.length);

  useEffect(() => {
    function setting() {
      const fullHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const presentPosition = document.documentElement.scrollTop;
      const percentScrolled = (presentPosition / fullHeight) * 100;
      setScrollPercent(percentScrolled);
    }

    window.addEventListener("scroll", setting);
    setting();
    return () => {
      window.removeEventListener("scroll", setting);
    };
  }, [leng]);
  return (
    <div
      style={{ height: `${scrollPercent}vh`, position: "fixed" }}
      className="bg-black px-0.5 text-white mx-0.5"
    ></div>
  );
}

export default ScrollIndicator;

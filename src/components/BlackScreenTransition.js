import React, { useEffect, useState } from "react";

const BlackScreenTransition = () => {
  const [transition, setTransition] = useState("start");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition("end");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div className={`black-screen-transition ${transition}`} />;
};

export default BlackScreenTransition;

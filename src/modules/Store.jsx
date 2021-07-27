import React, { useEffect } from "react";

function Store() {

  useEffect(() => {
    window.location.href = "https://dynasty.atshop.io";
  }, []);

  return (
    <div>
      <h2>Redirecting..</h2>
    </div>
  );
}

export default Store;
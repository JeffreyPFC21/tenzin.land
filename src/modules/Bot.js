import React, { useEffect } from "react";

function Bot() {

  useEffect(() => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=850542765150699570&permissions=8&response_type=code&scope=bot%20applications.commands%20guilds.join";
  }, []);

  return (
    <div>
      <h2>Redirecting..</h2>
    </div>
  );
}

export default Bot;
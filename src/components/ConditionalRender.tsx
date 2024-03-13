import React, { useState } from "react";

const ConditionalRender: React.FC = () => {
  const [x] = useState(true);

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/*CONDIÇÃO EM REACTJS*/}
      {x && <p>Se x for true, sim!</p>}
    </div>
  );
};

export default ConditionalRender;

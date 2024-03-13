import React, { useState } from "react";

const ConditionalRender: React.FC = () => {
  const [x] = useState(true);

  const [name] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/*CONDIÇÃO EM REACTJS*/}
      {x && <p>Se x for true, sim!</p>}
      <h1>Se o nome for João, o nome será exibido senão não será!</h1>
      {name === "João" ? (
        <div>
          <p>O nome é: {name}</p>
        </div>
      ) : (
        <div>
          <p>O nome não será exibido pois não é "João"</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;

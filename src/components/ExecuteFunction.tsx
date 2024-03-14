import React from "react";

interface ExecuteFunctionProps {
  myFunction: () => void;
}

const ExecuteFunction: React.FC<ExecuteFunctionProps> = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  );
};

export default ExecuteFunction;

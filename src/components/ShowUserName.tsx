import React from "react";

interface ShowUserNameProps {
  name: string;
}

const ShowUserName: React.FC<ShowUserNameProps> = (props) => {
  return (
    <div>
      <h1>INTRODUÇÃO AS PROPS</h1>
      <p>O nome é: {props.name}</p>
    </div>
  );
};

export default ShowUserName;

import React from "react";

interface UserDetailsProps {
  nome: string;
  idade: number;
  profissao: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  nome,
  idade,
  profissao,
}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
      </ul>
      {idade >= 18 && (
        <p>Essa pessoa tem mais de 18 anos, pode tirar a carteira.</p>
      )}
    </div>
  );
};

export default UserDetails;

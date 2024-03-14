import React from "react";

interface CarDetailsProps {
  brand: string;
  km: number;
  color: string;
}

const CarDetails: React.FC<CarDetailsProps> = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;

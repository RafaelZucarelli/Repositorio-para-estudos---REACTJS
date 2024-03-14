import React from "react";

interface CarDetailsProps {
  brand: string;
  km: number;
  color: string;
  newCar: boolean;
}

const CarDetails: React.FC<CarDetailsProps> = ({
  brand,
  km,
  color,
  newCar,
}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Esse carro é 0KM.</p>}
    </div>
  );
};

export default CarDetails;

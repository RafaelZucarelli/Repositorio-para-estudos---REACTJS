import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import UserDetails from "./components/UserDetails";
import MyForm from "./components/MyForm";

function App() {
  const cars = [
    { id: 1, brand: "Fiat", color: "Red", newCar: true, km: 0 },
    { id: 2, brand: "Renault", color: "Blue", newCar: true, km: 1400000 },
    { id: 3, brand: "Nissan", color: "Black", newCar: true, km: 18000000 },
  ];

  const pessoas = [
    { id: 1, nome: "Rafael", idade: "21", profissao: "programmer" },
    { id: 2, nome: "Maria", idade: "18", profissao: "med-vet" },
    { id: 3, nome: "Amanda", idade: "17", profissao: "psicology" },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }
  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <ConditionalRender />
        {/*PROPS */}
        <ShowUserName name="Rafael" />
        {/*DESTRUCTURING */}
        <CarDetails brand="Fiat" km={1000000} color="Blue" newCar={false} />
        {/*REAPROVEITAMENTO DE COMPONENTES */}
        <CarDetails brand="VW" km={0} color="RED" newCar={true} />
        <CarDetails brand="Ford" km={1000000} color="Wiite" newCar={false} />
        {/*LOOP EM ARRAY DE OBJETOS */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            newCar={car.newCar}
            km={car.km}
          />
        ))}
        <Container>
          <p>Este é o conteúdo</p>
        </Container>
        <ExecuteFunction myFunction={showMessage} />
        {/*state lift*/}
        {/*Desafio 4 */}
        {pessoas.map((pessoa) => (
          <UserDetails
            key={pessoa.id}
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}

        <h2>Forms</h2>
        <MyForm />
      </div>
    </>
  );
}

export default App;

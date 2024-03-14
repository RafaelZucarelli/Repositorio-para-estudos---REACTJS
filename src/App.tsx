import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";

function App() {
  const cars = [
    { id: 1, brand: "Fiat", color: "Red", newCar: true, km: 0 },
    { id: 2, brand: "Renault", color: "Blue", newCar: true, km: 1400000 },
    { id: 3, brand: "Nissan", color: "Black", newCar: true, km: 18000000 },
  ];
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
            brand={car.brand}
            color={car.color}
            newCar={car.newCar}
            km={car.km}
          />
        ))}
        <Container>
          <p>Este é o conteúdo</p>
        </Container>
      </div>
    </>
  );
}

export default App;

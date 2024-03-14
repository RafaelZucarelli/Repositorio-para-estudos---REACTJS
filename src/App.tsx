import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
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
      </div>
    </>
  );
}

export default App;

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
        <CarDetails brand="Fiat" km={1000000} color="Azul" />
      </div>
    </>
  );
}

export default App;

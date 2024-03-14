import "./App.css";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <ConditionalRender />
        <ShowUserName name="Rafael" />
      </div>
    </>
  );
}

export default App;

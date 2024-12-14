import Advice from "./components/Advice";
import Title from "./components/Title";
import UserFinder from "./components/UserFinder";

function App() {
  const title = "EJERCICIO REACT ROUTER";
  const subtitle = "Blog de Recetas C16";

  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <UserFinder/>
      <Advice/>
    </>
  );
}

export default App;

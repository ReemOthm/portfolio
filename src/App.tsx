import Heading from "./components/Heading";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="font-semibold my-5">
      <Heading />
      <main>
        <Projects />
      </main>
    </div>
  );
};

export default App;

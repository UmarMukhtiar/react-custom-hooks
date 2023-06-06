import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import useToggle from "./hooks/useToggle";
import useUpdateLogger from "./hooks/useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [value, toggleValue] = useToggle(false);
  useUpdateLogger(name);

  return (
    <>
      <div>useLocalStorage & useUpdateLogger</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>useToggle</div>
      <div>
        <div>{value.toString()}</div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>True</button>
        <button onClick={() => toggleValue(false)}>False</button>
      </div>
    </>
  );
}

export default App;

import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const parentHandleInput = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <main>
      <Header handleInput={parentHandleInput} />
      <Body searchValue={searchValue} />
    </main>
  );
}
export default App;

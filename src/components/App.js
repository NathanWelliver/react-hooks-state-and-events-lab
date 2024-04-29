import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
    const [isLight, pageIsLight] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLight ? "App dark" : "App light"
  function handleClick(){
    pageIsLight((isLight) => !isLight)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isLight ? "Dark Mode": "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

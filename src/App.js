import Button from "./components/button";
import Header from "./components/header";
import TodoItems from "./components/todoitems";
import "./style.css";
import Counter from "./components/counterComponents";

function App() {
  return (
    <div className="todo-container">
      <Counter />
      <Header text="Todo!" />
      <TodoItems text="Apple" />
      <TodoItems text="Orange" />
      <TodoItems text="Banana" />
      <TodoItems text="Kiwi" />
      <TodoItems text="PineApple" />
      <Button />
    </div>
  );
}

export default App;

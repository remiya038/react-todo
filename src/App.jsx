import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";

export const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setcompleteTodos] = useState(["ううう", "えええ"]);
  const [todoText, setTodoText] = useState("");

  const onChangeText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newincompleteTodos = [...incompleteTodos];
    newincompleteTodos.splice(index, 1);
    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newcompleteTodos);
    setincompleteTodos(newincompleteTodos);
  };

  const onClickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);
    const newincompleteTodos = [...incompleteTodos, completeTodos[index]];
    setcompleteTodos(newcompleteTodos);
    setincompleteTodos(newincompleteTodos);
  };

  return (
    <>
      <InputTodo
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
        todoText={todoText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです</p>
      )}
      <Incomplete
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
        incompleteTodos={incompleteTodos}
      />
      <Complete onClickBack={onClickBack} completeTodos={completeTodos} />
    </>
  );
};

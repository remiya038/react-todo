import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (Props) => {
  const { onChangeText, onClickAdd, todoText, disabled } = Props;
  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeText}
        disabled={disabled}
      ></input>
      <button onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

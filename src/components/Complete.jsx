import React from "react";

export const Complete = (props) => {
  const { onClickBack, completeTodos } = props;

  return (
    <div className="complete-area">
      <p className="title">完了済のタスク</p>
      <div>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickBack(index);
                  }}
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

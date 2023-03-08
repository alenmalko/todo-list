import React, { startTransition } from "react";

function TodoItem(props) {
  function handleDelete() {
    props.onDelete(props.index);
  }

  return (
    <li>
      {props.todo}
      <button onClick={handleDelete}>X</button>
    </li>
  );
}

export default TodoItem;
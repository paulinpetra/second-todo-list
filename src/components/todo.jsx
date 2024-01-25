import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ todoItem, toggleComplete, deleteTodo }) => {
  return (
    <div className="Todo" onClick={() => toggleComplete(todoItem.id)}>
      <p className={`${todoItem.completed ? "completed" : ""}`}>
        {todoItem.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={(e) => {
            if (!e.target.classList.contains("delete-icon")) {
              e.stopPropagation();
            }
            deleteTodo(todoItem.id);
          }}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default ToDo;

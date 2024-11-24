import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";

const TaskItem = ({ tarefa }) => {
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        tarefa.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {tarefa.description}
                    <input
                        type="checkbox"
                        defaultChecked={tarefa.isCompleted}
                    />
                    <span
                        className={
                            tarefa.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>

            <div className="delete">
                <AiFillDelete size={18} color="#F97474" />
            </div>
        </div>
    );
};

export default TaskItem;

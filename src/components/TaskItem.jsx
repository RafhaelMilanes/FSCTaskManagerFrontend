import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";
import "./TaskItem.scss";

const TaskItem = ({ tarefa, fetchTasks }) => {
    const alert = useAlert();

    const handleDeleteTask = async () => {
        try {
            await axios.delete(
                `https://fsctaskmanagerbackend.onrender.com/tasks/${tarefa._id}`
            );
            await fetchTasks();
            alert.success("A tarefa foi removida com sucesso!");
        } catch (_error) {
            alert.error("Algo deu errado.");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(
                `https://fsctaskmanagerbackend.onrender.com/tasks/${tarefa._id}`,
                {
                    isCompleted: e.target.checked,
                }
            );
            await fetchTasks();

            alert.success("A tarefa foi modificada com sucesso.");
        } catch (_error) {
            alert.error("Algo deu errado.");
        }
    };
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
                        onChange={(e) => handleTaskCompletionChange(e)}
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
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={handleDeleteTask}
                />
            </div>
        </div>
    );
};

export default TaskItem;

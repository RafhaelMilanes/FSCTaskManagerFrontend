import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://fsctaskmanagerbackend.onrender.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <>
            <div className="tasks-container">
                <h2>Minhas Tarefas</h2>
                <div className="last-tasks">
                    <h3>Últimas Tarefas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <TaskItem tarefa={lastTask} />
                            ))}
                    </div>
                </div>
                <div className="completed-tasks">
                    <h2>Tarefas Done</h2>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted === true)
                            .map((completedtask) => (
                                <TaskItem tarefa={completedtask} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
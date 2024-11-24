import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const alert = useAlert;
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://fsctaskmanagerbackend.onrender.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            alert.error("Não foi possivel recuperar as tarefas");
        }
    };

    const lastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTasks = useMemo(() => {
        return tasks.filter((tasks) => tasks.isCompleted === true);
    }, [tasks]);

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <>
            <div className="tasks-container">
                <h2>Minhas Tarefas ✍</h2>
                <div className="last-tasks">
                    <h3>Últimas Tarefas</h3>
                    <AddTask fetchTasks={fetchTasks} />
                    <div className="tasks-list">
                        {lastTasks.map((lastTask) => (
                            <TaskItem
                                key={lastTask._id}
                                tarefa={lastTask}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                    </div>
                </div>
                <div className="completed-tasks">
                    <h2>Tarefas Concluídas 🎉</h2>
                    <div className="tasks-list">
                        {completedTasks.map((completedtask) => (
                            <TaskItem
                                key={completedtask._id}
                                tarefa={completedtask}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;

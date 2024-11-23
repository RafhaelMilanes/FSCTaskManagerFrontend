import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "Estudar Programação",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Estudar React",
            isCompleted: true,
        },
    ]);
    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} tarefa={task} />
            ))}
        </>
    );
};

export default App;

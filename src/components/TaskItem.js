const TaskItem = ({ tarefa }) => {
    return (
        <>
            <h1>{tarefa.description}</h1>
            <p>{tarefa.isCompleted ? "Completa" : "Não Completa"}</p>
        </>
    );
};

export default TaskItem;

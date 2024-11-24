import CustomInput from "./CustomInput";
import CustomButtom from "./CustomButtom";

import "./AddTask.scss";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useAlert } from "react-alert";

const AddTask = () => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error("A tarefa precisa de uma descrição");
            }
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar Tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButtom onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButtom>
        </div>
    );
};

export default AddTask;

import CustomInput from "./CustomInput";
import CustomButtom from "./CustomButtom";

import "./AddTask.scss";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar Tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButtom>
                <FaPlus size={14} color="#ffffff" />
            </CustomButtom>
        </div>
    );
};

export default AddTask;

import React, { useState }from "react";
import styles from "./addToDo.module.css";



const AddToDo = (props) => {

    const [valueTask, setValueTask] = useState();
    
   

    const onChangeValueTask = (e) =>{
        setValueTask(e.target.value);
    };

    const callParent = () =>{
        props.addTaskChild(valueTask);
        setValueTask("");
    };

    return (
        <>
            <section className={styles.addToDoContainer}>
                <input type="text" placeholder="Type your task here" className={styles.inputTask} onChange={onChangeValueTask} value={valueTask}></input>
                <button className={styles.addButton} onClick={callParent}>{props.messageBtn}</button>
            </section>
        </>

    );
}

export default AddToDo;
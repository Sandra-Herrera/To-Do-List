import React from "react";
import styles from "./toDoItem.module.css";
import imgEdit from "../../img/imgEdit.png";
import imgDelete from "../../img/imgDelete.png";
import { useState } from "react";
import { useEffect } from "react";

const ToDoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [initialValue, setInitialValue] = useState("");
    const [isDone, setIsDone] = useState(false);

    const [description, setDescription] = useState(props.taskDescription);
    useEffect(() => {
        setDescription(props.taskDescription)
    }, [props.taskDescription])

    const deleteItem = (e) => {
        props.deleteTaskChild(description, parseInt(e.target.id));
    }

    const onEdit = () => {
        setInitialValue(description);
        setIsEditing(true);
    }

    const saveChanges = (e) => {
        props.editTaskChild(initialValue, description, parseInt(e.target.id));
        setIsEditing(false);
    }

    const onChangeValueTask = (e) => {
        setDescription(e.target.value);
    };

    const taskDone = (e) => {
        setIsDone(!isDone);
    }

    return (
        <>
            <section className={styles.taskDescriptionContainer}>
                {isEditing ?
                    <>
                        <section className={styles.editContainer}>
                            <input type="text" placeholder="Edit your task here" className={styles.inputTask} onChange={onChangeValueTask} value={description}></input>
                            <button className={styles.saveButton} id={props.index} onClick={saveChanges}>Save</button>
                        </section>
                    </>
                    :
                    <>
                        <span className={isDone ? styles.lineText : ''} onClick={taskDone}>{description}</span>
                        <section className={styles.buttonsArea}>
                            <button className={styles.buttonsIcons} onClick={onEdit}>
                                <img alt="iconEdit"
                                    className={styles.imgIcon}
                                    src={imgEdit}>
                                </img>
                            </button>
                            <button className={styles.buttonsIcons} onClick={deleteItem}>
                                <img alt="iconDelete"
                                    className={styles.imgIcon}
                                    id={props.index}
                                    src={imgDelete}>
                                </img>
                            </button>
                        </section>
                    </>
                }

            </section>
        </>
    );

};

export default ToDoItem
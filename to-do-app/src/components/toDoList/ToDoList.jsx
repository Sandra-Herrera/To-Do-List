import React, { useEffect, useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";
import AddToDo from "../addToDo/AddToDo";
import styles from "./toDoList.module.css";
import imgDown from "../../img/imgDown.png";
import pinIcon from "../../img/pinIcon.png";

const ToDoList = () => {

    const [trackTask, setTrackTask] = useState([]);
    const [listTask, setListTask] = useState([]);

    useEffect(() => {
        let allTask = getDataFromLocalStorage();
        setListTask(allTask);


    }, [trackTask]);

    const getDataFromLocalStorage = () => {
        let data = window.localStorage.getItem('tasks');

        if (data && data.length > 0) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    };



    const addTask = (valueTask) => {
        let localStorageData = getDataFromLocalStorage();
        localStorageData.push(valueTask);
        window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
        setTrackTask(localStorageData);
    };

    const deleteTask = (valueTask, indexTask) => {
        let localStorageData = getDataFromLocalStorage();
        localStorageData = localStorageData.filter((element, indx) => indx !== indexTask);
        window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
        setTrackTask(localStorageData);
    };

    const editTask = (initialValue, editedValue, indexTask) => {
        let localStorageData = getDataFromLocalStorage();
        localStorageData = localStorageData.map((element, indx) => element = (element === initialValue && indx === indexTask ? editedValue : element));
        window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
        setTrackTask(localStorageData);
    }


    return (
        <>
            <section className={styles.areaToDoList}>
                <section className={styles.container} >
                    <header className={styles.headerTitle}>
                        <h1 className={styles.titleToDoList}>To Do App
                            <img alt="iconPin"
                                className={styles.pinIcon}
                                src={pinIcon}>
                            </img>
                        </h1>
                        <span className={styles.subTitle}>Enjoy managing your tasks!</span>
                        <hr />
                    </header>
                    <section className={styles.containerItems}>
                        {listTask.length === 0 ?
                            <div className={styles.messageArea}>
                                <span className={styles.message}>Add a new task here
                                    <img alt="iconDown"
                                        className={styles.downIcon}
                                        src={imgDown}>
                                    </img>
                                </span>
                            </div>
                            :
                            listTask.map((item, index) => {
                                return <ToDoItem key={index} index={index} taskDescription={item} deleteTaskChild={deleteTask} editTaskChild={editTask} />
                            })
                        }
                    </section>
                    <AddToDo addTaskChild={addTask} messageBtn={"Add To Do"} />
                </section>
            </section>
        </>
    );
};

export default ToDoList;

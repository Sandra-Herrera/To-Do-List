import React, { useEffect, useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";
import AddToDo from "../addToDo/AddToDo";
import styles from "./toDoList.module.css";

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

    const deleteTask = (valueTask) => {
        let localStorageData = getDataFromLocalStorage();
        localStorageData = localStorageData.filter((element)=>element !== valueTask);
        window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
        setTrackTask(localStorageData);
    };

    const editTask = (initialValue, editedValue) => {
        let localStorageData = getDataFromLocalStorage();
        localStorageData = localStorageData.map((element) => element = (element === initialValue ?  editedValue : element));
        window.localStorage.setItem('tasks', JSON.stringify(localStorageData));
        setTrackTask(localStorageData);
    }


    return (
        <>
            <section className={styles.areaToDoList}>
                <section className={styles.container} >
                    <header className={styles.headerTitle}>
                        <h1 className={styles.titleToDoList}>Todo List</h1>
                        <span className={styles.subTitle}>A simple React Todo List App</span>
                        <hr/>
                    </header>
                    <section className={styles.containerItems}>
                        {listTask.map((item, index) => {
                            return <ToDoItem key={index}  taskDescription={item} deleteTaskChild={deleteTask} editTaskChild={editTask}/>
                        })}
                    </section>
                    <AddToDo addTaskChild={addTask} messageBtn={"Add To Do"}/>
                </section>
            </section>
        </>
    );
};

export default ToDoList;

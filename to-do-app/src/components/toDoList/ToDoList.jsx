import React, { useEffect, useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";
import AddToDo from "../addToDo/AddToDo";

const ToDoList = () =>{

    const [trackTask,setTrackTask] = useState([]);
    const [listTask,setListTask] = useState([]);

    useEffect(()=>{
        let allTask = getDataFromLocalStorage();
        setListTask(allTask);


    },[trackTask]);

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


  
    return(
        <>
            {listTask.map((item,index)=>{
                return <ToDoItem key={index} taskDescription = {item}/>
            })}
            
            <AddToDo addTaskChild = {addTask}/>
        </>
    );
};

export default ToDoList;

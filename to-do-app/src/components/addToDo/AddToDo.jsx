import React, { useState }from "react";


const AddToDo = (props) => {

    const [valueTask, setValueTask] = useState();
    
   

    const onChangeValueTask = (e) =>{
        setValueTask(e.target.value);
    };

    const callParent = () =>{
        props.addTaskChild(valueTask);

    };

    return (
        <>
            <section>
                <input type="text" placeholder="Type your task here" onChange={onChangeValueTask}></input>
                <button onClick={callParent}>Add</button>
            </section>
        </>

    );
}

export default AddToDo;
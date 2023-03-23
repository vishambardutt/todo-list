import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fontawesome } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  let [ToDo, setToDo] = useState([
    { 'id': 1, 'Title': 'Task 1', 'status': false },
    { 'id': 2, 'Title': 'Task 2', 'status': false }
   ]);

  let [task, setTask] = useState('');
  let [updateData, setUpdateData] = useState('');

  let addTask = () => {

  }

  let deleteTask = (id) => {

  }
  let markTask = (id) => {

  }
  let cancelUpdate = () => {

  }
  let changeTask = (e) => {

  }
  let toUpdateTask = () => {

  }
  return (
    <div className="container App">
      <div>
        <br></br>
        <h3>To Do React App</h3>
        <h6>{ToDo && ToDo.length? '' : 'No Tasks...'}</h6>
        <h5>{ToDo && ToDo.map((task,index)=>{
          return (
            <React.Fragment key ={task.id}>
              <div className='col task-bg'>
                <div className={'task.status'? 'done': ''}>
              <span className='tasknumber'>{index + 1}</span>
              <span className='taskText'>{task.Title}</span>
              </div>
              <div className='icons'>
                <span ></span>
                <span ></span>
                <span ></span>
              </div>
              </div>

            </React.Fragment>
          )

        })
        }</h5>

        </div>

    </div>
  );
}

export default App;

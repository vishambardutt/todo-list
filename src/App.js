import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fontawesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  let [ToDo, setToDo] = useState([
    { 'id': 1, 'title': 'Task 1', 'status': false },
    { 'id': 2, 'title': 'Task 2', 'status': false }
  ]);

  let [task, setTask] = useState('');
  let [updateData, setUpdateData] = useState('');

  let addTask = () => {
    if (task) {
      let num = ToDo.length + 1;
      let newtaskentry = { id: num, title: task, status: false }
      setToDo([...ToDo, newtaskentry])
      setTask('');
    }

  }

  let deleteTask = (id) => {
    let newtask = ToDo.filter(task => task.id !== id)
    setToDo(newtask);

  }
  let markTask = (id) => {
    let newtask = ToDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      } return task;
    })
    setToDo(newtask)

  }
  let cancelUpdate = () => {
    setUpdateData('')

  }
  let changeTask = (e) => {
    let newtaskentry = {
      id: updateData.id, title: e.target.value, status: updateData.status ? true : false
    }
    setUpdateData(newtaskentry);

  }
  let toUpdateTask = () => {
    let filterRecord = [...ToDo].filter(task => task.id !== updateData.id);
    let updateList = [...filterRecord, updateData]
    setToDo(updateList);
    setUpdateData('');

  }
  return (
    <div className="container App">
      <h3>To Do React App</h3>
      <div>
        {updateData && updateData ? (
          <>
            <div className='row'>
              <div className='col'><input value={updateData && updateData.title} onChange={(e) => changeTask(e)} className='form-control form-control lg' /></div>
              <div className='col-auto'>
                <button onClick={toUpdateTask} className='btn btn-lg btn-success mr-20'>Update</button>
                <button onClick={cancelUpdate} className='btn btn-lg btn-warning'>CENCEL</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='row'>
              <div className='col'><input value={task} onChange={(e) => setTask(e.target.value)} className='form-control form-control lg' />

              </div>
              <div className='col-auto'>
                <button onClick={addTask} className='btn btn-lg btn-success'>ADD</button>
              </div>

            </div>
          </>


        )}



        <h6>{ToDo && ToDo.length ? '' : 'No Tasks...'}</h6>

        <h5>{ToDo && ToDo
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className='col task-bg'>
                  <div className={'task.status' ? 'done' : ''}>
                    <span className='tasknumber'>{index + 1}</span>
                    <span className='tasktext'>{task.title}</span>
                  </div>
                  <div className='icon'>
                    <span title='completed / not completed' onClick={(e) => markTask(task.id)} ><FontAwesomeIcon icon={faCircleCheck} /></span>
                    {task.status ? null : (<span title='edit' onClick={() => setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false })} ><FontAwesomeIcon icon={faPen} /></span>)}

                    <span title='deleted' onClick={() => deleteTask(task.id)} ><FontAwesomeIcon icon={faTrashCan} /></span>
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

import React from 'react';
import {Col, Row} from 'react-bootstrap';

function Todo({ todo, index, completeTodo, unCompleteTodo, removeTodo }) {
    return (
          <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
          {todo.text}
          <div>
          <button onClick={() => completeTodo(index)} className="btn btn-icon-check"> 
            <i className="fas fa-check-circle"></i>
          </button>
          <button onClick={() => unCompleteTodo(index)} className="btn btn-icon-redo"> 
          <i className="fas fa-redo"></i>
          </button>
          <button onClick={() => removeTodo(index)} className="btn btn-icon-trash"> <i className="fas fa-trash"></i> </button>
        </div>
      </div>
    );
  }
  
  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="card-header-todo mb-3">
        <Row>
          <Col className="col-md-8">
            <input 
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)
            }/>
           </Col>
           <Col className="col-md-4 btn-add">
            <button type="submit" className="btn-success">Adicionar</button>
           </Col>
        </Row>
      </form>
    );
  }
  
  function Main() {
    const [todos, setTodos] = React.useState([
      {
        text: "Capturar Mew",
        isCompleted: false
      },
      {
        text: "Comprar ração para gatos",
        isCompleted: false
      },
      {
        text: "Dar água aos cactos 🌵",
        isCompleted: false
      }
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const unCompleteTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = false;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="todoList container-fluid">
        <div className="todo-header">
          <div className="todo-list-header">
              <h2>Tarefas </h2>
          </div>  
      </div>   
          <div className="card">
              <div className="card-body todo-body">
                  <div className="card-todo-form">
                      <TodoForm addTodo={addTodo}/>
                  </div>
                  <div className="card-list">
                      {todos.map((todo, index) => (
                      <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        unCompleteTodo={unCompleteTodo}
                      />
                    ))}   
                  </div>
              </div><div className="card-pixels-todo">
                    <span className="pixels">todos</span>
                    </div>
            </div>
      </div>
    );
  }
  
  export default Main;

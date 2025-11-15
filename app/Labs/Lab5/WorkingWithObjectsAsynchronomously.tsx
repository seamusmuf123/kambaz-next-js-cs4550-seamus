"use client";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import FormControl from "react-bootstrap/FormControl";
import * as client from "./client";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { FaTrash } from "react-icons/fa";
export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };
   const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
const createNewTodo = async (todo: any) => {
    const todos = await client.createNewTodo(todo);
    setTodos(todos);
  };
const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false, });
    setTodos([...todos, newTodo]);
    };
    const deleteTodo = async (todo: any) => {
        try {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t );
    setTodos(updatedTodos);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const updateTodo = async (todo: any) => {
    try {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
    };

  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
      <h4>Todos <FaPlusCircle onClick={createNewTodo} className="text-success float-end fs-3" /> 
      <FaPlusCircle onClick={postNewTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   /></h4>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaTrash onClick={() => removeTodo(todo)}
                     className="text-danger float-end mt-1" id="wd-remove-todo"/>
                     <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
                        <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
            <input type="checkbox" className="form-check-input me-2"
                   defaultChecked={todo.completed}onChange={(e) => updateTodo({ ...todo, completed: e.target.checked }) } />
              {!todo.editing ? ( todo.title ) : (
                <FormControl className="w-50 float-start" defaultValue={todo.title}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, editing: false });
                    }
                  }}
                  onChange={(e) =>
                    updateTodo({ ...todo, title: e.target.value })
                  }
                />
              )}

            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h4>Assignment</h4>
      <FormControl defaultValue={assignment.title} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value }) } />
      <FormControl  defaultValue={assignment.description} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value }) }/>
      <FormControl type="date" className="mb-2" defaultValue={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="wd-completed"
               defaultChecked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked }) } />
        <label className="form-check-label" htmlFor="wd-completed"> Completed </label>
      </div>
      <button className="btn btn-primary me-2" onClick={() => updateTitle(assignment.title)} >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
);}

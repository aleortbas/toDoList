import './App.css';
import React, { Component } from 'react';
import Main from "./components/Main";
import Home from './components/HomeCompenent';
import ToDoList from './components/ToDoList';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="ToDoList" element={<ToDoList/>} />
    </Route>
  )
)

class App extends Component {
  render() {
    return (
      <RouterProvider router={router} />
    );
  }
}

export default App;
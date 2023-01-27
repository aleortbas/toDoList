import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom'
import loginForm from "./loginForm";
import HomePage from "./homePage";

class Main extends Component {
    render() {
      const HomePage = () => {
        return <HomePage />;
      };
  
      return (
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      );
    }
  }
  
  export default Main;
  
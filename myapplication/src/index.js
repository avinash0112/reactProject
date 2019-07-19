import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import { SocialCard } from './App.js'
//import { Layout1 } from './App.js';
//import { Layout2 } from './components/layout2.js';
//import {AssignmentFive} from './components/assignmentFive.js'
//import { AssignmentSix } from "./components/assignmentSix.js";
//import { Header } from "./components/common/header.js";
//import { Button } from "./components/common/button.js";
//import { MainPage } from "./components/common/homePage.jsx";
import { ComponentOne } from "./components/udemyExercise";
ReactDOM.render(<ComponentOne />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

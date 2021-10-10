import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";


// function declaration
function App() {
    console.log("App rendering")
    // return JSX {
    return (
        <div>
            <PageTitle title = {"This is App"}/>
            <PageTitle title = {"My friends"}/>
            <Rating value = {3}/>
            <Accordion title = {"Title"}/>
            <Accordion title = {"Menu"}/>
            <Rating value = {4}/>
            <Rating value = {2}/>
            <Rating value = {1}/>
            <Rating value = {0}/>
            <Rating value = {5}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return (
        <h1>
            {props.title}
        </h1>
    );
}


export default App;
























import React from "react";
import ReactDOM from "react-dom/client";
import { } from './index.css'

const myEl = React.createElement("div", { className: "title" }, [React.createElement("h1", { id: "header" }, "I am heading One"),
React.createElement("h2", { id: "header2" }, "I am heading two"),
React.createElement("h3", { id: "header3" }, "I am heading three")
])

const JsxElement = (
    <div className="title">
        <h1>I am heading one </h1>
        <h2>I am heading two</h2>
        <h3>I am heading three</h3>

    </div>)

const MyFnComp = () => {
    return (
        <div className="title">
            <h1>I am h1</h1>
            <h2>I am h1</h2>
            <h3>I am h1</h3>

        </div>
    )
}

// Component Compositions------
const MyComponent = () => {
    return (<div>
        {JsxElement}
        <p>My component </p>
    </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(JsxElement);
root.render(<MyComponent />);
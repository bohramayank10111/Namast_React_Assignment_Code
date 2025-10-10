import React from "react";
import ReactDOM from "react-dom/client";
import { } from './App.css'
import FirstUiTask from "./Assignments/CodingTasks/Component/FirstUiTask";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);
//  root.render(<HeadingComponent/>);
root.render(<AppLayout />);